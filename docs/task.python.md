# `task` Submodule <a name="`task` Submodule" id="@cdktf/provider-snowflake.task"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Task <a name="Task" id="@cdktf/provider-snowflake.task.Task"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task snowflake_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.task.Task.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import task

task.Task(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  schema: str,
  sql_statement: str,
  after: typing.List[str] = None,
  allow_overlapping_execution: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  error_integration: str = None,
  id: str = None,
  schedule: str = None,
  session_parameters: typing.Mapping[str] = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_timeout_ms: typing.Union[int, float] = None,
  warehouse: str = None,
  when: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the task; |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.sqlStatement">sql_statement</a></code> | <code>str</code> | Any single SQL statement, or a call to a stored procedure, executed when the task runs. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.after">after</a></code> | <code>typing.List[str]</code> | Specifies one or more predecessor tasks for the current task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.allowOverlappingExecution">allow_overlapping_execution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the task should be started (enabled) after creation or should remain suspended (default). |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.errorIntegration">error_integration</a></code> | <code>str</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#id Task#id}. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after). |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.sessionParameters">session_parameters</a></code> | <code>typing.Mapping[str]</code> | Specifies session parameters to set for the session when the task runs. A task supports all session parameters. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.warehouse">warehouse</a></code> | <code>str</code> | The warehouse the task will use. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.when">when</a></code> | <code>str</code> | Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#database Task#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the task;

must be unique for the database and schema in which the task is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#name Task#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#schema Task#schema}

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.sqlStatement"></a>

- *Type:* str

Any single SQL statement, or a call to a stored procedure, executed when the task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#sql_statement Task#sql_statement}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.after"></a>

- *Type:* typing.List[str]

Specifies one or more predecessor tasks for the current task.

Use this option to create a DAG of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#after Task#after}

---

##### `allow_overlapping_execution`<sup>Optional</sup> <a name="allow_overlapping_execution" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.allowOverlappingExecution"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#comment Task#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the task should be started (enabled) after creation or should remain suspended (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#enabled Task#enabled}

---

##### `error_integration`<sup>Optional</sup> <a name="error_integration" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.errorIntegration"></a>

- *Type:* str

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#error_integration Task#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#id Task#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.schedule"></a>

- *Type:* str

The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#schedule Task#schedule}

---

##### `session_parameters`<sup>Optional</sup> <a name="session_parameters" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.sessionParameters"></a>

- *Type:* typing.Mapping[str]

Specifies session parameters to set for the session when the task runs. A task supports all session parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#session_parameters Task#session_parameters}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* typing.Union[int, float]

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* str

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. (Conflicts with warehouse)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Specifies the time limit on a single run of the task before it times out (in milliseconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.warehouse"></a>

- *Type:* str

The warehouse the task will use.

Omit this parameter to use Snowflake-managed compute resources for runs of this task. (Conflicts with user_task_managed_initial_warehouse_size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#warehouse Task#warehouse}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.when"></a>

- *Type:* str

Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#when Task#when}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetAfter">reset_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetAllowOverlappingExecution">reset_allow_overlapping_execution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetErrorIntegration">reset_error_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSessionParameters">reset_session_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSuspendTaskAfterNumFailures">reset_suspend_task_after_num_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetUserTaskManagedInitialWarehouseSize">reset_user_task_managed_initial_warehouse_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetUserTaskTimeoutMs">reset_user_task_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetWarehouse">reset_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetWhen">reset_when</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.task.Task.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.task.Task.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.task.Task.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.task.Task.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.task.Task.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.task.Task.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.task.Task.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.task.Task.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.task.Task.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.task.Task.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.task.Task.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.task.Task.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.task.Task.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.task.Task.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.task.Task.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.task.Task.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.task.Task.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.task.Task.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.task.Task.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.task.Task.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.task.Task.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.task.Task.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.task.Task.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.task.Task.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.task.Task.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.task.Task.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.task.Task.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.task.Task.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_after` <a name="reset_after" id="@cdktf/provider-snowflake.task.Task.resetAfter"></a>

```python
def reset_after() -> None
```

##### `reset_allow_overlapping_execution` <a name="reset_allow_overlapping_execution" id="@cdktf/provider-snowflake.task.Task.resetAllowOverlappingExecution"></a>

```python
def reset_allow_overlapping_execution() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.task.Task.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.task.Task.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_error_integration` <a name="reset_error_integration" id="@cdktf/provider-snowflake.task.Task.resetErrorIntegration"></a>

```python
def reset_error_integration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.task.Task.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-snowflake.task.Task.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_session_parameters` <a name="reset_session_parameters" id="@cdktf/provider-snowflake.task.Task.resetSessionParameters"></a>

```python
def reset_session_parameters() -> None
```

##### `reset_suspend_task_after_num_failures` <a name="reset_suspend_task_after_num_failures" id="@cdktf/provider-snowflake.task.Task.resetSuspendTaskAfterNumFailures"></a>

```python
def reset_suspend_task_after_num_failures() -> None
```

##### `reset_user_task_managed_initial_warehouse_size` <a name="reset_user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.task.Task.resetUserTaskManagedInitialWarehouseSize"></a>

```python
def reset_user_task_managed_initial_warehouse_size() -> None
```

##### `reset_user_task_timeout_ms` <a name="reset_user_task_timeout_ms" id="@cdktf/provider-snowflake.task.Task.resetUserTaskTimeoutMs"></a>

```python
def reset_user_task_timeout_ms() -> None
```

##### `reset_warehouse` <a name="reset_warehouse" id="@cdktf/provider-snowflake.task.Task.resetWarehouse"></a>

```python
def reset_warehouse() -> None
```

##### `reset_when` <a name="reset_when" id="@cdktf/provider-snowflake.task.Task.resetWhen"></a>

```python
def reset_when() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.task.Task.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import task

task.Task.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.task.Task.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.task.Task.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import task

task.Task.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.task.Task.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.task.Task.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import task

task.Task.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.task.Task.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import task

task.Task.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Task to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Task that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Task to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.afterInput">after_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecutionInput">allow_overlapping_execution_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.errorIntegrationInput">error_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sessionParametersInput">session_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sqlStatementInput">sql_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailuresInput">suspend_task_after_num_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSizeInput">user_task_managed_initial_warehouse_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMsInput">user_task_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.whenInput">when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.after">after</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecution">allow_overlapping_execution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.errorIntegration">error_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sessionParameters">session_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sqlStatement">sql_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.when">when</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.task.Task.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.task.Task.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.task.Task.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.task.Task.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.task.Task.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.task.Task.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.task.Task.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.task.Task.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.task.Task.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.task.Task.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.task.Task.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.task.Task.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.task.Task.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `after_input`<sup>Optional</sup> <a name="after_input" id="@cdktf/provider-snowflake.task.Task.property.afterInput"></a>

```python
after_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_overlapping_execution_input`<sup>Optional</sup> <a name="allow_overlapping_execution_input" id="@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecutionInput"></a>

```python
allow_overlapping_execution_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.task.Task.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.task.Task.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.task.Task.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `error_integration_input`<sup>Optional</sup> <a name="error_integration_input" id="@cdktf/provider-snowflake.task.Task.property.errorIntegrationInput"></a>

```python
error_integration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.task.Task.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.task.Task.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-snowflake.task.Task.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.task.Task.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `session_parameters_input`<sup>Optional</sup> <a name="session_parameters_input" id="@cdktf/provider-snowflake.task.Task.property.sessionParametersInput"></a>

```python
session_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sql_statement_input`<sup>Optional</sup> <a name="sql_statement_input" id="@cdktf/provider-snowflake.task.Task.property.sqlStatementInput"></a>

```python
sql_statement_input: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures_input`<sup>Optional</sup> <a name="suspend_task_after_num_failures_input" id="@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailuresInput"></a>

```python
suspend_task_after_num_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_managed_initial_warehouse_size_input`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size_input" id="@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSizeInput"></a>

```python
user_task_managed_initial_warehouse_size_input: str
```

- *Type:* str

---

##### `user_task_timeout_ms_input`<sup>Optional</sup> <a name="user_task_timeout_ms_input" id="@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMsInput"></a>

```python
user_task_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktf/provider-snowflake.task.Task.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `when_input`<sup>Optional</sup> <a name="when_input" id="@cdktf/provider-snowflake.task.Task.property.whenInput"></a>

```python
when_input: str
```

- *Type:* str

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-snowflake.task.Task.property.after"></a>

```python
after: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_overlapping_execution`<sup>Required</sup> <a name="allow_overlapping_execution" id="@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecution"></a>

```python
allow_overlapping_execution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.task.Task.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.task.Task.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.task.Task.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `error_integration`<sup>Required</sup> <a name="error_integration" id="@cdktf/provider-snowflake.task.Task.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.task.Task.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-snowflake.task.Task.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.task.Task.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `session_parameters`<sup>Required</sup> <a name="session_parameters" id="@cdktf/provider-snowflake.task.Task.property.sessionParameters"></a>

```python
session_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-snowflake.task.Task.property.sqlStatement"></a>

```python
sql_statement: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures`<sup>Required</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_managed_initial_warehouse_size`<sup>Required</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

---

##### `user_task_timeout_ms`<sup>Required</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.task.Task.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktf/provider-snowflake.task.Task.property.when"></a>

```python
when: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.task.Task.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TaskConfig <a name="TaskConfig" id="@cdktf/provider-snowflake.task.TaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.task.TaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import task

task.TaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  schema: str,
  sql_statement: str,
  after: typing.List[str] = None,
  allow_overlapping_execution: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  error_integration: str = None,
  id: str = None,
  schedule: str = None,
  session_parameters: typing.Mapping[str] = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_timeout_ms: typing.Union[int, float] = None,
  warehouse: str = None,
  when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the task; |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.sqlStatement">sql_statement</a></code> | <code>str</code> | Any single SQL statement, or a call to a stored procedure, executed when the task runs. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.after">after</a></code> | <code>typing.List[str]</code> | Specifies one or more predecessor tasks for the current task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.allowOverlappingExecution">allow_overlapping_execution</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the task should be started (enabled) after creation or should remain suspended (default). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.errorIntegration">error_integration</a></code> | <code>str</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#id Task#id}. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.schedule">schedule</a></code> | <code>str</code> | The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.sessionParameters">session_parameters</a></code> | <code>typing.Mapping[str]</code> | Specifies session parameters to set for the session when the task runs. A task supports all session parameters. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.warehouse">warehouse</a></code> | <code>str</code> | The warehouse the task will use. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.when">when</a></code> | <code>str</code> | Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.task.TaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.task.TaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.task.TaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.task.TaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.task.TaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.TaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.task.TaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.task.TaskConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#database Task#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.task.TaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the task;

must be unique for the database and schema in which the task is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#name Task#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.task.TaskConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#schema Task#schema}

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-snowflake.task.TaskConfig.property.sqlStatement"></a>

```python
sql_statement: str
```

- *Type:* str

Any single SQL statement, or a call to a stored procedure, executed when the task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#sql_statement Task#sql_statement}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-snowflake.task.TaskConfig.property.after"></a>

```python
after: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more predecessor tasks for the current task.

Use this option to create a DAG of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#after Task#after}

---

##### `allow_overlapping_execution`<sup>Optional</sup> <a name="allow_overlapping_execution" id="@cdktf/provider-snowflake.task.TaskConfig.property.allowOverlappingExecution"></a>

```python
allow_overlapping_execution: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.task.TaskConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#comment Task#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.task.TaskConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the task should be started (enabled) after creation or should remain suspended (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#enabled Task#enabled}

---

##### `error_integration`<sup>Optional</sup> <a name="error_integration" id="@cdktf/provider-snowflake.task.TaskConfig.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#error_integration Task#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.task.TaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#id Task#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-snowflake.task.TaskConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#schedule Task#schedule}

---

##### `session_parameters`<sup>Optional</sup> <a name="session_parameters" id="@cdktf/provider-snowflake.task.TaskConfig.property.sessionParameters"></a>

```python
session_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies session parameters to set for the session when the task runs. A task supports all session parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#session_parameters Task#session_parameters}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.task.TaskConfig.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.task.TaskConfig.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. (Conflicts with warehouse)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.task.TaskConfig.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the time limit on a single run of the task before it times out (in milliseconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.task.TaskConfig.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

The warehouse the task will use.

Omit this parameter to use Snowflake-managed compute resources for runs of this task. (Conflicts with user_task_managed_initial_warehouse_size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#warehouse Task#warehouse}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-snowflake.task.TaskConfig.property.when"></a>

```python
when: str
```

- *Type:* str

Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.79.1/docs/resources/task#when Task#when}

---



