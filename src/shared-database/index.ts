/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database parameter that specifies the default catalog to use for Iceberg tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#catalog SharedDatabase#catalog}
  */
  readonly catalog?: string;
  /**
  * Specifies a comment for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#comment SharedDatabase#comment}
  */
  readonly comment?: string;
  /**
  * Specifies a default collation specification for all schemas and tables added to the database. It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#default_ddl_collation SharedDatabase#default_ddl_collation}
  */
  readonly defaultDdlCollation?: string;
  /**
  * If true, enables stdout/stderr fast path logging for anonymous stored procedures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#enable_console_output SharedDatabase#enable_console_output}
  */
  readonly enableConsoleOutput?: boolean | cdktf.IResolvable;
  /**
  * The database parameter that specifies the default external volume to use for Iceberg tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#external_volume SharedDatabase#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * A fully qualified path to a share from which the database will be created. A fully qualified path follows the format of `"<organization_name>"."<account_name>"."<share_name>"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#from_share SharedDatabase#from_share}
  */
  readonly fromShare: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#id SharedDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#log_level SharedDatabase#log_level}
  */
  readonly logLevel?: string;
  /**
  * Specifies the identifier for the database; must be unique for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#name SharedDatabase#name}
  */
  readonly name: string;
  /**
  * If true, the case of quoted identifiers is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#quoted_identifiers_ignore_case SharedDatabase#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. You can only set this parameter for tables that use an external Iceberg catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#replace_invalid_characters SharedDatabase#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean | cdktf.IResolvable;
  /**
  * The storage serialization policy for Iceberg tables that use Snowflake as the catalog. Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#storage_serialization_policy SharedDatabase#storage_serialization_policy}
  */
  readonly storageSerializationPolicy?: string;
  /**
  * How many times a task must fail in a row before it is automatically suspended. 0 disables auto-suspending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#suspend_task_after_num_failures SharedDatabase#suspend_task_after_num_failures}
  */
  readonly suspendTaskAfterNumFailures?: number;
  /**
  * Maximum automatic retries allowed for a user task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#task_auto_retry_attempts SharedDatabase#task_auto_retry_attempts}
  */
  readonly taskAutoRetryAttempts?: number;
  /**
  * Controls how trace events are ingested into the event table. Valid options are: [ALWAYS ON_EVENT OFF]. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#trace_level SharedDatabase#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * The initial size of warehouse to use for managed warehouses in the absence of history.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#user_task_managed_initial_warehouse_size SharedDatabase#user_task_managed_initial_warehouse_size}
  */
  readonly userTaskManagedInitialWarehouseSize?: string;
  /**
  * Minimum amount of time between Triggered Task executions in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#user_task_minimum_trigger_interval_in_seconds SharedDatabase#user_task_minimum_trigger_interval_in_seconds}
  */
  readonly userTaskMinimumTriggerIntervalInSeconds?: number;
  /**
  * User task execution timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#user_task_timeout_ms SharedDatabase#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database snowflake_shared_database}
*/
export class SharedDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_shared_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SharedDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SharedDatabase to import
  * @param importFromId The id of the existing SharedDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SharedDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_shared_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/shared_database snowflake_shared_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: SharedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_shared_database',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.93.0',
        providerVersionConstraint: ' ~> 0.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalog = config.catalog;
    this._comment = config.comment;
    this._defaultDdlCollation = config.defaultDdlCollation;
    this._enableConsoleOutput = config.enableConsoleOutput;
    this._externalVolume = config.externalVolume;
    this._fromShare = config.fromShare;
    this._id = config.id;
    this._logLevel = config.logLevel;
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

  // from_share - computed: false, optional: false, required: true
  private _fromShare?: string; 
  public get fromShare() {
    return this.getStringAttribute('from_share');
  }
  public set fromShare(value: string) {
    this._fromShare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromShareInput() {
    return this._fromShare;
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
      catalog: cdktf.stringToTerraform(this._catalog),
      comment: cdktf.stringToTerraform(this._comment),
      default_ddl_collation: cdktf.stringToTerraform(this._defaultDdlCollation),
      enable_console_output: cdktf.booleanToTerraform(this._enableConsoleOutput),
      external_volume: cdktf.stringToTerraform(this._externalVolume),
      from_share: cdktf.stringToTerraform(this._fromShare),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
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
      from_share: {
        value: cdktf.stringToHclTerraform(this._fromShare),
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
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
