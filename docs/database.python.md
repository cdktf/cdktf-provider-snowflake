# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-snowflake.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-snowflake.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database snowflake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.Database.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.Database(
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
  catalog: str = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  default_ddl_collation: str = None,
  drop_public_schema_on_creation: typing.Union[bool, IResolvable] = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  id: str = None,
  is_transient: typing.Union[bool, IResolvable] = None,
  log_level: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  replication: DatabaseReplication = None,
  storage_serialization_policy: str = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  trace_level: str = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dropPublicSchemaOnCreation">drop_public_schema_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to drop public schema on creation or not. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#name Database#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.catalog"></a>

- *Type:* str

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#catalog Database#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#comment Database#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* str

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}

---

##### `drop_public_schema_on_creation`<sup>Optional</sup> <a name="drop_public_schema_on_creation" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dropPublicSchemaOnCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to drop public schema on creation or not.

Modifying the parameter after database is already created won't have any effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#enable_console_output Database#enable_console_output}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.externalVolume"></a>

- *Type:* str

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#external_volume Database#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.isTransient"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#is_transient Database#is_transient}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.logLevel"></a>

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#log_level Database#log_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.replication"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#replication Database#replication}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* str

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* typing.Union[int, float]

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.traceLevel"></a>

- *Type:* str

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#trace_level Database#trace_level}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* str

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* typing.Union[int, float]

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putReplication">put_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation">reset_default_ddl_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation">reset_drop_public_schema_on_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetIsTransient">reset_is_transient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays">reset_max_data_extension_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase">reset_quoted_identifiers_ignore_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplication">reset_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy">reset_storage_serialization_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures">reset_suspend_task_after_num_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts">reset_task_auto_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTraceLevel">reset_trace_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize">reset_user_task_managed_initial_warehouse_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds">reset_user_task_minimum_trigger_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs">reset_user_task_timeout_ms</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.database.Database.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.database.Database.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.database.Database.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.database.Database.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.database.Database.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.database.Database.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.database.Database.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.database.Database.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.database.Database.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.database.Database.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.database.Database.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_replication` <a name="put_replication" id="@cdktf/provider-snowflake.database.Database.putReplication"></a>

```python
def put_replication(
  enable_to_account: typing.Union[IResolvable, typing.List[DatabaseReplicationEnableToAccount]],
  ignore_edition_check: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_to_account`<sup>Required</sup> <a name="enable_to_account" id="@cdktf/provider-snowflake.database.Database.putReplication.parameter.enableToAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]

enable_to_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#enable_to_account Database#enable_to_account}

---

###### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.database.Database.putReplication.parameter.ignoreEditionCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows replicating data to accounts on lower editions in either of the following scenarios: 1.

The primary database is in a Business Critical (or higher) account but one or more of the accounts approved for replication are on lower editions. Business Critical Edition is intended for Snowflake accounts with extremely sensitive data. 2. The primary database is in a Business Critical (or higher) account and a signed business associate agreement is in place to store PHI data in the account per HIPAA and HITRUST regulations, but no such agreement is in place for one or more of the accounts approved for replication, regardless if they are Business Critical (or higher) accounts. Both scenarios are prohibited by default in an effort to help prevent account administrators for Business Critical (or higher) accounts from inadvertently replicating sensitive data to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-snowflake.database.Database.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.database.Database.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_default_ddl_collation` <a name="reset_default_ddl_collation" id="@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation"></a>

```python
def reset_default_ddl_collation() -> None
```

##### `reset_drop_public_schema_on_creation` <a name="reset_drop_public_schema_on_creation" id="@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation"></a>

```python
def reset_drop_public_schema_on_creation() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktf/provider-snowflake.database.Database.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.database.Database.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_transient` <a name="reset_is_transient" id="@cdktf/provider-snowflake.database.Database.resetIsTransient"></a>

```python
def reset_is_transient() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.database.Database.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_max_data_extension_time_in_days` <a name="reset_max_data_extension_time_in_days" id="@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays"></a>

```python
def reset_max_data_extension_time_in_days() -> None
```

##### `reset_quoted_identifiers_ignore_case` <a name="reset_quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase"></a>

```python
def reset_quoted_identifiers_ignore_case() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_replication` <a name="reset_replication" id="@cdktf/provider-snowflake.database.Database.resetReplication"></a>

```python
def reset_replication() -> None
```

##### `reset_storage_serialization_policy` <a name="reset_storage_serialization_policy" id="@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy"></a>

```python
def reset_storage_serialization_policy() -> None
```

##### `reset_suspend_task_after_num_failures` <a name="reset_suspend_task_after_num_failures" id="@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures"></a>

```python
def reset_suspend_task_after_num_failures() -> None
```

##### `reset_task_auto_retry_attempts` <a name="reset_task_auto_retry_attempts" id="@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts"></a>

```python
def reset_task_auto_retry_attempts() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.database.Database.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

##### `reset_user_task_managed_initial_warehouse_size` <a name="reset_user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize"></a>

```python
def reset_user_task_managed_initial_warehouse_size() -> None
```

##### `reset_user_task_minimum_trigger_interval_in_seconds` <a name="reset_user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```python
def reset_user_task_minimum_trigger_interval_in_seconds() -> None
```

##### `reset_user_task_timeout_ms` <a name="reset_user_task_timeout_ms" id="@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs"></a>

```python
def reset_user_task_timeout_ms() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.database.Database.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.Database.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.database.Database.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.Database.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.database.Database.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.Database.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.Database.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Database to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput">default_ddl_collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput">drop_public_schema_on_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransientInput">is_transient_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput">max_data_extension_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput">quoted_identifiers_ignore_case_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationInput">replication_input</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput">storage_serialization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput">suspend_task_after_num_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput">task_auto_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput">user_task_managed_initial_warehouse_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput">user_task_minimum_trigger_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput">user_task_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation">drop_public_schema_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.database.Database.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.database.Database.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.Database.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.database.Database.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.database.Database.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.database.Database.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-snowflake.database.Database.property.replication"></a>

```python
replication: DatabaseReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-snowflake.database.Database.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.database.Database.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ddl_collation_input`<sup>Optional</sup> <a name="default_ddl_collation_input" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput"></a>

```python
default_ddl_collation_input: str
```

- *Type:* str

---

##### `drop_public_schema_on_creation_input`<sup>Optional</sup> <a name="drop_public_schema_on_creation_input" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput"></a>

```python
drop_public_schema_on_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktf/provider-snowflake.database.Database.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.database.Database.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_transient_input`<sup>Optional</sup> <a name="is_transient_input" id="@cdktf/provider-snowflake.database.Database.property.isTransientInput"></a>

```python
is_transient_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.database.Database.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days_input`<sup>Optional</sup> <a name="max_data_extension_time_in_days_input" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput"></a>

```python
max_data_extension_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.database.Database.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quoted_identifiers_ignore_case_input`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case_input" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput"></a>

```python
quoted_identifiers_ignore_case_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replication_input`<sup>Optional</sup> <a name="replication_input" id="@cdktf/provider-snowflake.database.Database.property.replicationInput"></a>

```python
replication_input: DatabaseReplication
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `storage_serialization_policy_input`<sup>Optional</sup> <a name="storage_serialization_policy_input" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput"></a>

```python
storage_serialization_policy_input: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures_input`<sup>Optional</sup> <a name="suspend_task_after_num_failures_input" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput"></a>

```python
suspend_task_after_num_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts_input`<sup>Optional</sup> <a name="task_auto_retry_attempts_input" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput"></a>

```python
task_auto_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.database.Database.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `user_task_managed_initial_warehouse_size_input`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size_input" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput"></a>

```python
user_task_managed_initial_warehouse_size_input: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds_input`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds_input" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```python
user_task_minimum_trigger_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms_input`<sup>Optional</sup> <a name="user_task_timeout_ms_input" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput"></a>

```python
user_task_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.Database.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ddl_collation`<sup>Required</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

---

##### `drop_public_schema_on_creation`<sup>Required</sup> <a name="drop_public_schema_on_creation" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation"></a>

```python
drop_public_schema_on_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktf/provider-snowflake.database.Database.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_transient`<sup>Required</sup> <a name="is_transient" id="@cdktf/provider-snowflake.database.Database.property.isTransient"></a>

```python
is_transient: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.database.Database.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quoted_identifiers_ignore_case`<sup>Required</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures`<sup>Required</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts`<sup>Required</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.database.Database.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

##### `user_task_managed_initial_warehouse_size`<sup>Required</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Required</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms`<sup>Required</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.database.Database.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-snowflake.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.DatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  catalog: str = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  default_ddl_collation: str = None,
  drop_public_schema_on_creation: typing.Union[bool, IResolvable] = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  id: str = None,
  is_transient: typing.Union[bool, IResolvable] = None,
  log_level: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  replication: DatabaseReplication = None,
  storage_serialization_policy: str = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  trace_level: str = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog">catalog</a></code> | <code>str</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation">drop_public_schema_on_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to drop public schema on creation or not. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#name Database#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#catalog Database#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#comment Database#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}

---

##### `drop_public_schema_on_creation`<sup>Optional</sup> <a name="drop_public_schema_on_creation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation"></a>

```python
drop_public_schema_on_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to drop public schema on creation or not.

Modifying the parameter after database is already created won't have any effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#enable_console_output Database#enable_console_output}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#external_volume Database#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient"></a>

```python
is_transient: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#is_transient Database#is_transient}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#log_level Database#log_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replication"></a>

```python
replication: DatabaseReplication
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#replication Database#replication}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#trace_level Database#trace_level}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}

---

### DatabaseReplication <a name="DatabaseReplication" id="@cdktf/provider-snowflake.database.DatabaseReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.DatabaseReplication(
  enable_to_account: typing.Union[IResolvable, typing.List[DatabaseReplicationEnableToAccount]],
  ignore_edition_check: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount">enable_to_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]</code> | enable_to_account block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows replicating data to accounts on lower editions in either of the following scenarios: 1. |

---

##### `enable_to_account`<sup>Required</sup> <a name="enable_to_account" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount"></a>

```python
enable_to_account: typing.Union[IResolvable, typing.List[DatabaseReplicationEnableToAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]

enable_to_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#enable_to_account Database#enable_to_account}

---

##### `ignore_edition_check`<sup>Optional</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows replicating data to accounts on lower editions in either of the following scenarios: 1.

The primary database is in a Business Critical (or higher) account but one or more of the accounts approved for replication are on lower editions. Business Critical Edition is intended for Snowflake accounts with extremely sensitive data. 2. The primary database is in a Business Critical (or higher) account and a signed business associate agreement is in place to store PHI data in the account per HIPAA and HITRUST regulations, but no such agreement is in place for one or more of the accounts approved for replication, regardless if they are Business Critical (or higher) accounts. Both scenarios are prohibited by default in an effort to help prevent account administrators for Business Critical (or higher) accounts from inadvertently replicating sensitive data to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}

---

### DatabaseReplicationEnableToAccount <a name="DatabaseReplicationEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.DatabaseReplicationEnableToAccount(
  account_identifier: str,
  with_failover: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | Specifies account identifier for which replication should be enabled. The account identifiers should be in the form of `"<organization_name>"."<account_name>"`. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover">with_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if failover should be enabled for the specified account identifier. |

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

Specifies account identifier for which replication should be enabled. The account identifiers should be in the form of `"<organization_name>"."<account_name>"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#account_identifier Database#account_identifier}

---

##### `with_failover`<sup>Optional</sup> <a name="with_failover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover"></a>

```python
with_failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if failover should be enabled for the specified account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/database#with_failover Database#with_failover}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseReplicationEnableToAccountList <a name="DatabaseReplicationEnableToAccountList" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.DatabaseReplicationEnableToAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseReplicationEnableToAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseReplicationEnableToAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]

---


### DatabaseReplicationEnableToAccountOutputReference <a name="DatabaseReplicationEnableToAccountOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.DatabaseReplicationEnableToAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover">reset_with_failover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_with_failover` <a name="reset_with_failover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover"></a>

```python
def reset_with_failover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput">account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput">with_failover_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover">with_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_identifier_input`<sup>Optional</sup> <a name="account_identifier_input" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput"></a>

```python
account_identifier_input: str
```

- *Type:* str

---

##### `with_failover_input`<sup>Optional</sup> <a name="with_failover_input" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput"></a>

```python
with_failover_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

---

##### `with_failover`<sup>Required</sup> <a name="with_failover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover"></a>

```python
with_failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseReplicationEnableToAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]

---


### DatabaseReplicationOutputReference <a name="DatabaseReplicationOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import database

database.DatabaseReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount">put_enable_to_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck">reset_ignore_edition_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enable_to_account` <a name="put_enable_to_account" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount"></a>

```python
def put_enable_to_account(
  value: typing.Union[IResolvable, typing.List[DatabaseReplicationEnableToAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]

---

##### `reset_ignore_edition_check` <a name="reset_ignore_edition_check" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck"></a>

```python
def reset_ignore_edition_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount">enable_to_account</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput">enable_to_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput">ignore_edition_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck">ignore_edition_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_to_account`<sup>Required</sup> <a name="enable_to_account" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount"></a>

```python
enable_to_account: DatabaseReplicationEnableToAccountList
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a>

---

##### `enable_to_account_input`<sup>Optional</sup> <a name="enable_to_account_input" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput"></a>

```python
enable_to_account_input: typing.Union[IResolvable, typing.List[DatabaseReplicationEnableToAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>]]

---

##### `ignore_edition_check_input`<sup>Optional</sup> <a name="ignore_edition_check_input" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput"></a>

```python
ignore_edition_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_edition_check`<sup>Required</sup> <a name="ignore_edition_check" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck"></a>

```python
ignore_edition_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseReplication
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---



