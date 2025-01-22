# `schema` Submodule <a name="`schema` Submodule" id="@cdktf/provider-snowflake.schema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Schema <a name="Schema" id="@cdktf/provider-snowflake.schema.Schema"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema snowflake_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.Schema.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.Schema(
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
  catalog: str = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  default_ddl_collation: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  id: str = None,
  is_transient: str = None,
  log_level: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  pipe_execution_paused: typing.Union[bool, IResolvable] = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  storage_serialization_policy: str = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  trace_level: str = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None,
  with_managed_access: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the schema. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the schema; |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the schema. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#id Schema#id}. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.isTransient">is_transient</a></code> | <code>str</code> | Specifies the schema as transient. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.pipeExecutionPaused">pipe_execution_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.withManagedAccess">with_managed_access</a></code> | <code>str</code> | Specifies a managed schema. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the schema.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#database Schema#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the schema;

must be unique for the database in which the schema is created. When the name is `PUBLIC`, during creation the provider checks if this schema has already been created and, in such case, `ALTER` is used to match the desired state. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#name Schema#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.catalog"></a>

- *Type:* str

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#catalog Schema#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#comment Schema#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#data_retention_time_in_days Schema#data_retention_time_in_days}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* str

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#default_ddl_collation Schema#default_ddl_collation}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#enable_console_output Schema#enable_console_output}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.externalVolume"></a>

- *Type:* str

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#external_volume Schema#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#id Schema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.isTransient"></a>

- *Type:* str

Specifies the schema as transient.

Transient schemas do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#is_transient Schema#is_transient}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.logLevel"></a>

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#log_level Schema#log_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#max_data_extension_time_in_days Schema#max_data_extension_time_in_days}

---

##### `pipe_execution_paused`<sup>Optional</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.pipeExecutionPaused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role.

For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#pipe_execution_paused Schema#pipe_execution_paused}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#quoted_identifiers_ignore_case Schema#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#replace_invalid_characters Schema#replace_invalid_characters}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* str

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#storage_serialization_policy Schema#storage_serialization_policy}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* typing.Union[int, float]

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#suspend_task_after_num_failures Schema#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#task_auto_retry_attempts Schema#task_auto_retry_attempts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.traceLevel"></a>

- *Type:* str

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#trace_level Schema#trace_level}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* str

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#user_task_managed_initial_warehouse_size Schema#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#user_task_minimum_trigger_interval_in_seconds Schema#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* typing.Union[int, float]

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#user_task_timeout_ms Schema#user_task_timeout_ms}

---

##### `with_managed_access`<sup>Optional</sup> <a name="with_managed_access" id="@cdktf/provider-snowflake.schema.Schema.Initializer.parameter.withManagedAccess"></a>

- *Type:* str

Specifies a managed schema.

Managed access schemas centralize privilege management with the schema owner. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#with_managed_access Schema#with_managed_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetDefaultDdlCollation">reset_default_ddl_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetIsTransient">reset_is_transient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetMaxDataExtensionTimeInDays">reset_max_data_extension_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetPipeExecutionPaused">reset_pipe_execution_paused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetQuotedIdentifiersIgnoreCase">reset_quoted_identifiers_ignore_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetStorageSerializationPolicy">reset_storage_serialization_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetSuspendTaskAfterNumFailures">reset_suspend_task_after_num_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetTaskAutoRetryAttempts">reset_task_auto_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetTraceLevel">reset_trace_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetUserTaskManagedInitialWarehouseSize">reset_user_task_managed_initial_warehouse_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetUserTaskMinimumTriggerIntervalInSeconds">reset_user_task_minimum_trigger_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetUserTaskTimeoutMs">reset_user_task_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.resetWithManagedAccess">reset_with_managed_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.Schema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.schema.Schema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.schema.Schema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.Schema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.schema.Schema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.schema.Schema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.schema.Schema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.schema.Schema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.schema.Schema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.schema.Schema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.schema.Schema.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.schema.Schema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.Schema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.Schema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.Schema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.Schema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.Schema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.Schema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.Schema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.Schema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.Schema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.schema.Schema.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.schema.Schema.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.schema.Schema.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.schema.Schema.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.Schema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.Schema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.schema.Schema.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.schema.Schema.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.schema.Schema.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.schema.Schema.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.schema.Schema.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.schema.Schema.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.schema.Schema.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-snowflake.schema.Schema.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.schema.Schema.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktf/provider-snowflake.schema.Schema.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_default_ddl_collation` <a name="reset_default_ddl_collation" id="@cdktf/provider-snowflake.schema.Schema.resetDefaultDdlCollation"></a>

```python
def reset_default_ddl_collation() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.schema.Schema.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktf/provider-snowflake.schema.Schema.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.schema.Schema.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_transient` <a name="reset_is_transient" id="@cdktf/provider-snowflake.schema.Schema.resetIsTransient"></a>

```python
def reset_is_transient() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.schema.Schema.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_max_data_extension_time_in_days` <a name="reset_max_data_extension_time_in_days" id="@cdktf/provider-snowflake.schema.Schema.resetMaxDataExtensionTimeInDays"></a>

```python
def reset_max_data_extension_time_in_days() -> None
```

##### `reset_pipe_execution_paused` <a name="reset_pipe_execution_paused" id="@cdktf/provider-snowflake.schema.Schema.resetPipeExecutionPaused"></a>

```python
def reset_pipe_execution_paused() -> None
```

##### `reset_quoted_identifiers_ignore_case` <a name="reset_quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.schema.Schema.resetQuotedIdentifiersIgnoreCase"></a>

```python
def reset_quoted_identifiers_ignore_case() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktf/provider-snowflake.schema.Schema.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_storage_serialization_policy` <a name="reset_storage_serialization_policy" id="@cdktf/provider-snowflake.schema.Schema.resetStorageSerializationPolicy"></a>

```python
def reset_storage_serialization_policy() -> None
```

##### `reset_suspend_task_after_num_failures` <a name="reset_suspend_task_after_num_failures" id="@cdktf/provider-snowflake.schema.Schema.resetSuspendTaskAfterNumFailures"></a>

```python
def reset_suspend_task_after_num_failures() -> None
```

##### `reset_task_auto_retry_attempts` <a name="reset_task_auto_retry_attempts" id="@cdktf/provider-snowflake.schema.Schema.resetTaskAutoRetryAttempts"></a>

```python
def reset_task_auto_retry_attempts() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.schema.Schema.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

##### `reset_user_task_managed_initial_warehouse_size` <a name="reset_user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.schema.Schema.resetUserTaskManagedInitialWarehouseSize"></a>

```python
def reset_user_task_managed_initial_warehouse_size() -> None
```

##### `reset_user_task_minimum_trigger_interval_in_seconds` <a name="reset_user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.schema.Schema.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```python
def reset_user_task_minimum_trigger_interval_in_seconds() -> None
```

##### `reset_user_task_timeout_ms` <a name="reset_user_task_timeout_ms" id="@cdktf/provider-snowflake.schema.Schema.resetUserTaskTimeoutMs"></a>

```python
def reset_user_task_timeout_ms() -> None
```

##### `reset_with_managed_access` <a name="reset_with_managed_access" id="@cdktf/provider-snowflake.schema.Schema.resetWithManagedAccess"></a>

```python
def reset_with_managed_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.schema.Schema.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.Schema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.schema.Schema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.schema.Schema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.Schema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.schema.Schema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.schema.Schema.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.Schema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.schema.Schema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.schema.Schema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.Schema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.schema.Schema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.schema.Schema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Schema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.schema.Schema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Schema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.schema.Schema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Schema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList">SchemaDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList">SchemaParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList">SchemaShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.defaultDdlCollationInput">default_ddl_collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.isTransientInput">is_transient_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.maxDataExtensionTimeInDaysInput">max_data_extension_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.pipeExecutionPausedInput">pipe_execution_paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.quotedIdentifiersIgnoreCaseInput">quoted_identifiers_ignore_case_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.storageSerializationPolicyInput">storage_serialization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.suspendTaskAfterNumFailuresInput">suspend_task_after_num_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.taskAutoRetryAttemptsInput">task_auto_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.userTaskManagedInitialWarehouseSizeInput">user_task_managed_initial_warehouse_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.userTaskMinimumTriggerIntervalInSecondsInput">user_task_minimum_trigger_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.userTaskTimeoutMsInput">user_task_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.withManagedAccessInput">with_managed_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.isTransient">is_transient</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.pipeExecutionPaused">pipe_execution_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.withManagedAccess">with_managed_access</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.schema.Schema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.schema.Schema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.Schema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.schema.Schema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.schema.Schema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.schema.Schema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.schema.Schema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.schema.Schema.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.schema.Schema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.schema.Schema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.schema.Schema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.schema.Schema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.schema.Schema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.schema.Schema.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.schema.Schema.property.describeOutput"></a>

```python
describe_output: SchemaDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList">SchemaDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.schema.Schema.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.schema.Schema.property.parameters"></a>

```python
parameters: SchemaParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersList">SchemaParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.schema.Schema.property.showOutput"></a>

```python
show_output: SchemaShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList">SchemaShowOutputList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-snowflake.schema.Schema.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.schema.Schema.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.schema.Schema.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktf/provider-snowflake.schema.Schema.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ddl_collation_input`<sup>Optional</sup> <a name="default_ddl_collation_input" id="@cdktf/provider-snowflake.schema.Schema.property.defaultDdlCollationInput"></a>

```python
default_ddl_collation_input: str
```

- *Type:* str

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.schema.Schema.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktf/provider-snowflake.schema.Schema.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.schema.Schema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_transient_input`<sup>Optional</sup> <a name="is_transient_input" id="@cdktf/provider-snowflake.schema.Schema.property.isTransientInput"></a>

```python
is_transient_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.schema.Schema.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days_input`<sup>Optional</sup> <a name="max_data_extension_time_in_days_input" id="@cdktf/provider-snowflake.schema.Schema.property.maxDataExtensionTimeInDaysInput"></a>

```python
max_data_extension_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.schema.Schema.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pipe_execution_paused_input`<sup>Optional</sup> <a name="pipe_execution_paused_input" id="@cdktf/provider-snowflake.schema.Schema.property.pipeExecutionPausedInput"></a>

```python
pipe_execution_paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quoted_identifiers_ignore_case_input`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case_input" id="@cdktf/provider-snowflake.schema.Schema.property.quotedIdentifiersIgnoreCaseInput"></a>

```python
quoted_identifiers_ignore_case_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktf/provider-snowflake.schema.Schema.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_serialization_policy_input`<sup>Optional</sup> <a name="storage_serialization_policy_input" id="@cdktf/provider-snowflake.schema.Schema.property.storageSerializationPolicyInput"></a>

```python
storage_serialization_policy_input: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures_input`<sup>Optional</sup> <a name="suspend_task_after_num_failures_input" id="@cdktf/provider-snowflake.schema.Schema.property.suspendTaskAfterNumFailuresInput"></a>

```python
suspend_task_after_num_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts_input`<sup>Optional</sup> <a name="task_auto_retry_attempts_input" id="@cdktf/provider-snowflake.schema.Schema.property.taskAutoRetryAttemptsInput"></a>

```python
task_auto_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.schema.Schema.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `user_task_managed_initial_warehouse_size_input`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size_input" id="@cdktf/provider-snowflake.schema.Schema.property.userTaskManagedInitialWarehouseSizeInput"></a>

```python
user_task_managed_initial_warehouse_size_input: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds_input`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds_input" id="@cdktf/provider-snowflake.schema.Schema.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```python
user_task_minimum_trigger_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms_input`<sup>Optional</sup> <a name="user_task_timeout_ms_input" id="@cdktf/provider-snowflake.schema.Schema.property.userTaskTimeoutMsInput"></a>

```python
user_task_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_managed_access_input`<sup>Optional</sup> <a name="with_managed_access_input" id="@cdktf/provider-snowflake.schema.Schema.property.withManagedAccessInput"></a>

```python
with_managed_access_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.schema.Schema.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.schema.Schema.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.schema.Schema.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.schema.Schema.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ddl_collation`<sup>Required</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.schema.Schema.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.schema.Schema.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktf/provider-snowflake.schema.Schema.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.schema.Schema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_transient`<sup>Required</sup> <a name="is_transient" id="@cdktf/provider-snowflake.schema.Schema.property.isTransient"></a>

```python
is_transient: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.schema.Schema.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.schema.Schema.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.schema.Schema.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pipe_execution_paused`<sup>Required</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.schema.Schema.property.pipeExecutionPaused"></a>

```python
pipe_execution_paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quoted_identifiers_ignore_case`<sup>Required</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.schema.Schema.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.schema.Schema.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.schema.Schema.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures`<sup>Required</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.schema.Schema.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts`<sup>Required</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.schema.Schema.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.schema.Schema.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

##### `user_task_managed_initial_warehouse_size`<sup>Required</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.schema.Schema.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Required</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.schema.Schema.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms`<sup>Required</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.schema.Schema.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `with_managed_access`<sup>Required</sup> <a name="with_managed_access" id="@cdktf/provider-snowflake.schema.Schema.property.withManagedAccess"></a>

```python
with_managed_access: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.Schema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.schema.Schema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SchemaConfig <a name="SchemaConfig" id="@cdktf/provider-snowflake.schema.SchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  catalog: str = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  default_ddl_collation: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  id: str = None,
  is_transient: str = None,
  log_level: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  pipe_execution_paused: typing.Union[bool, IResolvable] = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  storage_serialization_policy: str = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  trace_level: str = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None,
  with_managed_access: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the schema. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the schema; |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.catalog">catalog</a></code> | <code>str</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the schema. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#id Schema#id}. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.isTransient">is_transient</a></code> | <code>str</code> | Specifies the schema as transient. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.pipeExecutionPaused">pipe_execution_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaConfig.property.withManagedAccess">with_managed_access</a></code> | <code>str</code> | Specifies a managed schema. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the schema.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#database Schema#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the schema;

must be unique for the database in which the schema is created. When the name is `PUBLIC`, during creation the provider checks if this schema has already been created and, in such case, `ALTER` is used to match the desired state. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#name Schema#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#catalog Schema#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#comment Schema#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#data_retention_time_in_days Schema#data_retention_time_in_days}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#default_ddl_collation Schema#default_ddl_collation}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#enable_console_output Schema#enable_console_output}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#external_volume Schema#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#id Schema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.isTransient"></a>

```python
is_transient: str
```

- *Type:* str

Specifies the schema as transient.

Transient schemas do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#is_transient Schema#is_transient}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#log_level Schema#log_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#max_data_extension_time_in_days Schema#max_data_extension_time_in_days}

---

##### `pipe_execution_paused`<sup>Optional</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.pipeExecutionPaused"></a>

```python
pipe_execution_paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role.

For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#pipe_execution_paused Schema#pipe_execution_paused}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#quoted_identifiers_ignore_case Schema#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#replace_invalid_characters Schema#replace_invalid_characters}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#storage_serialization_policy Schema#storage_serialization_policy}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#suspend_task_after_num_failures Schema#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#task_auto_retry_attempts Schema#task_auto_retry_attempts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#trace_level Schema#trace_level}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#user_task_managed_initial_warehouse_size Schema#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#user_task_minimum_trigger_interval_in_seconds Schema#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#user_task_timeout_ms Schema#user_task_timeout_ms}

---

##### `with_managed_access`<sup>Optional</sup> <a name="with_managed_access" id="@cdktf/provider-snowflake.schema.SchemaConfig.property.withManagedAccess"></a>

```python
with_managed_access: str
```

- *Type:* str

Specifies a managed schema.

Managed access schemas centralize privilege management with the schema owner. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/schema#with_managed_access Schema#with_managed_access}

---

### SchemaDescribeOutput <a name="SchemaDescribeOutput" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaDescribeOutput()
```


### SchemaParameters <a name="SchemaParameters" id="@cdktf/provider-snowflake.schema.SchemaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParameters()
```


### SchemaParametersCatalog <a name="SchemaParametersCatalog" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalog.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersCatalog()
```


### SchemaParametersDataRetentionTimeInDays <a name="SchemaParametersDataRetentionTimeInDays" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDays.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersDataRetentionTimeInDays()
```


### SchemaParametersDefaultDdlCollation <a name="SchemaParametersDefaultDdlCollation" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollation.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersDefaultDdlCollation()
```


### SchemaParametersEnableConsoleOutput <a name="SchemaParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersEnableConsoleOutput()
```


### SchemaParametersExternalVolume <a name="SchemaParametersExternalVolume" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersExternalVolume()
```


### SchemaParametersLogLevel <a name="SchemaParametersLogLevel" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersLogLevel()
```


### SchemaParametersMaxDataExtensionTimeInDays <a name="SchemaParametersMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDays.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersMaxDataExtensionTimeInDays()
```


### SchemaParametersPipeExecutionPaused <a name="SchemaParametersPipeExecutionPaused" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPaused"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPaused.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersPipeExecutionPaused()
```


### SchemaParametersQuotedIdentifiersIgnoreCase <a name="SchemaParametersQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCase.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersQuotedIdentifiersIgnoreCase()
```


### SchemaParametersReplaceInvalidCharacters <a name="SchemaParametersReplaceInvalidCharacters" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharacters.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersReplaceInvalidCharacters()
```


### SchemaParametersStorageSerializationPolicy <a name="SchemaParametersStorageSerializationPolicy" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersStorageSerializationPolicy()
```


### SchemaParametersSuspendTaskAfterNumFailures <a name="SchemaParametersSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailures.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersSuspendTaskAfterNumFailures()
```


### SchemaParametersTaskAutoRetryAttempts <a name="SchemaParametersTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttempts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttempts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersTaskAutoRetryAttempts()
```


### SchemaParametersTraceLevel <a name="SchemaParametersTraceLevel" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersTraceLevel()
```


### SchemaParametersUserTaskManagedInitialWarehouseSize <a name="SchemaParametersUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSize.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskManagedInitialWarehouseSize()
```


### SchemaParametersUserTaskMinimumTriggerIntervalInSeconds <a name="SchemaParametersUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSeconds.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskMinimumTriggerIntervalInSeconds()
```


### SchemaParametersUserTaskTimeoutMs <a name="SchemaParametersUserTaskTimeoutMs" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMs.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskTimeoutMs()
```


### SchemaShowOutput <a name="SchemaShowOutput" id="@cdktf/provider-snowflake.schema.SchemaShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.schema.SchemaShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### SchemaDescribeOutputList <a name="SchemaDescribeOutputList" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaDescribeOutputOutputReference <a name="SchemaDescribeOutputOutputReference" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutput">SchemaDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: SchemaDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaDescribeOutput">SchemaDescribeOutput</a>

---


### SchemaParametersCatalogList <a name="SchemaParametersCatalogList" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersCatalogOutputReference <a name="SchemaParametersCatalogOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalog">SchemaParametersCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersCatalogOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersCatalog
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalog">SchemaParametersCatalog</a>

---


### SchemaParametersDataRetentionTimeInDaysList <a name="SchemaParametersDataRetentionTimeInDaysList" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersDataRetentionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersDataRetentionTimeInDaysOutputReference <a name="SchemaParametersDataRetentionTimeInDaysOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersDataRetentionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDays">SchemaParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersDataRetentionTimeInDays
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDays">SchemaParametersDataRetentionTimeInDays</a>

---


### SchemaParametersDefaultDdlCollationList <a name="SchemaParametersDefaultDdlCollationList" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersDefaultDdlCollationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersDefaultDdlCollationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersDefaultDdlCollationOutputReference <a name="SchemaParametersDefaultDdlCollationOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersDefaultDdlCollationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollation">SchemaParametersDefaultDdlCollation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersDefaultDdlCollation
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollation">SchemaParametersDefaultDdlCollation</a>

---


### SchemaParametersEnableConsoleOutputList <a name="SchemaParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersEnableConsoleOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersEnableConsoleOutputOutputReference <a name="SchemaParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersEnableConsoleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutput">SchemaParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersEnableConsoleOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutput">SchemaParametersEnableConsoleOutput</a>

---


### SchemaParametersExternalVolumeList <a name="SchemaParametersExternalVolumeList" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersExternalVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersExternalVolumeOutputReference <a name="SchemaParametersExternalVolumeOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersExternalVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolume">SchemaParametersExternalVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersExternalVolume
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolume">SchemaParametersExternalVolume</a>

---


### SchemaParametersList <a name="SchemaParametersList" id="@cdktf/provider-snowflake.schema.SchemaParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersLogLevelList <a name="SchemaParametersLogLevelList" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersLogLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersLogLevelOutputReference <a name="SchemaParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersLogLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevel">SchemaParametersLogLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersLogLevelOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersLogLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevel">SchemaParametersLogLevel</a>

---


### SchemaParametersMaxDataExtensionTimeInDaysList <a name="SchemaParametersMaxDataExtensionTimeInDaysList" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersMaxDataExtensionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersMaxDataExtensionTimeInDaysOutputReference <a name="SchemaParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDays">SchemaParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersMaxDataExtensionTimeInDays
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDays">SchemaParametersMaxDataExtensionTimeInDays</a>

---


### SchemaParametersOutputReference <a name="SchemaParametersOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList">SchemaParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList">SchemaParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.defaultDdlCollation">default_ddl_collation</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList">SchemaParametersDefaultDdlCollationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.enableConsoleOutput">enable_console_output</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList">SchemaParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.externalVolume">external_volume</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList">SchemaParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.logLevel">log_level</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList">SchemaParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList">SchemaParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.pipeExecutionPaused">pipe_execution_paused</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList">SchemaParametersPipeExecutionPausedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList">SchemaParametersQuotedIdentifiersIgnoreCaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList">SchemaParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList">SchemaParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList">SchemaParametersSuspendTaskAfterNumFailuresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList">SchemaParametersTaskAutoRetryAttemptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.traceLevel">trace_level</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList">SchemaParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList">SchemaParametersUserTaskManagedInitialWarehouseSizeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList">SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList">SchemaParametersUserTaskTimeoutMsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParameters">SchemaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.catalog"></a>

```python
catalog: SchemaParametersCatalogList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersCatalogList">SchemaParametersCatalogList</a>

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: SchemaParametersDataRetentionTimeInDaysList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersDataRetentionTimeInDaysList">SchemaParametersDataRetentionTimeInDaysList</a>

---

##### `default_ddl_collation`<sup>Required</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.defaultDdlCollation"></a>

```python
default_ddl_collation: SchemaParametersDefaultDdlCollationList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersDefaultDdlCollationList">SchemaParametersDefaultDdlCollationList</a>

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.enableConsoleOutput"></a>

```python
enable_console_output: SchemaParametersEnableConsoleOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersEnableConsoleOutputList">SchemaParametersEnableConsoleOutputList</a>

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.externalVolume"></a>

```python
external_volume: SchemaParametersExternalVolumeList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersExternalVolumeList">SchemaParametersExternalVolumeList</a>

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.logLevel"></a>

```python
log_level: SchemaParametersLogLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersLogLevelList">SchemaParametersLogLevelList</a>

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: SchemaParametersMaxDataExtensionTimeInDaysList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersMaxDataExtensionTimeInDaysList">SchemaParametersMaxDataExtensionTimeInDaysList</a>

---

##### `pipe_execution_paused`<sup>Required</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.pipeExecutionPaused"></a>

```python
pipe_execution_paused: SchemaParametersPipeExecutionPausedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList">SchemaParametersPipeExecutionPausedList</a>

---

##### `quoted_identifiers_ignore_case`<sup>Required</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: SchemaParametersQuotedIdentifiersIgnoreCaseList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList">SchemaParametersQuotedIdentifiersIgnoreCaseList</a>

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: SchemaParametersReplaceInvalidCharactersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList">SchemaParametersReplaceInvalidCharactersList</a>

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: SchemaParametersStorageSerializationPolicyList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList">SchemaParametersStorageSerializationPolicyList</a>

---

##### `suspend_task_after_num_failures`<sup>Required</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: SchemaParametersSuspendTaskAfterNumFailuresList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList">SchemaParametersSuspendTaskAfterNumFailuresList</a>

---

##### `task_auto_retry_attempts`<sup>Required</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: SchemaParametersTaskAutoRetryAttemptsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList">SchemaParametersTaskAutoRetryAttemptsList</a>

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.traceLevel"></a>

```python
trace_level: SchemaParametersTraceLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList">SchemaParametersTraceLevelList</a>

---

##### `user_task_managed_initial_warehouse_size`<sup>Required</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: SchemaParametersUserTaskManagedInitialWarehouseSizeList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList">SchemaParametersUserTaskManagedInitialWarehouseSizeList</a>

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Required</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList">SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList</a>

---

##### `user_task_timeout_ms`<sup>Required</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: SchemaParametersUserTaskTimeoutMsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList">SchemaParametersUserTaskTimeoutMsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParameters">SchemaParameters</a>

---


### SchemaParametersPipeExecutionPausedList <a name="SchemaParametersPipeExecutionPausedList" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersPipeExecutionPausedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersPipeExecutionPausedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersPipeExecutionPausedOutputReference <a name="SchemaParametersPipeExecutionPausedOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersPipeExecutionPausedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPaused">SchemaParametersPipeExecutionPaused</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPausedOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersPipeExecutionPaused
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersPipeExecutionPaused">SchemaParametersPipeExecutionPaused</a>

---


### SchemaParametersQuotedIdentifiersIgnoreCaseList <a name="SchemaParametersQuotedIdentifiersIgnoreCaseList" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersQuotedIdentifiersIgnoreCaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference <a name="SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCase">SchemaParametersQuotedIdentifiersIgnoreCase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCaseOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersQuotedIdentifiersIgnoreCase
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersQuotedIdentifiersIgnoreCase">SchemaParametersQuotedIdentifiersIgnoreCase</a>

---


### SchemaParametersReplaceInvalidCharactersList <a name="SchemaParametersReplaceInvalidCharactersList" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersReplaceInvalidCharactersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersReplaceInvalidCharactersOutputReference <a name="SchemaParametersReplaceInvalidCharactersOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersReplaceInvalidCharactersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharacters">SchemaParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersReplaceInvalidCharacters
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersReplaceInvalidCharacters">SchemaParametersReplaceInvalidCharacters</a>

---


### SchemaParametersStorageSerializationPolicyList <a name="SchemaParametersStorageSerializationPolicyList" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersStorageSerializationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersStorageSerializationPolicyOutputReference <a name="SchemaParametersStorageSerializationPolicyOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersStorageSerializationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicy">SchemaParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersStorageSerializationPolicy
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersStorageSerializationPolicy">SchemaParametersStorageSerializationPolicy</a>

---


### SchemaParametersSuspendTaskAfterNumFailuresList <a name="SchemaParametersSuspendTaskAfterNumFailuresList" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersSuspendTaskAfterNumFailuresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersSuspendTaskAfterNumFailuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersSuspendTaskAfterNumFailuresOutputReference <a name="SchemaParametersSuspendTaskAfterNumFailuresOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailures">SchemaParametersSuspendTaskAfterNumFailures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailuresOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersSuspendTaskAfterNumFailures
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersSuspendTaskAfterNumFailures">SchemaParametersSuspendTaskAfterNumFailures</a>

---


### SchemaParametersTaskAutoRetryAttemptsList <a name="SchemaParametersTaskAutoRetryAttemptsList" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersTaskAutoRetryAttemptsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersTaskAutoRetryAttemptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersTaskAutoRetryAttemptsOutputReference <a name="SchemaParametersTaskAutoRetryAttemptsOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersTaskAutoRetryAttemptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttempts">SchemaParametersTaskAutoRetryAttempts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttemptsOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersTaskAutoRetryAttempts
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersTaskAutoRetryAttempts">SchemaParametersTaskAutoRetryAttempts</a>

---


### SchemaParametersTraceLevelList <a name="SchemaParametersTraceLevelList" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersTraceLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersTraceLevelOutputReference <a name="SchemaParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersTraceLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevel">SchemaParametersTraceLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersTraceLevelOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersTraceLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersTraceLevel">SchemaParametersTraceLevel</a>

---


### SchemaParametersUserTaskManagedInitialWarehouseSizeList <a name="SchemaParametersUserTaskManagedInitialWarehouseSizeList" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference <a name="SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSize">SchemaParametersUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSizeOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersUserTaskManagedInitialWarehouseSize
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskManagedInitialWarehouseSize">SchemaParametersUserTaskManagedInitialWarehouseSize</a>

---


### SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList <a name="SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference <a name="SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSeconds">SchemaParametersUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersUserTaskMinimumTriggerIntervalInSeconds
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskMinimumTriggerIntervalInSeconds">SchemaParametersUserTaskMinimumTriggerIntervalInSeconds</a>

---


### SchemaParametersUserTaskTimeoutMsList <a name="SchemaParametersUserTaskTimeoutMsList" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskTimeoutMsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaParametersUserTaskTimeoutMsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaParametersUserTaskTimeoutMsOutputReference <a name="SchemaParametersUserTaskTimeoutMsOutputReference" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaParametersUserTaskTimeoutMsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMs">SchemaParametersUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMsOutputReference.property.internalValue"></a>

```python
internal_value: SchemaParametersUserTaskTimeoutMs
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaParametersUserTaskTimeoutMs">SchemaParametersUserTaskTimeoutMs</a>

---


### SchemaShowOutputList <a name="SchemaShowOutputList" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SchemaShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SchemaShowOutputOutputReference <a name="SchemaShowOutputOutputReference" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import schema

schema.SchemaShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.droppedOn">dropped_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.isCurrent">is_current</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.retentionTime">retention_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.schema.SchemaShowOutput">SchemaShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dropped_on`<sup>Required</sup> <a name="dropped_on" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.droppedOn"></a>

```python
dropped_on: str
```

- *Type:* str

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.isCurrent"></a>

```python
is_current: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `retention_time`<sup>Required</sup> <a name="retention_time" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.retentionTime"></a>

```python
retention_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.schema.SchemaShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: SchemaShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.schema.SchemaShowOutput">SchemaShowOutput</a>

---



