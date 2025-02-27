// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecondaryDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * A fully qualified path to a database to create a replica from. A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<database_name>"`. For more information about this resource, see [docs](./database).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#as_replica_of SecondaryDatabase#as_replica_of}
  */
  readonly asReplicaOf: string;
  /**
  * The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#catalog SecondaryDatabase#catalog}
  */
  readonly catalog?: string;
  /**
  * Specifies a comment for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#comment SecondaryDatabase#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#data_retention_time_in_days SecondaryDatabase#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * Specifies a default collation specification for all schemas and tables added to the database. It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#default_ddl_collation SecondaryDatabase#default_ddl_collation}
  */
  readonly defaultDdlCollation?: string;
  /**
  * If true, enables stdout/stderr fast path logging for anonymous stored procedures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#enable_console_output SecondaryDatabase#enable_console_output}
  */
  readonly enableConsoleOutput?: boolean | cdktf.IResolvable;
  /**
  * The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#external_volume SecondaryDatabase#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#id SecondaryDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the database as transient. Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#is_transient SecondaryDatabase#is_transient}
  */
  readonly isTransient?: boolean | cdktf.IResolvable;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#log_level SecondaryDatabase#log_level}
  */
  readonly logLevel?: string;
  /**
  * Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#max_data_extension_time_in_days SecondaryDatabase#max_data_extension_time_in_days}
  */
  readonly maxDataExtensionTimeInDays?: number;
  /**
  * Specifies the identifier for the database; must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#name SecondaryDatabase#name}
  */
  readonly name: string;
  /**
  * If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#quoted_identifiers_ignore_case SecondaryDatabase#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#replace_invalid_characters SecondaryDatabase#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean | cdktf.IResolvable;
  /**
  * The storage serialization policy for Iceberg tables that use Snowflake as the catalog. Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#storage_serialization_policy SecondaryDatabase#storage_serialization_policy}
  */
  readonly storageSerializationPolicy?: string;
  /**
  * How many times a task must fail in a row before it is automatically suspended. 0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#suspend_task_after_num_failures SecondaryDatabase#suspend_task_after_num_failures}
  */
  readonly suspendTaskAfterNumFailures?: number;
  /**
  * Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#task_auto_retry_attempts SecondaryDatabase#task_auto_retry_attempts}
  */
  readonly taskAutoRetryAttempts?: number;
  /**
  * Controls how trace events are ingested into the event table. Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#trace_level SecondaryDatabase#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * The initial size of warehouse to use for managed warehouses in the absence of history. For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#user_task_managed_initial_warehouse_size SecondaryDatabase#user_task_managed_initial_warehouse_size}
  */
  readonly userTaskManagedInitialWarehouseSize?: string;
  /**
  * Minimum amount of time between Triggered Task executions in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#user_task_minimum_trigger_interval_in_seconds SecondaryDatabase#user_task_minimum_trigger_interval_in_seconds}
  */
  readonly userTaskMinimumTriggerIntervalInSeconds?: number;
  /**
  * User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#user_task_timeout_ms SecondaryDatabase#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database snowflake_secondary_database}
*/
export class SecondaryDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_secondary_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecondaryDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecondaryDatabase to import
  * @param importFromId The id of the existing SecondaryDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecondaryDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_secondary_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/secondary_database snowflake_secondary_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecondaryDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: SecondaryDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_secondary_database',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.4',
        providerVersionConstraint: ' ~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asReplicaOf = config.asReplicaOf;
    this._catalog = config.catalog;
    this._comment = config.comment;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._defaultDdlCollation = config.defaultDdlCollation;
    this._enableConsoleOutput = config.enableConsoleOutput;
    this._externalVolume = config.externalVolume;
    this._id = config.id;
    this._isTransient = config.isTransient;
    this._logLevel = config.logLevel;
    this._maxDataExtensionTimeInDays = config.maxDataExtensionTimeInDays;
    this._name = config.name;
    this._quotedIdentifiersIgnoreCase = config.quotedIdentifiersIgnoreCase;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._storageSerializationPolicy = config.storageSerializationPolicy;
    this._suspendTaskAfterNumFailures = config.suspendTaskAfterNumFailures;
    this._taskAutoRetryAttempts = config.taskAutoRetryAttempts;
    this._traceLevel = config.traceLevel;
    this._userTaskManagedInitialWarehouseSize = config.userTaskManagedInitialWarehouseSize;
    this._userTaskMinimumTriggerIntervalInSeconds = config.userTaskMinimumTriggerIntervalInSeconds;
    this._userTaskTimeoutMs = config.userTaskTimeoutMs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_replica_of - computed: false, optional: false, required: true
  private _asReplicaOf?: string; 
  public get asReplicaOf() {
    return this.getStringAttribute('as_replica_of');
  }
  public set asReplicaOf(value: string) {
    this._asReplicaOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asReplicaOfInput() {
    return this._asReplicaOf;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // data_retention_time_in_days - computed: true, optional: true, required: false
  private _dataRetentionTimeInDays?: number; 
  public get dataRetentionTimeInDays() {
    return this.getNumberAttribute('data_retention_time_in_days');
  }
  public set dataRetentionTimeInDays(value: number) {
    this._dataRetentionTimeInDays = value;
  }
  public resetDataRetentionTimeInDays() {
    this._dataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInDaysInput() {
    return this._dataRetentionTimeInDays;
  }

  // default_ddl_collation - computed: true, optional: true, required: false
  private _defaultDdlCollation?: string; 
  public get defaultDdlCollation() {
    return this.getStringAttribute('default_ddl_collation');
  }
  public set defaultDdlCollation(value: string) {
    this._defaultDdlCollation = value;
  }
  public resetDefaultDdlCollation() {
    this._defaultDdlCollation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDdlCollationInput() {
    return this._defaultDdlCollation;
  }

  // enable_console_output - computed: true, optional: true, required: false
  private _enableConsoleOutput?: boolean | cdktf.IResolvable; 
  public get enableConsoleOutput() {
    return this.getBooleanAttribute('enable_console_output');
  }
  public set enableConsoleOutput(value: boolean | cdktf.IResolvable) {
    this._enableConsoleOutput = value;
  }
  public resetEnableConsoleOutput() {
    this._enableConsoleOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsoleOutputInput() {
    return this._enableConsoleOutput;
  }

  // external_volume - computed: true, optional: true, required: false
  private _externalVolume?: string; 
  public get externalVolume() {
    return this.getStringAttribute('external_volume');
  }
  public set externalVolume(value: string) {
    this._externalVolume = value;
  }
  public resetExternalVolume() {
    this._externalVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVolumeInput() {
    return this._externalVolume;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_transient - computed: false, optional: true, required: false
  private _isTransient?: boolean | cdktf.IResolvable; 
  public get isTransient() {
    return this.getBooleanAttribute('is_transient');
  }
  public set isTransient(value: boolean | cdktf.IResolvable) {
    this._isTransient = value;
  }
  public resetIsTransient() {
    this._isTransient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransientInput() {
    return this._isTransient;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_data_extension_time_in_days - computed: true, optional: true, required: false
  private _maxDataExtensionTimeInDays?: number; 
  public get maxDataExtensionTimeInDays() {
    return this.getNumberAttribute('max_data_extension_time_in_days');
  }
  public set maxDataExtensionTimeInDays(value: number) {
    this._maxDataExtensionTimeInDays = value;
  }
  public resetMaxDataExtensionTimeInDays() {
    this._maxDataExtensionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataExtensionTimeInDaysInput() {
    return this._maxDataExtensionTimeInDays;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: true, required: false
  private _quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable; 
  public get quotedIdentifiersIgnoreCase() {
    return this.getBooleanAttribute('quoted_identifiers_ignore_case');
  }
  public set quotedIdentifiersIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._quotedIdentifiersIgnoreCase = value;
  }
  public resetQuotedIdentifiersIgnoreCase() {
    this._quotedIdentifiersIgnoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotedIdentifiersIgnoreCaseInput() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // replace_invalid_characters - computed: true, optional: true, required: false
  private _replaceInvalidCharacters?: boolean | cdktf.IResolvable; 
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // storage_serialization_policy - computed: true, optional: true, required: false
  private _storageSerializationPolicy?: string; 
  public get storageSerializationPolicy() {
    return this.getStringAttribute('storage_serialization_policy');
  }
  public set storageSerializationPolicy(value: string) {
    this._storageSerializationPolicy = value;
  }
  public resetStorageSerializationPolicy() {
    this._storageSerializationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSerializationPolicyInput() {
    return this._storageSerializationPolicy;
  }

  // suspend_task_after_num_failures - computed: true, optional: true, required: false
  private _suspendTaskAfterNumFailures?: number; 
  public get suspendTaskAfterNumFailures() {
    return this.getNumberAttribute('suspend_task_after_num_failures');
  }
  public set suspendTaskAfterNumFailures(value: number) {
    this._suspendTaskAfterNumFailures = value;
  }
  public resetSuspendTaskAfterNumFailures() {
    this._suspendTaskAfterNumFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTaskAfterNumFailuresInput() {
    return this._suspendTaskAfterNumFailures;
  }

  // task_auto_retry_attempts - computed: true, optional: true, required: false
  private _taskAutoRetryAttempts?: number; 
  public get taskAutoRetryAttempts() {
    return this.getNumberAttribute('task_auto_retry_attempts');
  }
  public set taskAutoRetryAttempts(value: number) {
    this._taskAutoRetryAttempts = value;
  }
  public resetTaskAutoRetryAttempts() {
    this._taskAutoRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAutoRetryAttemptsInput() {
    return this._taskAutoRetryAttempts;
  }

  // trace_level - computed: true, optional: true, required: false
  private _traceLevel?: string; 
  public get traceLevel() {
    return this.getStringAttribute('trace_level');
  }
  public set traceLevel(value: string) {
    this._traceLevel = value;
  }
  public resetTraceLevel() {
    this._traceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLevelInput() {
    return this._traceLevel;
  }

  // user_task_managed_initial_warehouse_size - computed: true, optional: true, required: false
  private _userTaskManagedInitialWarehouseSize?: string; 
  public get userTaskManagedInitialWarehouseSize() {
    return this.getStringAttribute('user_task_managed_initial_warehouse_size');
  }
  public set userTaskManagedInitialWarehouseSize(value: string) {
    this._userTaskManagedInitialWarehouseSize = value;
  }
  public resetUserTaskManagedInitialWarehouseSize() {
    this._userTaskManagedInitialWarehouseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskManagedInitialWarehouseSizeInput() {
    return this._userTaskManagedInitialWarehouseSize;
  }

  // user_task_minimum_trigger_interval_in_seconds - computed: true, optional: true, required: false
  private _userTaskMinimumTriggerIntervalInSeconds?: number; 
  public get userTaskMinimumTriggerIntervalInSeconds() {
    return this.getNumberAttribute('user_task_minimum_trigger_interval_in_seconds');
  }
  public set userTaskMinimumTriggerIntervalInSeconds(value: number) {
    this._userTaskMinimumTriggerIntervalInSeconds = value;
  }
  public resetUserTaskMinimumTriggerIntervalInSeconds() {
    this._userTaskMinimumTriggerIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskMinimumTriggerIntervalInSecondsInput() {
    return this._userTaskMinimumTriggerIntervalInSeconds;
  }

  // user_task_timeout_ms - computed: true, optional: true, required: false
  private _userTaskTimeoutMs?: number; 
  public get userTaskTimeoutMs() {
    return this.getNumberAttribute('user_task_timeout_ms');
  }
  public set userTaskTimeoutMs(value: number) {
    this._userTaskTimeoutMs = value;
  }
  public resetUserTaskTimeoutMs() {
    this._userTaskTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskTimeoutMsInput() {
    return this._userTaskTimeoutMs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_replica_of: cdktf.stringToTerraform(this._asReplicaOf),
      catalog: cdktf.stringToTerraform(this._catalog),
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_time_in_days: cdktf.numberToTerraform(this._dataRetentionTimeInDays),
      default_ddl_collation: cdktf.stringToTerraform(this._defaultDdlCollation),
      enable_console_output: cdktf.booleanToTerraform(this._enableConsoleOutput),
      external_volume: cdktf.stringToTerraform(this._externalVolume),
      id: cdktf.stringToTerraform(this._id),
      is_transient: cdktf.booleanToTerraform(this._isTransient),
      log_level: cdktf.stringToTerraform(this._logLevel),
      max_data_extension_time_in_days: cdktf.numberToTerraform(this._maxDataExtensionTimeInDays),
      name: cdktf.stringToTerraform(this._name),
      quoted_identifiers_ignore_case: cdktf.booleanToTerraform(this._quotedIdentifiersIgnoreCase),
      replace_invalid_characters: cdktf.booleanToTerraform(this._replaceInvalidCharacters),
      storage_serialization_policy: cdktf.stringToTerraform(this._storageSerializationPolicy),
      suspend_task_after_num_failures: cdktf.numberToTerraform(this._suspendTaskAfterNumFailures),
      task_auto_retry_attempts: cdktf.numberToTerraform(this._taskAutoRetryAttempts),
      trace_level: cdktf.stringToTerraform(this._traceLevel),
      user_task_managed_initial_warehouse_size: cdktf.stringToTerraform(this._userTaskManagedInitialWarehouseSize),
      user_task_minimum_trigger_interval_in_seconds: cdktf.numberToTerraform(this._userTaskMinimumTriggerIntervalInSeconds),
      user_task_timeout_ms: cdktf.numberToTerraform(this._userTaskTimeoutMs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_replica_of: {
        value: cdktf.stringToHclTerraform(this._asReplicaOf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_retention_time_in_days: {
        value: cdktf.numberToHclTerraform(this._dataRetentionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_ddl_collation: {
        value: cdktf.stringToHclTerraform(this._defaultDdlCollation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_console_output: {
        value: cdktf.booleanToHclTerraform(this._enableConsoleOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_volume: {
        value: cdktf.stringToHclTerraform(this._externalVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_transient: {
        value: cdktf.booleanToHclTerraform(this._isTransient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_data_extension_time_in_days: {
        value: cdktf.numberToHclTerraform(this._maxDataExtensionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quoted_identifiers_ignore_case: {
        value: cdktf.booleanToHclTerraform(this._quotedIdentifiersIgnoreCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_invalid_characters: {
        value: cdktf.booleanToHclTerraform(this._replaceInvalidCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_serialization_policy: {
        value: cdktf.stringToHclTerraform(this._storageSerializationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspend_task_after_num_failures: {
        value: cdktf.numberToHclTerraform(this._suspendTaskAfterNumFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_auto_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._taskAutoRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_level: {
        value: cdktf.stringToHclTerraform(this._traceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_task_managed_initial_warehouse_size: {
        value: cdktf.stringToHclTerraform(this._userTaskManagedInitialWarehouseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_task_minimum_trigger_interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._userTaskMinimumTriggerIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_task_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._userTaskTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
