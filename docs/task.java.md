# `task` Submodule <a name="`task` Submodule" id="@cdktf/provider-snowflake.task"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Task <a name="Task" id="@cdktf/provider-snowflake.task.Task"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task snowflake_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.task.Task.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.task.Task;

Task.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
    .sqlStatement(java.lang.String)
//  .after(java.util.List<java.lang.String>)
//  .allowOverlappingExecution(java.lang.Boolean)
//  .allowOverlappingExecution(IResolvable)
//  .comment(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .errorIntegration(java.lang.String)
//  .id(java.lang.String)
//  .schedule(java.lang.String)
//  .sessionParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskTimeoutMs(java.lang.Number)
//  .warehouse(java.lang.String)
//  .when(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the task; |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.sqlStatement">sqlStatement</a></code> | <code>java.lang.String</code> | Any single SQL statement, or a call to a stored procedure, executed when the task runs. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.after">after</a></code> | <code>java.util.List<java.lang.String></code> | Specifies one or more predecessor tasks for the current task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.allowOverlappingExecution">allowOverlappingExecution</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the task. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the task should be started (enabled) after creation or should remain suspended (default). |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#id Task#id}. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.schedule">schedule</a></code> | <code>java.lang.String</code> | The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after). |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.sessionParameters">sessionParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies session parameters to set for the session when the task runs. A task supports all session parameters. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The warehouse the task will use. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.Initializer.parameter.when">when</a></code> | <code>java.lang.String</code> | Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#database Task#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the task;

must be unique for the database and schema in which the task is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#name Task#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#schema Task#schema}

---

##### `sqlStatement`<sup>Required</sup> <a name="sqlStatement" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.sqlStatement"></a>

- *Type:* java.lang.String

Any single SQL statement, or a call to a stored procedure, executed when the task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#sql_statement Task#sql_statement}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.after"></a>

- *Type:* java.util.List<java.lang.String>

Specifies one or more predecessor tasks for the current task.

Use this option to create a DAG of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#after Task#after}

---

##### `allowOverlappingExecution`<sup>Optional</sup> <a name="allowOverlappingExecution" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.allowOverlappingExecution"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#comment Task#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the task should be started (enabled) after creation or should remain suspended (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#enabled Task#enabled}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.errorIntegration"></a>

- *Type:* java.lang.String

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#error_integration Task#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#id Task#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.schedule"></a>

- *Type:* java.lang.String

The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#schedule Task#schedule}

---

##### `sessionParameters`<sup>Optional</sup> <a name="sessionParameters" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.sessionParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies session parameters to set for the session when the task runs. A task supports all session parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#session_parameters Task#session_parameters}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* java.lang.Number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* java.lang.String

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. (Conflicts with warehouse)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* java.lang.Number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.warehouse"></a>

- *Type:* java.lang.String

The warehouse the task will use.

Omit this parameter to use Snowflake-managed compute resources for runs of this task. (Conflicts with user_task_managed_initial_warehouse_size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#warehouse Task#warehouse}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-snowflake.task.Task.Initializer.parameter.when"></a>

- *Type:* java.lang.String

Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#when Task#when}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetAfter">resetAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetAllowOverlappingExecution">resetAllowOverlappingExecution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetErrorIntegration">resetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSessionParameters">resetSessionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetSuspendTaskAfterNumFailures">resetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetUserTaskManagedInitialWarehouseSize">resetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetUserTaskTimeoutMs">resetUserTaskTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetWarehouse">resetWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.resetWhen">resetWhen</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.task.Task.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.task.Task.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.task.Task.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.task.Task.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.task.Task.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.task.Task.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.task.Task.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.task.Task.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.task.Task.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.task.Task.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.task.Task.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.task.Task.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.task.Task.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.task.Task.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.task.Task.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.task.Task.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.task.Task.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.task.Task.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.task.Task.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.task.Task.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.task.Task.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.task.Task.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.task.Task.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.task.Task.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.task.Task.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAfter` <a name="resetAfter" id="@cdktf/provider-snowflake.task.Task.resetAfter"></a>

```java
public void resetAfter()
```

##### `resetAllowOverlappingExecution` <a name="resetAllowOverlappingExecution" id="@cdktf/provider-snowflake.task.Task.resetAllowOverlappingExecution"></a>

```java
public void resetAllowOverlappingExecution()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.task.Task.resetComment"></a>

```java
public void resetComment()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.task.Task.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetErrorIntegration` <a name="resetErrorIntegration" id="@cdktf/provider-snowflake.task.Task.resetErrorIntegration"></a>

```java
public void resetErrorIntegration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.task.Task.resetId"></a>

```java
public void resetId()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-snowflake.task.Task.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetSessionParameters` <a name="resetSessionParameters" id="@cdktf/provider-snowflake.task.Task.resetSessionParameters"></a>

```java
public void resetSessionParameters()
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.Task.resetSuspendTaskAfterNumFailures"></a>

```java
public void resetSuspendTaskAfterNumFailures()
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.Task.resetUserTaskManagedInitialWarehouseSize"></a>

```java
public void resetUserTaskManagedInitialWarehouseSize()
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.task.Task.resetUserTaskTimeoutMs"></a>

```java
public void resetUserTaskTimeoutMs()
```

##### `resetWarehouse` <a name="resetWarehouse" id="@cdktf/provider-snowflake.task.Task.resetWarehouse"></a>

```java
public void resetWarehouse()
```

##### `resetWhen` <a name="resetWhen" id="@cdktf/provider-snowflake.task.Task.resetWhen"></a>

```java
public void resetWhen()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.task.Task.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.task.Task;

Task.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.task.Task.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.task.Task;

Task.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.task.Task.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.task.Task.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.task.Task;

Task.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.task.Task.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.task.Task;

Task.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Task.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Task to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Task that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Task to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.afterInput">afterInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecutionInput">allowOverlappingExecutionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.errorIntegrationInput">errorIntegrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sessionParametersInput">sessionParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sqlStatementInput">sqlStatementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.whenInput">whenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.after">after</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecution">allowOverlappingExecution</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sessionParameters">sessionParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.sqlStatement">sqlStatement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.when">when</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.task.Task.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.task.Task.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.task.Task.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.task.Task.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.task.Task.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.task.Task.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.task.Task.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.task.Task.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.task.Task.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.task.Task.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.task.Task.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.task.Task.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.Task.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.task.Task.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `afterInput`<sup>Optional</sup> <a name="afterInput" id="@cdktf/provider-snowflake.task.Task.property.afterInput"></a>

```java
public java.util.List<java.lang.String> getAfterInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOverlappingExecutionInput`<sup>Optional</sup> <a name="allowOverlappingExecutionInput" id="@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecutionInput"></a>

```java
public java.lang.Object getAllowOverlappingExecutionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.task.Task.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.task.Task.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.task.Task.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `errorIntegrationInput`<sup>Optional</sup> <a name="errorIntegrationInput" id="@cdktf/provider-snowflake.task.Task.property.errorIntegrationInput"></a>

```java
public java.lang.String getErrorIntegrationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.task.Task.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.task.Task.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-snowflake.task.Task.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.task.Task.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `sessionParametersInput`<sup>Optional</sup> <a name="sessionParametersInput" id="@cdktf/provider-snowflake.task.Task.property.sessionParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSessionParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sqlStatementInput`<sup>Optional</sup> <a name="sqlStatementInput" id="@cdktf/provider-snowflake.task.Task.property.sqlStatementInput"></a>

```java
public java.lang.String getSqlStatementInput();
```

- *Type:* java.lang.String

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailuresInput"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailuresInput();
```

- *Type:* java.lang.Number

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSizeInput"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSizeInput();
```

- *Type:* java.lang.String

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMsInput"></a>

```java
public java.lang.Number getUserTaskTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.task.Task.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `whenInput`<sup>Optional</sup> <a name="whenInput" id="@cdktf/provider-snowflake.task.Task.property.whenInput"></a>

```java
public java.lang.String getWhenInput();
```

- *Type:* java.lang.String

---

##### `after`<sup>Required</sup> <a name="after" id="@cdktf/provider-snowflake.task.Task.property.after"></a>

```java
public java.util.List<java.lang.String> getAfter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOverlappingExecution`<sup>Required</sup> <a name="allowOverlappingExecution" id="@cdktf/provider-snowflake.task.Task.property.allowOverlappingExecution"></a>

```java
public java.lang.Object getAllowOverlappingExecution();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.task.Task.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.task.Task.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.task.Task.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktf/provider-snowflake.task.Task.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.task.Task.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.task.Task.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-snowflake.task.Task.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.task.Task.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `sessionParameters`<sup>Required</sup> <a name="sessionParameters" id="@cdktf/provider-snowflake.task.Task.property.sessionParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSessionParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sqlStatement`<sup>Required</sup> <a name="sqlStatement" id="@cdktf/provider-snowflake.task.Task.property.sqlStatement"></a>

```java
public java.lang.String getSqlStatement();
```

- *Type:* java.lang.String

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.Task.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.Task.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.task.Task.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.task.Task.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `when`<sup>Required</sup> <a name="when" id="@cdktf/provider-snowflake.task.Task.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.Task.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.task.Task.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TaskConfig <a name="TaskConfig" id="@cdktf/provider-snowflake.task.TaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.task.TaskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.task.TaskConfig;

TaskConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
    .sqlStatement(java.lang.String)
//  .after(java.util.List<java.lang.String>)
//  .allowOverlappingExecution(java.lang.Boolean)
//  .allowOverlappingExecution(IResolvable)
//  .comment(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .errorIntegration(java.lang.String)
//  .id(java.lang.String)
//  .schedule(java.lang.String)
//  .sessionParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskTimeoutMs(java.lang.Number)
//  .warehouse(java.lang.String)
//  .when(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the task; |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.sqlStatement">sqlStatement</a></code> | <code>java.lang.String</code> | Any single SQL statement, or a call to a stored procedure, executed when the task runs. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.after">after</a></code> | <code>java.util.List<java.lang.String></code> | Specifies one or more predecessor tasks for the current task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.allowOverlappingExecution">allowOverlappingExecution</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the task. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the task should be started (enabled) after creation or should remain suspended (default). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.errorIntegration">errorIntegration</a></code> | <code>java.lang.String</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#id Task#id}. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.sessionParameters">sessionParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies session parameters to set for the session when the task runs. A task supports all session parameters. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The warehouse the task will use. |
| <code><a href="#@cdktf/provider-snowflake.task.TaskConfig.property.when">when</a></code> | <code>java.lang.String</code> | Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.task.TaskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.task.TaskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.task.TaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.task.TaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.task.TaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.task.TaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.task.TaskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.task.TaskConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#database Task#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.task.TaskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the task;

must be unique for the database and schema in which the task is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#name Task#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.task.TaskConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#schema Task#schema}

---

##### `sqlStatement`<sup>Required</sup> <a name="sqlStatement" id="@cdktf/provider-snowflake.task.TaskConfig.property.sqlStatement"></a>

```java
public java.lang.String getSqlStatement();
```

- *Type:* java.lang.String

Any single SQL statement, or a call to a stored procedure, executed when the task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#sql_statement Task#sql_statement}

---

##### `after`<sup>Optional</sup> <a name="after" id="@cdktf/provider-snowflake.task.TaskConfig.property.after"></a>

```java
public java.util.List<java.lang.String> getAfter();
```

- *Type:* java.util.List<java.lang.String>

Specifies one or more predecessor tasks for the current task.

Use this option to create a DAG of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#after Task#after}

---

##### `allowOverlappingExecution`<sup>Optional</sup> <a name="allowOverlappingExecution" id="@cdktf/provider-snowflake.task.TaskConfig.property.allowOverlappingExecution"></a>

```java
public java.lang.Object getAllowOverlappingExecution();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.task.TaskConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#comment Task#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.task.TaskConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the task should be started (enabled) after creation or should remain suspended (default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#enabled Task#enabled}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktf/provider-snowflake.task.TaskConfig.property.errorIntegration"></a>

```java
public java.lang.String getErrorIntegration();
```

- *Type:* java.lang.String

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#error_integration Task#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.task.TaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#id Task#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-snowflake.task.TaskConfig.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#schedule Task#schedule}

---

##### `sessionParameters`<sup>Optional</sup> <a name="sessionParameters" id="@cdktf/provider-snowflake.task.TaskConfig.property.sessionParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSessionParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies session parameters to set for the session when the task runs. A task supports all session parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#session_parameters Task#session_parameters}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.task.TaskConfig.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.task.TaskConfig.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. (Conflicts with warehouse)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.task.TaskConfig.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.task.TaskConfig.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

The warehouse the task will use.

Omit this parameter to use Snowflake-managed compute resources for runs of this task. (Conflicts with user_task_managed_initial_warehouse_size)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#warehouse Task#warehouse}

---

##### `when`<sup>Optional</sup> <a name="when" id="@cdktf/provider-snowflake.task.TaskConfig.property.when"></a>

```java
public java.lang.String getWhen();
```

- *Type:* java.lang.String

Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/task#when Task#when}

---



