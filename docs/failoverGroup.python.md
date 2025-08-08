# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktf/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allowed_accounts: typing.List[str] = None,
  allowed_databases: typing.List[str] = None,
  allowed_integration_types: typing.List[str] = None,
  allowed_shares: typing.List[str] = None,
  from_replica: FailoverGroupFromReplica = None,
  id: str = None,
  ignore_edition_check: typing.Union[bool, IResolvable] = None,
  object_types: typing.List[str] = None,
  replication_schedule: FailoverGroupReplicationSchedule = None,
  timeouts: FailoverGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases">allowed_databases</a></code> | <code>typing.List[str]</code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares">allowed_shares</a></code> | <code>typing.List[str]</code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.fromReplica">from_replica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule">replication_schedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `allowed_accounts`<sup>Optional</sup> <a name="allowed_accounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedAccounts"></a>

- *Type:* typing.List[str]

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `allowed_databases`<sup>Optional</sup> <a name="allowed_databases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedDatabases"></a>

- *Type:* typing.List[str]

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowed_integration_types`<sup>Optional</sup> <a name="allowed_integration_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedIntegrationTypes"></a>

- *Type:* typing.List[str]

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS", "STORAGE INTEGRATIONS", "EXTERNAL ACCESS INTEGRATIONS", "NOTIFICATION INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowed_shares`<sup>Optional</sup> <a name="allowed_shares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.allowedShares"></a>

- *Type:* typing.List[str]

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `from_replica`<sup>Optional</sup> <a name="from_replica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.fromReplica"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.ignoreEditionCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `object_types`<sup>Optional</sup> <a name="object_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.objectTypes"></a>

- *Type:* typing.List[str]

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `replication_schedule`<sup>Optional</sup> <a name="replication_schedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.replicationSchedule"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica">put_from_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule">put_replication_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts">reset_allowed_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">reset_allowed_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">reset_allowed_integration_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">reset_allowed_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica">reset_from_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">reset_ignore_edition_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes">reset_object_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">reset_replication_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_from_replica` <a name="put_from_replica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica"></a>

```python
def put_from_replica(
  name: str,
  organization_name: str,
  source_account_name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.name"></a>

- *Type:* str

Identifier for the primary failover group in the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#name FailoverGroup#name}

---

###### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.organizationName"></a>

- *Type:* str

Name of your Snowflake organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#organization_name FailoverGroup#organization_name}

---

###### `source_account_name`<sup>Required</sup> <a name="source_account_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putFromReplica.parameter.sourceAccountName"></a>

- *Type:* str

Source account from which you are enabling replication and failover of the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}

---

##### `put_replication_schedule` <a name="put_replication_schedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule"></a>

```python
def put_replication_schedule(
  cron: FailoverGroupReplicationScheduleCron = None,
  interval: typing.Union[int, float] = None
) -> None
```

###### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule.parameter.cron"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#cron FailoverGroup#cron}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putReplicationSchedule.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Specifies the interval in minutes for the replication schedule.

The interval must be greater than 0 and less than 1440 (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#interval FailoverGroup#interval}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#create FailoverGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#read FailoverGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#update FailoverGroup#update}.

---

##### `reset_allowed_accounts` <a name="reset_allowed_accounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedAccounts"></a>

```python
def reset_allowed_accounts() -> None
```

##### `reset_allowed_databases` <a name="reset_allowed_databases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```python
def reset_allowed_databases() -> None
```

##### `reset_allowed_integration_types` <a name="reset_allowed_integration_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```python
def reset_allowed_integration_types() -> None
```

##### `reset_allowed_shares` <a name="reset_allowed_shares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```python
def reset_allowed_shares() -> None
```

##### `reset_from_replica` <a name="reset_from_replica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetFromReplica"></a>

```python
def reset_from_replica() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_edition_check` <a name="reset_ignore_edition_check" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```python
def reset_ignore_edition_check() -> None
```

##### `reset_object_types` <a name="reset_object_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetObjectTypes"></a>

```python
def reset_object_types() -> None
```

##### `reset_replication_schedule` <a name="reset_replication_schedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```python
def reset_replication_schedule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroup.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FailoverGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica">from_replica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">replication_schedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">allowed_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">allowed_databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">allowed_integration_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">allowed_shares_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput">from_replica_input</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">ignore_edition_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">object_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">replication_schedule_input</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">allowed_databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">allowed_shares</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `from_replica`<sup>Required</sup> <a name="from_replica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplica"></a>

```python
from_replica: FailoverGroupFromReplicaOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference">FailoverGroupFromReplicaOutputReference</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```python
replication_schedule: FailoverGroupReplicationScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference">FailoverGroupReplicationScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts"></a>

```python
timeouts: FailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a>

---

##### `allowed_accounts_input`<sup>Optional</sup> <a name="allowed_accounts_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```python
allowed_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_databases_input`<sup>Optional</sup> <a name="allowed_databases_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```python
allowed_databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types_input`<sup>Optional</sup> <a name="allowed_integration_types_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```python
allowed_integration_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_shares_input`<sup>Optional</sup> <a name="allowed_shares_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```python
allowed_shares_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `from_replica_input`<sup>Optional</sup> <a name="from_replica_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.fromReplicaInput"></a>

```python
from_replica_input: FailoverGroupFromReplica
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_edition_check_input`<sup>Optional</sup> <a name="ignore_edition_check_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```python
ignore_edition_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_types_input`<sup>Optional</sup> <a name="object_types_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```python
object_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_schedule_input`<sup>Optional</sup> <a name="replication_schedule_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```python
replication_schedule_input: FailoverGroupReplicationSchedule
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FailoverGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>]

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_databases`<sup>Required</sup> <a name="allowed_databases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```python
allowed_databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types`<sup>Required</sup> <a name="allowed_integration_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_shares`<sup>Required</sup> <a name="allowed_shares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```python
allowed_shares: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_edition_check`<sup>Required</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allowed_accounts: typing.List[str] = None,
  allowed_databases: typing.List[str] = None,
  allowed_integration_types: typing.List[str] = None,
  allowed_shares: typing.List[str] = None,
  from_replica: FailoverGroupFromReplica = None,
  id: str = None,
  ignore_edition_check: typing.Union[bool, IResolvable] = None,
  object_types: typing.List[str] = None,
  replication_schedule: FailoverGroupReplicationSchedule = None,
  timeouts: FailoverGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the failover group. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">allowed_databases</a></code> | <code>typing.List[str]</code> | Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">allowed_shares</a></code> | <code>typing.List[str]</code> | Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica">from_replica</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | from_replica block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `false`) Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | Type(s) of objects for which you are enabling replication and failover from the source account to the target account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">replication_schedule</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | replication_schedule block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the failover group.

The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `allowed_accounts`<sup>Optional</sup> <a name="allowed_accounts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled.

Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `allowed_databases`<sup>Optional</sup> <a name="allowed_databases" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```python
allowed_databases: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include DATABASES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `allowed_integration_types`<sup>Optional</sup> <a name="allowed_integration_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

Type(s) of integrations for which you are enabling replication and failover from the source account to the target account.

This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS", "STORAGE INTEGRATIONS", "EXTERNAL ACCESS INTEGRATIONS", "NOTIFICATION INTEGRATIONS"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `allowed_shares`<sup>Optional</sup> <a name="allowed_shares" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```python
allowed_shares: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account.

The OBJECT_TYPES list must include SHARES to set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `from_replica`<sup>Optional</sup> <a name="from_replica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.fromReplica"></a>

```python
from_replica: FailoverGroupFromReplica
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

from_replica block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#from_replica FailoverGroup#from_replica}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `false`) Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `object_types`<sup>Optional</sup> <a name="object_types" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

Type(s) of objects for which you are enabling replication and failover from the source account to the target account.

The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `replication_schedule`<sup>Optional</sup> <a name="replication_schedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```python
replication_schedule: FailoverGroupReplicationSchedule
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

replication_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts"></a>

```python
timeouts: FailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

### FailoverGroupFromReplica <a name="FailoverGroupFromReplica" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupFromReplica(
  name: str,
  organization_name: str,
  source_account_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name">name</a></code> | <code>str</code> | Identifier for the primary failover group in the source account. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName">organization_name</a></code> | <code>str</code> | Name of your Snowflake organization. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName">source_account_name</a></code> | <code>str</code> | Source account from which you are enabling replication and failover of the specified objects. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier for the primary failover group in the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Name of your Snowflake organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#organization_name FailoverGroup#organization_name}

---

##### `source_account_name`<sup>Required</sup> <a name="source_account_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica.property.sourceAccountName"></a>

```python
source_account_name: str
```

- *Type:* str

Source account from which you are enabling replication and failover of the specified objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}

---

### FailoverGroupReplicationSchedule <a name="FailoverGroupReplicationSchedule" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupReplicationSchedule(
  cron: FailoverGroupReplicationScheduleCron = None,
  interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron">cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | cron block. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Specifies the interval in minutes for the replication schedule. |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.cron"></a>

```python
cron: FailoverGroupReplicationScheduleCron
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#cron FailoverGroup#cron}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the interval in minutes for the replication schedule.

The interval must be greater than 0 and less than 1440 (24 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#interval FailoverGroup#interval}

---

### FailoverGroupReplicationScheduleCron <a name="FailoverGroupReplicationScheduleCron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupReplicationScheduleCron(
  expression: str,
  time_zone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression">expression</a></code> | <code>str</code> | Specifies the cron expression for the replication schedule. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone">time_zone</a></code> | <code>str</code> | Specifies the time zone for secondary group refresh. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.expression"></a>

```python
expression: str
```

- *Type:* str

Specifies the cron expression for the replication schedule.

The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#expression FailoverGroup#expression}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Specifies the time zone for secondary group refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#time_zone FailoverGroup#time_zone}

---

### FailoverGroupTimeouts <a name="FailoverGroupTimeouts" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#create FailoverGroup#create}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#delete FailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#read FailoverGroup#read}. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#update FailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#create FailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#read FailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#update FailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupFromReplicaOutputReference <a name="FailoverGroupFromReplicaOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupFromReplicaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput">source_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName">source_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `source_account_name_input`<sup>Optional</sup> <a name="source_account_name_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountNameInput"></a>

```python
source_account_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `source_account_name`<sup>Required</sup> <a name="source_account_name" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.sourceAccountName"></a>

```python
source_account_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplicaOutputReference.property.internalValue"></a>

```python
internal_value: FailoverGroupFromReplica
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupFromReplica">FailoverGroupFromReplica</a>

---


### FailoverGroupReplicationScheduleCronOutputReference <a name="FailoverGroupReplicationScheduleCronOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupReplicationScheduleCronOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference.property.internalValue"></a>

```python
internal_value: FailoverGroupReplicationScheduleCron
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---


### FailoverGroupReplicationScheduleOutputReference <a name="FailoverGroupReplicationScheduleOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupReplicationScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron">put_cron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron">reset_cron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval">reset_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cron` <a name="put_cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron"></a>

```python
def put_cron(
  expression: str,
  time_zone: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron.parameter.expression"></a>

- *Type:* str

Specifies the cron expression for the replication schedule.

The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#expression FailoverGroup#expression}

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.putCron.parameter.timeZone"></a>

- *Type:* str

Specifies the time zone for secondary group refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/failover_group#time_zone FailoverGroup#time_zone}

---

##### `reset_cron` <a name="reset_cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetCron"></a>

```python
def reset_cron() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron">cron</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput">cron_input</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cron"></a>

```python
cron: FailoverGroupReplicationScheduleCronOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCronOutputReference">FailoverGroupReplicationScheduleCronOutputReference</a>

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.cronInput"></a>

```python
cron_input: FailoverGroupReplicationScheduleCron
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleCron">FailoverGroupReplicationScheduleCron</a>

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationScheduleOutputReference.property.internalValue"></a>

```python
internal_value: FailoverGroupReplicationSchedule
```

- *Type:* <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupReplicationSchedule">FailoverGroupReplicationSchedule</a>

---


### FailoverGroupTimeoutsOutputReference <a name="FailoverGroupTimeoutsOutputReference" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import failover_group

failoverGroup.FailoverGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FailoverGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>]

---



