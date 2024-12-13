# `databaseOld` Submodule <a name="`databaseOld` Submodule" id="@cdktf/provider-snowflake.databaseOld"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseOld <a name="DatabaseOld" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old snowflake_database_old}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOld(
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
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  from_database: str = None,
  from_replica: str = None,
  from_share: typing.Mapping[str] = None,
  id: str = None,
  is_transient: typing.Union[bool, IResolvable] = None,
  replication_configuration: DatabaseOldReplicationConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the database; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.fromDatabase">from_database</a></code> | <code>str</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.fromReplica">from_replica</a></code> | <code>str</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.fromShare">from_share</a></code> | <code>typing.Mapping[str]</code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#id DatabaseOld#id}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the database; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#name DatabaseOld#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#comment DatabaseOld#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database. Default value for this field is set to -1, which is a fallback to use Snowflake default. For more information, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#data_retention_time_in_days DatabaseOld#data_retention_time_in_days}

---

##### `from_database`<sup>Optional</sup> <a name="from_database" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.fromDatabase"></a>

- *Type:* str

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#from_database DatabaseOld#from_database}

---

##### `from_replica`<sup>Optional</sup> <a name="from_replica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.fromReplica"></a>

- *Type:* str

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<db_name>"`. An example would be: `"myorg1"."account1"."db1"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#from_replica DatabaseOld#from_replica}

---

##### `from_share`<sup>Optional</sup> <a name="from_share" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.fromShare"></a>

- *Type:* typing.Mapping[str]

Specify a provider and a share in this map to create a database from a share.

As of version 0.87.0, the provider field is the account locator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#from_share DatabaseOld#from_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#id DatabaseOld#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.isTransient"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#is_transient DatabaseOld#is_transient}

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#replication_configuration DatabaseOld#replication_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration">put_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromDatabase">reset_from_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromReplica">reset_from_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromShare">reset_from_share</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetIsTransient">reset_is_transient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetReplicationConfiguration">reset_replication_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_replication_configuration` <a name="put_replication_configuration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration"></a>

```python
def put_replication_configuration(
  accounts: typing.List[str],
  ignore_edition_check: typing.Union[bool, IResolvable] = None
) -> None
```

###### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration.parameter.accounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#accounts DatabaseOld#accounts}.

---

###### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.putReplicationConfiguration.parameter.ignoreEditionCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_from_database` <a name="reset_from_database" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromDatabase"></a>

```python
def reset_from_database() -> None
```

##### `reset_from_replica` <a name="reset_from_replica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromReplica"></a>

```python
def reset_from_replica() -> None
```

##### `reset_from_share` <a name="reset_from_share" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetFromShare"></a>

```python
def reset_from_share() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_transient` <a name="reset_is_transient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetIsTransient"></a>

```python
def reset_is_transient() -> None
```

##### `reset_replication_configuration` <a name="reset_replication_configuration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.resetReplicationConfiguration"></a>

```python
def reset_replication_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseOld resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOld.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOld.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOld.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOld.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseOld resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseOld to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseOld that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseOld to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference">DatabaseOldReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabaseInput">from_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplicaInput">from_replica_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShareInput">from_share_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransientInput">is_transient_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfigurationInput">replication_configuration_input</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabase">from_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplica">from_replica</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShare">from_share</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `replication_configuration`<sup>Required</sup> <a name="replication_configuration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfiguration"></a>

```python
replication_configuration: DatabaseOldReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference">DatabaseOldReplicationConfigurationOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_database_input`<sup>Optional</sup> <a name="from_database_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabaseInput"></a>

```python
from_database_input: str
```

- *Type:* str

---

##### `from_replica_input`<sup>Optional</sup> <a name="from_replica_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplicaInput"></a>

```python
from_replica_input: str
```

- *Type:* str

---

##### `from_share_input`<sup>Optional</sup> <a name="from_share_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShareInput"></a>

```python
from_share_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_transient_input`<sup>Optional</sup> <a name="is_transient_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransientInput"></a>

```python
is_transient_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replication_configuration_input`<sup>Optional</sup> <a name="replication_configuration_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.replicationConfigurationInput"></a>

```python
replication_configuration_input: DatabaseOldReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_database`<sup>Required</sup> <a name="from_database" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromDatabase"></a>

```python
from_database: str
```

- *Type:* str

---

##### `from_replica`<sup>Required</sup> <a name="from_replica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromReplica"></a>

```python
from_replica: str
```

- *Type:* str

---

##### `from_share`<sup>Required</sup> <a name="from_share" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.fromShare"></a>

```python
from_share: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_transient`<sup>Required</sup> <a name="is_transient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.isTransient"></a>

```python
is_transient: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.databaseOld.DatabaseOld.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseOldConfig <a name="DatabaseOldConfig" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOldConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  from_database: str = None,
  from_replica: str = None,
  from_share: typing.Mapping[str] = None,
  id: str = None,
  is_transient: typing.Union[bool, IResolvable] = None,
  replication_configuration: DatabaseOldReplicationConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the database; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromDatabase">from_database</a></code> | <code>str</code> | Specify a database to create a clone from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromReplica">from_replica</a></code> | <code>str</code> | Specify a fully-qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromShare">from_share</a></code> | <code>typing.Mapping[str]</code> | Specify a provider and a share in this map to create a database from a share. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#id DatabaseOld#id}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies a database as transient. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the database; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#name DatabaseOld#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#comment DatabaseOld#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database. Default value for this field is set to -1, which is a fallback to use Snowflake default. For more information, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#data_retention_time_in_days DatabaseOld#data_retention_time_in_days}

---

##### `from_database`<sup>Optional</sup> <a name="from_database" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromDatabase"></a>

```python
from_database: str
```

- *Type:* str

Specify a database to create a clone from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#from_database DatabaseOld#from_database}

---

##### `from_replica`<sup>Optional</sup> <a name="from_replica" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromReplica"></a>

```python
from_replica: str
```

- *Type:* str

Specify a fully-qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<db_name>"`. An example would be: `"myorg1"."account1"."db1"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#from_replica DatabaseOld#from_replica}

---

##### `from_share`<sup>Optional</sup> <a name="from_share" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.fromShare"></a>

```python
from_share: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specify a provider and a share in this map to create a database from a share.

As of version 0.87.0, the provider field is the account locator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#from_share DatabaseOld#from_share}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#id DatabaseOld#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.isTransient"></a>

```python
is_transient: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies a database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#is_transient DatabaseOld#is_transient}

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldConfig.property.replicationConfiguration"></a>

```python
replication_configuration: DatabaseOldReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#replication_configuration DatabaseOld#replication_configuration}

---

### DatabaseOldReplicationConfiguration <a name="DatabaseOldReplicationConfiguration" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOldReplicationConfiguration(
  accounts: typing.List[str],
  ignore_edition_check: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#accounts DatabaseOld#accounts}. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}. |

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#accounts DatabaseOld#accounts}.

---

##### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/database_old#ignore_edition_check DatabaseOld#ignore_edition_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseOldReplicationConfigurationOutputReference <a name="DatabaseOldReplicationConfigurationOutputReference" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database_old

databaseOld.DatabaseOldReplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resetIgnoreEditionCheck">reset_ignore_edition_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_edition_check` <a name="reset_ignore_edition_check" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.resetIgnoreEditionCheck"></a>

```python
def reset_ignore_edition_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheckInput">ignore_edition_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_edition_check_input`<sup>Optional</sup> <a name="ignore_edition_check_input" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheckInput"></a>

```python
ignore_edition_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignore_edition_check`<sup>Required</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseOldReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-snowflake.databaseOld.DatabaseOldReplicationConfiguration">DatabaseOldReplicationConfiguration</a>

---



