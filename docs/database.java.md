# `database` Submodule <a name="`database` Submodule" id="@cdktf/provider-snowflake.database"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Database <a name="Database" id="@cdktf/provider-snowflake.database.Database"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database snowflake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.Database.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .catalog(java.lang.String)
//  .comment(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .defaultDdlCollation(java.lang.String)
//  .dropPublicSchemaOnCreation(java.lang.Boolean)
//  .dropPublicSchemaOnCreation(IResolvable)
//  .enableConsoleOutput(java.lang.Boolean)
//  .enableConsoleOutput(IResolvable)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .isTransient(java.lang.Boolean)
//  .isTransient(IResolvable)
//  .logLevel(java.lang.String)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .quotedIdentifiersIgnoreCase(java.lang.Boolean)
//  .quotedIdentifiersIgnoreCase(IResolvable)
//  .replaceInvalidCharacters(java.lang.Boolean)
//  .replaceInvalidCharacters(IResolvable)
//  .replication(DatabaseReplication)
//  .storageSerializationPolicy(java.lang.String)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .taskAutoRetryAttempts(java.lang.Number)
//  .traceLevel(java.lang.String)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskMinimumTriggerIntervalInSeconds(java.lang.Number)
//  .userTaskTimeoutMs(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.dropPublicSchemaOnCreation">dropPublicSchemaOnCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to drop public schema on creation or not. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.isTransient">isTransient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#name Database#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#catalog Database#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#comment Database#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* java.lang.String

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}

---

##### `dropPublicSchemaOnCreation`<sup>Optional</sup> <a name="dropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.dropPublicSchemaOnCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to drop public schema on creation or not.

Modifying the parameter after database is already created won't have any effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#enable_console_output Database#enable_console_output}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#external_volume Database#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.isTransient"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#is_transient Database#is_transient}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#log_level Database#log_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* java.lang.Number

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.replication"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#replication Database#replication}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* java.lang.String

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* java.lang.Number

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* java.lang.Number

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.traceLevel"></a>

- *Type:* java.lang.String

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#trace_level Database#trace_level}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* java.lang.String

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* java.lang.Number

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* java.lang.Number

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.database.Database.putReplication">putReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation">resetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation">resetDropPublicSchemaOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput">resetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetIsTransient">resetIsTransient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase">resetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetReplication">resetReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures">resetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts">resetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize">resetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds">resetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs">resetUserTaskTimeoutMs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.Database.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.database.Database.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.database.Database.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.database.Database.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.database.Database.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.database.Database.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.database.Database.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.database.Database.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.database.Database.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.database.Database.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.database.Database.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.Database.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.database.Database.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.database.Database.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.database.Database.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.database.Database.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplication` <a name="putReplication" id="@cdktf/provider-snowflake.database.Database.putReplication"></a>

```java
public void putReplication(DatabaseReplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.Database.putReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-snowflake.database.Database.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.database.Database.resetComment"></a>

```java
public void resetComment()
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetDataRetentionTimeInDays"></a>

```java
public void resetDataRetentionTimeInDays()
```

##### `resetDefaultDdlCollation` <a name="resetDefaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.resetDefaultDdlCollation"></a>

```java
public void resetDefaultDdlCollation()
```

##### `resetDropPublicSchemaOnCreation` <a name="resetDropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.resetDropPublicSchemaOnCreation"></a>

```java
public void resetDropPublicSchemaOnCreation()
```

##### `resetEnableConsoleOutput` <a name="resetEnableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.resetEnableConsoleOutput"></a>

```java
public void resetEnableConsoleOutput()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktf/provider-snowflake.database.Database.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.database.Database.resetId"></a>

```java
public void resetId()
```

##### `resetIsTransient` <a name="resetIsTransient" id="@cdktf/provider-snowflake.database.Database.resetIsTransient"></a>

```java
public void resetIsTransient()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.database.Database.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.resetMaxDataExtensionTimeInDays"></a>

```java
public void resetMaxDataExtensionTimeInDays()
```

##### `resetQuotedIdentifiersIgnoreCase` <a name="resetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.resetQuotedIdentifiersIgnoreCase"></a>

```java
public void resetQuotedIdentifiersIgnoreCase()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetReplication` <a name="resetReplication" id="@cdktf/provider-snowflake.database.Database.resetReplication"></a>

```java
public void resetReplication()
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.resetStorageSerializationPolicy"></a>

```java
public void resetStorageSerializationPolicy()
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.resetSuspendTaskAfterNumFailures"></a>

```java
public void resetSuspendTaskAfterNumFailures()
```

##### `resetTaskAutoRetryAttempts` <a name="resetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.resetTaskAutoRetryAttempts"></a>

```java
public void resetTaskAutoRetryAttempts()
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.database.Database.resetTraceLevel"></a>

```java
public void resetTraceLevel()
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.resetUserTaskManagedInitialWarehouseSize"></a>

```java
public void resetUserTaskManagedInitialWarehouseSize()
```

##### `resetUserTaskMinimumTriggerIntervalInSeconds` <a name="resetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```java
public void resetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.resetUserTaskTimeoutMs"></a>

```java
public void resetUserTaskTimeoutMs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.database.Database.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.database.Database.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.database.Database.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.database.Database.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.Database;

Database.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Database.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Database to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Database that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Database to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput">defaultDdlCollationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput">dropPublicSchemaOnCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput">enableConsoleOutputInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransientInput">isTransientInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput">quotedIdentifiersIgnoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replicationInput">replicationInput</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput">taskAutoRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevelInput">traceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput">userTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation">dropPublicSchemaOnCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.isTransient">isTransient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.database.Database.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.database.Database.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.Database.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.database.Database.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.database.Database.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.database.Database.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.database.Database.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.Database.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.Database.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.Database.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.Database.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.Database.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.Database.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.Database.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.database.Database.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `replication`<sup>Required</sup> <a name="replication" id="@cdktf/provider-snowflake.database.Database.property.replication"></a>

```java
public DatabaseReplicationOutputReference getReplication();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference">DatabaseReplicationOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-snowflake.database.Database.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.database.Database.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `defaultDdlCollationInput`<sup>Optional</sup> <a name="defaultDdlCollationInput" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollationInput"></a>

```java
public java.lang.String getDefaultDdlCollationInput();
```

- *Type:* java.lang.String

---

##### `dropPublicSchemaOnCreationInput`<sup>Optional</sup> <a name="dropPublicSchemaOnCreationInput" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreationInput"></a>

```java
public java.lang.Object getDropPublicSchemaOnCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableConsoleOutputInput`<sup>Optional</sup> <a name="enableConsoleOutputInput" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutputInput"></a>

```java
public java.lang.Object getEnableConsoleOutputInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktf/provider-snowflake.database.Database.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.database.Database.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isTransientInput`<sup>Optional</sup> <a name="isTransientInput" id="@cdktf/provider-snowflake.database.Database.property.isTransientInput"></a>

```java
public java.lang.Object getIsTransientInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.database.Database.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDaysInput"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.database.Database.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCaseInput"></a>

```java
public java.lang.Object getQuotedIdentifiersIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Object getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationInput`<sup>Optional</sup> <a name="replicationInput" id="@cdktf/provider-snowflake.database.Database.property.replicationInput"></a>

```java
public DatabaseReplication getReplicationInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicyInput"></a>

```java
public java.lang.String getStorageSerializationPolicyInput();
```

- *Type:* java.lang.String

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailuresInput"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailuresInput();
```

- *Type:* java.lang.Number

---

##### `taskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="taskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttemptsInput"></a>

```java
public java.lang.Number getTaskAutoRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.database.Database.property.traceLevelInput"></a>

```java
public java.lang.String getTraceLevelInput();
```

- *Type:* java.lang.String

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSizeInput"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSizeInput();
```

- *Type:* java.lang.String

---

##### `userTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMsInput"></a>

```java
public java.lang.Number getUserTaskTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.Database.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.database.Database.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `defaultDdlCollation`<sup>Required</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.database.Database.property.defaultDdlCollation"></a>

```java
public java.lang.String getDefaultDdlCollation();
```

- *Type:* java.lang.String

---

##### `dropPublicSchemaOnCreation`<sup>Required</sup> <a name="dropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.Database.property.dropPublicSchemaOnCreation"></a>

```java
public java.lang.Object getDropPublicSchemaOnCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.database.Database.property.enableConsoleOutput"></a>

```java
public java.lang.Object getEnableConsoleOutput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.database.Database.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.database.Database.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isTransient`<sup>Required</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.Database.property.isTransient"></a>

```java
public java.lang.Object getIsTransient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.database.Database.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.Database.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.Database.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `quotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.Database.property.quotedIdentifiersIgnoreCase"></a>

```java
public java.lang.Object getQuotedIdentifiersIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.database.Database.property.replaceInvalidCharacters"></a>

```java
public java.lang.Object getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.database.Database.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.Database.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

---

##### `taskAutoRetryAttempts`<sup>Required</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.Database.property.taskAutoRetryAttempts"></a>

```java
public java.lang.Number getTaskAutoRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.database.Database.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.Database.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.Database.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.database.Database.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.Database.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.database.Database.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseConfig <a name="DatabaseConfig" id="@cdktf/provider-snowflake.database.DatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseConfig;

DatabaseConfig.builder()
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
    .name(java.lang.String)
//  .catalog(java.lang.String)
//  .comment(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .defaultDdlCollation(java.lang.String)
//  .dropPublicSchemaOnCreation(java.lang.Boolean)
//  .dropPublicSchemaOnCreation(IResolvable)
//  .enableConsoleOutput(java.lang.Boolean)
//  .enableConsoleOutput(IResolvable)
//  .externalVolume(java.lang.String)
//  .id(java.lang.String)
//  .isTransient(java.lang.Boolean)
//  .isTransient(IResolvable)
//  .logLevel(java.lang.String)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .quotedIdentifiersIgnoreCase(java.lang.Boolean)
//  .quotedIdentifiersIgnoreCase(IResolvable)
//  .replaceInvalidCharacters(java.lang.Boolean)
//  .replaceInvalidCharacters(IResolvable)
//  .replication(DatabaseReplication)
//  .storageSerializationPolicy(java.lang.String)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .taskAutoRetryAttempts(java.lang.Number)
//  .traceLevel(java.lang.String)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskMinimumTriggerIntervalInSeconds(java.lang.Number)
//  .userTaskTimeoutMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the database; |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | Specifies a default collation specification for all schemas and tables added to the database. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation">dropPublicSchemaOnCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to drop public schema on creation or not. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enables stdout/stderr fast path logging for anonymous stored procedures. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#id Database#id}. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient">isTransient</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the database as transient. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.replication">replication</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | replication block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | The storage serialization policy for Iceberg tables that use Snowflake as the catalog. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | How many times a task must fail in a row before it is automatically suspended. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts). |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | The initial size of warehouse to use for managed warehouses in the absence of history. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Minimum amount of time between Triggered Task executions in seconds. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the database;

must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#name Database#name}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#catalog Database#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#comment Database#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database.

For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.defaultDdlCollation"></a>

```java
public java.lang.String getDefaultDdlCollation();
```

- *Type:* java.lang.String

Specifies a default collation specification for all schemas and tables added to the database.

It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}

---

##### `dropPublicSchemaOnCreation`<sup>Optional</sup> <a name="dropPublicSchemaOnCreation" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.dropPublicSchemaOnCreation"></a>

```java
public java.lang.Object getDropPublicSchemaOnCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to drop public schema on creation or not.

Modifying the parameter after database is already created won't have any effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.enableConsoleOutput"></a>

```java
public java.lang.Object getEnableConsoleOutput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enables stdout/stderr fast path logging for anonymous stored procedures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#enable_console_output Database#enable_console_output}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#external_volume Database#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#id Database#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTransient`<sup>Optional</sup> <a name="isTransient" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.isTransient"></a>

```java
public java.lang.Object getIsTransient();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the database as transient.

Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#is_transient Database#is_transient}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Specifies the severity level of messages that should be ingested and made available in the active event table.

Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#log_level Database#log_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale.

For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.quotedIdentifiersIgnoreCase"></a>

```java
public java.lang.Object getQuotedIdentifiersIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Object getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table.

You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}

---

##### `replication`<sup>Optional</sup> <a name="replication" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.replication"></a>

```java
public DatabaseReplication getReplication();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#replication Database#replication}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

The storage serialization policy for Iceberg tables that use Snowflake as the catalog.

Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

How many times a task must fail in a row before it is automatically suspended.

0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.taskAutoRetryAttempts"></a>

```java
public java.lang.Number getTaskAutoRetryAttempts();
```

- *Type:* java.lang.Number

Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

Controls how trace events are ingested into the event table.

Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#trace_level Database#trace_level}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

The initial size of warehouse to use for managed warehouses in the absence of history.

For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSeconds();
```

- *Type:* java.lang.Number

Minimum amount of time between Triggered Task executions in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.database.DatabaseConfig.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}

---

### DatabaseReplication <a name="DatabaseReplication" id="@cdktf/provider-snowflake.database.DatabaseReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplication;

DatabaseReplication.builder()
    .enableToAccount(IResolvable)
    .enableToAccount(java.util.List<DatabaseReplicationEnableToAccount>)
//  .ignoreEditionCheck(java.lang.Boolean)
//  .ignoreEditionCheck(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount">enableToAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>></code> | enable_to_account block. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows replicating data to accounts on lower editions in either of the following scenarios: 1. |

---

##### `enableToAccount`<sup>Required</sup> <a name="enableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.enableToAccount"></a>

```java
public java.lang.Object getEnableToAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>>

enable_to_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#enable_to_account Database#enable_to_account}

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplication.property.ignoreEditionCheck"></a>

```java
public java.lang.Object getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows replicating data to accounts on lower editions in either of the following scenarios: 1.

The primary database is in a Business Critical (or higher) account but one or more of the accounts approved for replication are on lower editions. Business Critical Edition is intended for Snowflake accounts with extremely sensitive data. 2. The primary database is in a Business Critical (or higher) account and a signed business associate agreement is in place to store PHI data in the account per HIPAA and HITRUST regulations, but no such agreement is in place for one or more of the accounts approved for replication, regardless if they are Business Critical (or higher) accounts. Both scenarios are prohibited by default in an effort to help prevent account administrators for Business Critical (or higher) accounts from inadvertently replicating sensitive data to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}

---

### DatabaseReplicationEnableToAccount <a name="DatabaseReplicationEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplicationEnableToAccount;

DatabaseReplicationEnableToAccount.builder()
    .accountIdentifier(java.lang.String)
//  .withFailover(java.lang.Boolean)
//  .withFailover(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier">accountIdentifier</a></code> | <code>java.lang.String</code> | Specifies account identifier for which replication should be enabled. The account identifiers should be in the form of `"<organization_name>"."<account_name>"`. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover">withFailover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if failover should be enabled for the specified account identifier. |

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.accountIdentifier"></a>

```java
public java.lang.String getAccountIdentifier();
```

- *Type:* java.lang.String

Specifies account identifier for which replication should be enabled. The account identifiers should be in the form of `"<organization_name>"."<account_name>"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#account_identifier Database#account_identifier}

---

##### `withFailover`<sup>Optional</sup> <a name="withFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount.property.withFailover"></a>

```java
public java.lang.Object getWithFailover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if failover should be enabled for the specified account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/database#with_failover Database#with_failover}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseReplicationEnableToAccountList <a name="DatabaseReplicationEnableToAccountList" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplicationEnableToAccountList;

new DatabaseReplicationEnableToAccountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get"></a>

```java
public DatabaseReplicationEnableToAccountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>>

---


### DatabaseReplicationEnableToAccountOutputReference <a name="DatabaseReplicationEnableToAccountOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplicationEnableToAccountOutputReference;

new DatabaseReplicationEnableToAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover">resetWithFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWithFailover` <a name="resetWithFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.resetWithFailover"></a>

```java
public void resetWithFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput">accountIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput">withFailoverInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier">accountIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover">withFailover</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdentifierInput`<sup>Optional</sup> <a name="accountIdentifierInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifierInput"></a>

```java
public java.lang.String getAccountIdentifierInput();
```

- *Type:* java.lang.String

---

##### `withFailoverInput`<sup>Optional</sup> <a name="withFailoverInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailoverInput"></a>

```java
public java.lang.Object getWithFailoverInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.accountIdentifier"></a>

```java
public java.lang.String getAccountIdentifier();
```

- *Type:* java.lang.String

---

##### `withFailover`<sup>Required</sup> <a name="withFailover" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.withFailover"></a>

```java
public java.lang.Object getWithFailover();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>

---


### DatabaseReplicationOutputReference <a name="DatabaseReplicationOutputReference" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.database.DatabaseReplicationOutputReference;

new DatabaseReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount">putEnableToAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnableToAccount` <a name="putEnableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount"></a>

```java
public void putEnableToAccount(IResolvable OR java.util.List<DatabaseReplicationEnableToAccount> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.putEnableToAccount.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>>

---

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.resetIgnoreEditionCheck"></a>

```java
public void resetIgnoreEditionCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount">enableToAccount</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput">enableToAccountInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableToAccount`<sup>Required</sup> <a name="enableToAccount" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccount"></a>

```java
public DatabaseReplicationEnableToAccountList getEnableToAccount();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccountList">DatabaseReplicationEnableToAccountList</a>

---

##### `enableToAccountInput`<sup>Optional</sup> <a name="enableToAccountInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.enableToAccountInput"></a>

```java
public java.lang.Object getEnableToAccountInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.database.DatabaseReplicationEnableToAccount">DatabaseReplicationEnableToAccount</a>>

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheckInput"></a>

```java
public java.lang.Object getIgnoreEditionCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.ignoreEditionCheck"></a>

```java
public java.lang.Object getIgnoreEditionCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.database.DatabaseReplicationOutputReference.property.internalValue"></a>

```java
public DatabaseReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.database.DatabaseReplication">DatabaseReplication</a>

---



