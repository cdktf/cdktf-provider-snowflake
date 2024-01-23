# `externalTable` Submodule <a name="`externalTable` Submodule" id="@cdktf/provider-snowflake.externalTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalTable <a name="ExternalTable" id="@cdktf/provider-snowflake.externalTable.ExternalTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table snowflake_external_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column: typing.Union[IResolvable, typing.List[ExternalTableColumn]],
  database: str,
  file_format: str,
  location: str,
  name: str,
  schema: str,
  auto_refresh: typing.Union[bool, IResolvable] = None,
  aws_sns_topic: str = None,
  comment: str = None,
  copy_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  partition_by: typing.List[str] = None,
  pattern: str = None,
  refresh_on_create: typing.Union[bool, IResolvable] = None,
  table_format: str = None,
  tag: typing.Union[IResolvable, typing.List[ExternalTableTag]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.column">column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]</code> | column block. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.fileFormat">file_format</a></code> | <code>str</code> | Specifies the file format for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.location">location</a></code> | <code>str</code> | Specifies a location for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the external table; |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.autoRefresh">auto_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.awsSnsTopic">aws_sns_topic</a></code> | <code>str</code> | Specifies the aws sns topic for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.copyGrants">copy_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#id ExternalTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.partitionBy">partition_by</a></code> | <code>typing.List[str]</code> | Specifies any partition columns to evaluate for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | Specifies the file names and/or paths on the external stage to match. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.refreshOnCreate">refresh_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies weather to refresh when an external table is created. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.tableFormat">table_format</a></code> | <code>str</code> | Identifies the external table table type. For now, only "delta" for Delta Lake table format is supported. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]</code> | tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.column"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#column ExternalTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#database ExternalTable#database}

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.fileFormat"></a>

- *Type:* str

Specifies the file format for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#file_format ExternalTable#file_format}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.location"></a>

- *Type:* str

Specifies a location for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#location ExternalTable#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the external table;

must be unique for the database and schema in which the externalTable is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#name ExternalTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#schema ExternalTable#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.autoRefresh"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#auto_refresh ExternalTable#auto_refresh}

---

##### `aws_sns_topic`<sup>Optional</sup> <a name="aws_sns_topic" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.awsSnsTopic"></a>

- *Type:* str

Specifies the aws sns topic for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#aws_sns_topic ExternalTable#aws_sns_topic}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#comment ExternalTable#comment}

---

##### `copy_grants`<sup>Optional</sup> <a name="copy_grants" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.copyGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#copy_grants ExternalTable#copy_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#id ExternalTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_by`<sup>Optional</sup> <a name="partition_by" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.partitionBy"></a>

- *Type:* typing.List[str]

Specifies any partition columns to evaluate for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#partition_by ExternalTable#partition_by}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.pattern"></a>

- *Type:* str

Specifies the file names and/or paths on the external stage to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#pattern ExternalTable#pattern}

---

##### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.refreshOnCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies weather to refresh when an external table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#refresh_on_create ExternalTable#refresh_on_create}

---

##### `table_format`<sup>Optional</sup> <a name="table_format" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.tableFormat"></a>

- *Type:* str

Identifies the external table table type. For now, only "delta" for Delta Lake table format is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#table_format ExternalTable#table_format}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.externalTable.ExternalTable.Initializer.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#tag ExternalTable#tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetAwsSnsTopic">reset_aws_sns_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetCopyGrants">reset_copy_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetPartitionBy">reset_partition_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetPattern">reset_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetRefreshOnCreate">reset_refresh_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetTableFormat">reset_table_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.resetTag">reset_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalTable.ExternalTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.externalTable.ExternalTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalTable.ExternalTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalTable.ExternalTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.externalTable.ExternalTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.externalTable.ExternalTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.externalTable.ExternalTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.externalTable.ExternalTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.externalTable.ExternalTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.externalTable.ExternalTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.externalTable.ExternalTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalTable.ExternalTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column` <a name="put_column" id="@cdktf/provider-snowflake.externalTable.ExternalTable.putColumn"></a>

```python
def put_column(
  value: typing.Union[IResolvable, typing.List[ExternalTableColumn]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalTable.ExternalTable.putColumn.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-snowflake.externalTable.ExternalTable.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[ExternalTableTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalTable.ExternalTable.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]

---

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_aws_sns_topic` <a name="reset_aws_sns_topic" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetAwsSnsTopic"></a>

```python
def reset_aws_sns_topic() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_copy_grants` <a name="reset_copy_grants" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetCopyGrants"></a>

```python
def reset_copy_grants() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_partition_by` <a name="reset_partition_by" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetPartitionBy"></a>

```python
def reset_partition_by() -> None
```

##### `reset_pattern` <a name="reset_pattern" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetPattern"></a>

```python
def reset_pattern() -> None
```

##### `reset_refresh_on_create` <a name="reset_refresh_on_create" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetRefreshOnCreate"></a>

```python
def reset_refresh_on_create() -> None
```

##### `reset_table_format` <a name="reset_table_format" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetTableFormat"></a>

```python
def reset_table_format() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-snowflake.externalTable.ExternalTable.resetTag"></a>

```python
def reset_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExternalTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.externalTable.ExternalTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalTable.ExternalTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.externalTable.ExternalTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalTable.ExternalTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.externalTable.ExternalTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalTable.ExternalTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.externalTable.ExternalTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExternalTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalTable.ExternalTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExternalTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExternalTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalTable.ExternalTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.column">column</a></code> | <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList">ExternalTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList">ExternalTableTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.autoRefreshInput">auto_refresh_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.awsSnsTopicInput">aws_sns_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.columnInput">column_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.copyGrantsInput">copy_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.partitionByInput">partition_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.refreshOnCreateInput">refresh_on_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.tableFormatInput">table_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.autoRefresh">auto_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.awsSnsTopic">aws_sns_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.copyGrants">copy_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.partitionBy">partition_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.refreshOnCreate">refresh_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.column"></a>

```python
column: ExternalTableColumnList
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList">ExternalTableColumnList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.tag"></a>

```python
tag: ExternalTableTagList
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList">ExternalTableTagList</a>

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.autoRefreshInput"></a>

```python
auto_refresh_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_sns_topic_input`<sup>Optional</sup> <a name="aws_sns_topic_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.awsSnsTopicInput"></a>

```python
aws_sns_topic_input: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.columnInput"></a>

```python
column_input: typing.Union[IResolvable, typing.List[ExternalTableColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `copy_grants_input`<sup>Optional</sup> <a name="copy_grants_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.copyGrantsInput"></a>

```python
copy_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_by_input`<sup>Optional</sup> <a name="partition_by_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.partitionByInput"></a>

```python
partition_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `refresh_on_create_input`<sup>Optional</sup> <a name="refresh_on_create_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.refreshOnCreateInput"></a>

```python
refresh_on_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `table_format_input`<sup>Optional</sup> <a name="table_format_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.tableFormatInput"></a>

```python
table_format_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[ExternalTableTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.autoRefresh"></a>

```python
auto_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_sns_topic`<sup>Required</sup> <a name="aws_sns_topic" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.awsSnsTopic"></a>

```python
aws_sns_topic: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `copy_grants`<sup>Required</sup> <a name="copy_grants" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.copyGrants"></a>

```python
copy_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_by`<sup>Required</sup> <a name="partition_by" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.partitionBy"></a>

```python
partition_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `refresh_on_create`<sup>Required</sup> <a name="refresh_on_create" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.refreshOnCreate"></a>

```python
refresh_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalTable.ExternalTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalTableColumn <a name="ExternalTableColumn" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableColumn(
  as: str,
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn.property.as">as</a></code> | <code>str</code> | String that specifies the expression for the column. When queried, the column returns results derived from this expression. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn.property.name">name</a></code> | <code>str</code> | Column name. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn.property.type">type</a></code> | <code>str</code> | Column type, e.g. VARIANT. |

---

##### `as`<sup>Required</sup> <a name="as" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumn.property.as"></a>

```python
as: str
```

- *Type:* str

String that specifies the expression for the column. When queried, the column returns results derived from this expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#as ExternalTable#as}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#name ExternalTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Column type, e.g. VARIANT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#type ExternalTable#type}

---

### ExternalTableConfig <a name="ExternalTableConfig" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column: typing.Union[IResolvable, typing.List[ExternalTableColumn]],
  database: str,
  file_format: str,
  location: str,
  name: str,
  schema: str,
  auto_refresh: typing.Union[bool, IResolvable] = None,
  aws_sns_topic: str = None,
  comment: str = None,
  copy_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  partition_by: typing.List[str] = None,
  pattern: str = None,
  refresh_on_create: typing.Union[bool, IResolvable] = None,
  table_format: str = None,
  tag: typing.Union[IResolvable, typing.List[ExternalTableTag]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.column">column</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]</code> | column block. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.fileFormat">file_format</a></code> | <code>str</code> | Specifies the file format for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.location">location</a></code> | <code>str</code> | Specifies a location for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the external table; |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.autoRefresh">auto_refresh</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.awsSnsTopic">aws_sns_topic</a></code> | <code>str</code> | Specifies the aws sns topic for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.copyGrants">copy_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#id ExternalTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.partitionBy">partition_by</a></code> | <code>typing.List[str]</code> | Specifies any partition columns to evaluate for the external table. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.pattern">pattern</a></code> | <code>str</code> | Specifies the file names and/or paths on the external stage to match. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.refreshOnCreate">refresh_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies weather to refresh when an external table is created. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.tableFormat">table_format</a></code> | <code>str</code> | Identifies the external table table type. For now, only "delta" for Delta Lake table format is supported. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.column"></a>

```python
column: typing.Union[IResolvable, typing.List[ExternalTableColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#column ExternalTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#database ExternalTable#database}

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

Specifies the file format for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#file_format ExternalTable#file_format}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Specifies a location for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#location ExternalTable#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the external table;

must be unique for the database and schema in which the externalTable is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#name ExternalTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#schema ExternalTable#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.autoRefresh"></a>

```python
auto_refresh: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#auto_refresh ExternalTable#auto_refresh}

---

##### `aws_sns_topic`<sup>Optional</sup> <a name="aws_sns_topic" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.awsSnsTopic"></a>

```python
aws_sns_topic: str
```

- *Type:* str

Specifies the aws sns topic for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#aws_sns_topic ExternalTable#aws_sns_topic}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#comment ExternalTable#comment}

---

##### `copy_grants`<sup>Optional</sup> <a name="copy_grants" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.copyGrants"></a>

```python
copy_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#copy_grants ExternalTable#copy_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#id ExternalTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_by`<sup>Optional</sup> <a name="partition_by" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.partitionBy"></a>

```python
partition_by: typing.List[str]
```

- *Type:* typing.List[str]

Specifies any partition columns to evaluate for the external table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#partition_by ExternalTable#partition_by}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Specifies the file names and/or paths on the external stage to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#pattern ExternalTable#pattern}

---

##### `refresh_on_create`<sup>Optional</sup> <a name="refresh_on_create" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.refreshOnCreate"></a>

```python
refresh_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies weather to refresh when an external table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#refresh_on_create ExternalTable#refresh_on_create}

---

##### `table_format`<sup>Optional</sup> <a name="table_format" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

Identifies the external table table type. For now, only "delta" for Delta Lake table format is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#table_format ExternalTable#table_format}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.externalTable.ExternalTableConfig.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[ExternalTableTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#tag ExternalTable#tag}

---

### ExternalTableTag <a name="ExternalTableTag" id="@cdktf/provider-snowflake.externalTable.ExternalTableTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalTable.ExternalTableTag.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableTag(
  name: str,
  value: str,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.name">name</a></code> | <code>str</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.value">value</a></code> | <code>str</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.database">database</a></code> | <code>str</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.schema">schema</a></code> | <code>str</code> | Name of the schema that the tag was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.name"></a>

```python
name: str
```

- *Type:* str

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#name ExternalTable#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#value ExternalTable#value}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.database"></a>

```python
database: str
```

- *Type:* str

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#database ExternalTable#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.externalTable.ExternalTableTag.property.schema"></a>

```python
schema: str
```

- *Type:* str

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/external_table#schema ExternalTable#schema}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalTableColumnList <a name="ExternalTableColumnList" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalTableColumn]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]]

---


### ExternalTableColumnOutputReference <a name="ExternalTableColumnOutputReference" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.asInput">as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.as">as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `as_input`<sup>Optional</sup> <a name="as_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.asInput"></a>

```python
as_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `as`<sup>Required</sup> <a name="as" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.as"></a>

```python
as: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalTable.ExternalTableColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalTableColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalTable.ExternalTableColumn">ExternalTableColumn</a>]

---


### ExternalTableTagList <a name="ExternalTableTagList" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalTableTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalTableTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]]

---


### ExternalTableTagOutputReference <a name="ExternalTableTagOutputReference" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_table

externalTable.ExternalTableTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database` <a name="reset_database" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalTable.ExternalTableTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalTableTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalTable.ExternalTableTag">ExternalTableTag</a>]

---



