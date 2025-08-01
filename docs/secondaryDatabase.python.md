# `secondaryDatabase` Submodule <a name="`secondaryDatabase` Submodule" id="@cdktf/provider-snowflake.secondaryDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecondaryDatabase <a name="SecondaryDatabase" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database snowflake_secondary_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  as_replica_of: str,
  name: str,
  catalog: str = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  default_ddl_collation: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  id: str = None,
  is_transient: typing.Union[bool, IResolvable] = None,
  log_level: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  storage_serialization_policy: str = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  timeouts: SecondaryDatabaseTimeouts = None,
  trace_level: str = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.asReplicaOf">as_replica_of</a></code> | <code>str</code> | A fully qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#id SecondaryDatabase#id}. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `as_replica_of`<sup>Required</sup> <a name="as_replica_of" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.asReplicaOf"></a>

- *Type:* str

A fully qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<database_name>"`. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#as_replica_of SecondaryDatabase#as_replica_of}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#name SecondaryDatabase#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.catalog"></a>

- *Type:* str

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#catalog SecondaryDatabase#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#comment SecondaryDatabase#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#data_retention_time_in_days SecondaryDatabase#data_retention_time_in_days}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* str

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#default_ddl_collation SecondaryDatabase#default_ddl_collation}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#enable_console_output SecondaryDatabase#enable_console_output}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.externalVolume"></a>

- *Type:* str

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#external_volume SecondaryDatabase#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#id SecondaryDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.isTransient"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#is_transient SecondaryDatabase#is_transient}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.logLevel"></a>

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#log_level SecondaryDatabase#log_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#max_data_extension_time_in_days SecondaryDatabase#max_data_extension_time_in_days}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#quoted_identifiers_ignore_case SecondaryDatabase#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#replace_invalid_characters SecondaryDatabase#replace_invalid_characters}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* str

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#storage_serialization_policy SecondaryDatabase#storage_serialization_policy}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* typing.Union[int, float]

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#suspend_task_after_num_failures SecondaryDatabase#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#task_auto_retry_attempts SecondaryDatabase#task_auto_retry_attempts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#timeouts SecondaryDatabase#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.traceLevel"></a>

- *Type:* str

Controls how trace events are ingested into the event table.

Valid options are: `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#trace_level SecondaryDatabase#trace_level}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* str

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#user_task_managed_initial_warehouse_size SecondaryDatabase#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#user_task_minimum_trigger_interval_in_seconds SecondaryDatabase#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* typing.Union[int, float]

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#user_task_timeout_ms SecondaryDatabase#user_task_timeout_ms}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDefaultDdlCollation">reset_default_ddl_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetIsTransient">reset_is_transient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetMaxDataExtensionTimeInDays">reset_max_data_extension_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetQuotedIdentifiersIgnoreCase">reset_quoted_identifiers_ignore_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetStorageSerializationPolicy">reset_storage_serialization_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetSuspendTaskAfterNumFailures">reset_suspend_task_after_num_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTaskAutoRetryAttempts">reset_task_auto_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTraceLevel">reset_trace_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskManagedInitialWarehouseSize">reset_user_task_managed_initial_warehouse_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskMinimumTriggerIntervalInSeconds">reset_user_task_minimum_trigger_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskTimeoutMs">reset_user_task_timeout_ms</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#create SecondaryDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#delete SecondaryDatabase#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#read SecondaryDatabase#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#update SecondaryDatabase#update}.

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_default_ddl_collation` <a name="reset_default_ddl_collation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetDefaultDdlCollation"></a>

```python
def reset_default_ddl_collation() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_transient` <a name="reset_is_transient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetIsTransient"></a>

```python
def reset_is_transient() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_max_data_extension_time_in_days` <a name="reset_max_data_extension_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetMaxDataExtensionTimeInDays"></a>

```python
def reset_max_data_extension_time_in_days() -> None
```

##### `reset_quoted_identifiers_ignore_case` <a name="reset_quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetQuotedIdentifiersIgnoreCase"></a>

```python
def reset_quoted_identifiers_ignore_case() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_storage_serialization_policy` <a name="reset_storage_serialization_policy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetStorageSerializationPolicy"></a>

```python
def reset_storage_serialization_policy() -> None
```

##### `reset_suspend_task_after_num_failures` <a name="reset_suspend_task_after_num_failures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetSuspendTaskAfterNumFailures"></a>

```python
def reset_suspend_task_after_num_failures() -> None
```

##### `reset_task_auto_retry_attempts` <a name="reset_task_auto_retry_attempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTaskAutoRetryAttempts"></a>

```python
def reset_task_auto_retry_attempts() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

##### `reset_user_task_managed_initial_warehouse_size` <a name="reset_user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskManagedInitialWarehouseSize"></a>

```python
def reset_user_task_managed_initial_warehouse_size() -> None
```

##### `reset_user_task_minimum_trigger_interval_in_seconds` <a name="reset_user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```python
def reset_user_task_minimum_trigger_interval_in_seconds() -> None
```

##### `reset_user_task_timeout_ms` <a name="reset_user_task_timeout_ms" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.resetUserTaskTimeoutMs"></a>

```python
def reset_user_task_timeout_ms() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecondaryDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecondaryDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecondaryDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecondaryDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecondaryDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference">SecondaryDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOfInput">as_replica_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollationInput">default_ddl_collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransientInput">is_transient_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDaysInput">max_data_extension_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCaseInput">quoted_identifiers_ignore_case_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicyInput">storage_serialization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailuresInput">suspend_task_after_num_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttemptsInput">task_auto_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSizeInput">user_task_managed_initial_warehouse_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput">user_task_minimum_trigger_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMsInput">user_task_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOf">as_replica_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.timeouts"></a>

```python
timeouts: SecondaryDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference">SecondaryDatabaseTimeoutsOutputReference</a>

---

##### `as_replica_of_input`<sup>Optional</sup> <a name="as_replica_of_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOfInput"></a>

```python
as_replica_of_input: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ddl_collation_input`<sup>Optional</sup> <a name="default_ddl_collation_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollationInput"></a>

```python
default_ddl_collation_input: str
```

- *Type:* str

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_transient_input`<sup>Optional</sup> <a name="is_transient_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransientInput"></a>

```python
is_transient_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days_input`<sup>Optional</sup> <a name="max_data_extension_time_in_days_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDaysInput"></a>

```python
max_data_extension_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quoted_identifiers_ignore_case_input`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCaseInput"></a>

```python
quoted_identifiers_ignore_case_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_serialization_policy_input`<sup>Optional</sup> <a name="storage_serialization_policy_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicyInput"></a>

```python
storage_serialization_policy_input: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures_input`<sup>Optional</sup> <a name="suspend_task_after_num_failures_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailuresInput"></a>

```python
suspend_task_after_num_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts_input`<sup>Optional</sup> <a name="task_auto_retry_attempts_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttemptsInput"></a>

```python
task_auto_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecondaryDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a>]

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `user_task_managed_initial_warehouse_size_input`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSizeInput"></a>

```python
user_task_managed_initial_warehouse_size_input: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds_input`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```python
user_task_minimum_trigger_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms_input`<sup>Optional</sup> <a name="user_task_timeout_ms_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMsInput"></a>

```python
user_task_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `as_replica_of`<sup>Required</sup> <a name="as_replica_of" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.asReplicaOf"></a>

```python
as_replica_of: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ddl_collation`<sup>Required</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_transient`<sup>Required</sup> <a name="is_transient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.isTransient"></a>

```python
is_transient: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quoted_identifiers_ignore_case`<sup>Required</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

---

##### `suspend_task_after_num_failures`<sup>Required</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts`<sup>Required</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

##### `user_task_managed_initial_warehouse_size`<sup>Required</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Required</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms`<sup>Required</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecondaryDatabaseConfig <a name="SecondaryDatabaseConfig" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  as_replica_of: str,
  name: str,
  catalog: str = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  default_ddl_collation: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  id: str = None,
  is_transient: typing.Union[bool, IResolvable] = None,
  log_level: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  storage_serialization_policy: str = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  timeouts: SecondaryDatabaseTimeouts = None,
  trace_level: str = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.asReplicaOf">as_replica_of</a></code> | <code>str</code> | A fully qualified path to a database to create a replica from. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.catalog">catalog</a></code> | <code>str</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#id SecondaryDatabase#id}. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.isTransient">is_transient</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `as_replica_of`<sup>Required</sup> <a name="as_replica_of" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.asReplicaOf"></a>

```python
as_replica_of: str
```

- *Type:* str

A fully qualified path to a database to create a replica from.

A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<database_name>"`. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#as_replica_of SecondaryDatabase#as_replica_of}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#name SecondaryDatabase#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#catalog SecondaryDatabase#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#comment SecondaryDatabase#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#data_retention_time_in_days SecondaryDatabase#data_retention_time_in_days}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#default_ddl_collation SecondaryDatabase#default_ddl_collation}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#enable_console_output SecondaryDatabase#enable_console_output}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#external_volume SecondaryDatabase#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#id SecondaryDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_transient`<sup>Optional</sup> <a name="is_transient" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.isTransient"></a>

```python
is_transient: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#is_transient SecondaryDatabase#is_transient}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#log_level SecondaryDatabase#log_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#max_data_extension_time_in_days SecondaryDatabase#max_data_extension_time_in_days}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#quoted_identifiers_ignore_case SecondaryDatabase#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#replace_invalid_characters SecondaryDatabase#replace_invalid_characters}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#storage_serialization_policy SecondaryDatabase#storage_serialization_policy}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#suspend_task_after_num_failures SecondaryDatabase#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#task_auto_retry_attempts SecondaryDatabase#task_auto_retry_attempts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.timeouts"></a>

```python
timeouts: SecondaryDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#timeouts SecondaryDatabase#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Controls how trace events are ingested into the event table.

Valid options are: `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#trace_level SecondaryDatabase#trace_level}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#user_task_managed_initial_warehouse_size SecondaryDatabase#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#user_task_minimum_trigger_interval_in_seconds SecondaryDatabase#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseConfig.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#user_task_timeout_ms SecondaryDatabase#user_task_timeout_ms}

---

### SecondaryDatabaseTimeouts <a name="SecondaryDatabaseTimeouts" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#create SecondaryDatabase#create}. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#delete SecondaryDatabase#delete}. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#read SecondaryDatabase#read}. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#update SecondaryDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#create SecondaryDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#delete SecondaryDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#read SecondaryDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secondary_database#update SecondaryDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecondaryDatabaseTimeoutsOutputReference <a name="SecondaryDatabaseTimeoutsOutputReference" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secondary_database

secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecondaryDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.secondaryDatabase.SecondaryDatabaseTimeouts">SecondaryDatabaseTimeouts</a>]

---



