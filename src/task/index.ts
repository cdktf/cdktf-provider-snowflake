// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies one or more predecessor tasks for the current task. Use this option to create a DAG of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#after Task#after}
  */
  readonly after?: string[];
  /**
  * By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}
  */
  readonly allowOverlappingExecution?: boolean | cdktf.IResolvable;
  /**
  * Specifies a comment for the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#comment Task#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#database Task#database}
  */
  readonly database: string;
  /**
  * Specifies if the task should be started (enabled) after creation or should remain suspended (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#enabled Task#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the notification integration used for error notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#error_integration Task#error_integration}
  */
  readonly errorIntegration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#id Task#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the task; must be unique for the database and schema in which the task is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#name Task#name}
  */
  readonly name: string;
  /**
  * The schedule for periodically running the task. This can be a cron or interval in minutes. (Conflict with after)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#schedule Task#schedule}
  */
  readonly schedule?: string;
  /**
  * The schema in which to create the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#schema Task#schema}
  */
  readonly schema: string;
  /**
  * Specifies session parameters to set for the session when the task runs. A task supports all session parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#session_parameters Task#session_parameters}
  */
  readonly sessionParameters?: { [key: string]: string };
  /**
  * Any single SQL statement, or a call to a stored procedure, executed when the task runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#sql_statement Task#sql_statement}
  */
  readonly sqlStatement: string;
  /**
  * Specifies the number of consecutive failed task runs after which the current task is suspended automatically. The default is 0 (no automatic suspension).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}
  */
  readonly suspendTaskAfterNumFailures?: number;
  /**
  * Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. (Conflicts with warehouse)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}
  */
  readonly userTaskManagedInitialWarehouseSize?: string;
  /**
  * Specifies the time limit on a single run of the task before it times out (in milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
  /**
  * The warehouse the task will use. Omit this parameter to use Snowflake-managed compute resources for runs of this task. (Conflicts with user_task_managed_initial_warehouse_size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#warehouse Task#warehouse}
  */
  readonly warehouse?: string;
  /**
  * Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#when Task#when}
  */
  readonly when?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task snowflake_task}
*/
export class Task extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Task to import
  * @param importFromId The id of the existing Task that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Task to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/task snowflake_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskConfig
  */
  public constructor(scope: Construct, id: string, config: TaskConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_task',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.91.0',
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
    this._after = config.after;
    this._allowOverlappingExecution = config.allowOverlappingExecution;
    this._comment = config.comment;
    this._database = config.database;
    this._enabled = config.enabled;
    this._errorIntegration = config.errorIntegration;
    this._id = config.id;
    this._name = config.name;
    this._schedule = config.schedule;
    this._schema = config.schema;
    this._sessionParameters = config.sessionParameters;
    this._sqlStatement = config.sqlStatement;
    this._suspendTaskAfterNumFailures = config.suspendTaskAfterNumFailures;
    this._userTaskManagedInitialWarehouseSize = config.userTaskManagedInitialWarehouseSize;
    this._userTaskTimeoutMs = config.userTaskTimeoutMs;
    this._warehouse = config.warehouse;
    this._when = config.when;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after - computed: false, optional: true, required: false
  private _after?: string[]; 
  public get after() {
    return this.getListAttribute('after');
  }
  public set after(value: string[]) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // allow_overlapping_execution - computed: false, optional: true, required: false
  private _allowOverlappingExecution?: boolean | cdktf.IResolvable; 
  public get allowOverlappingExecution() {
    return this.getBooleanAttribute('allow_overlapping_execution');
  }
  public set allowOverlappingExecution(value: boolean | cdktf.IResolvable) {
    this._allowOverlappingExecution = value;
  }
  public resetAllowOverlappingExecution() {
    this._allowOverlappingExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverlappingExecutionInput() {
    return this._allowOverlappingExecution;
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

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // error_integration - computed: false, optional: true, required: false
  private _errorIntegration?: string; 
  public get errorIntegration() {
    return this.getStringAttribute('error_integration');
  }
  public set errorIntegration(value: string) {
    this._errorIntegration = value;
  }
  public resetErrorIntegration() {
    this._errorIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIntegrationInput() {
    return this._errorIntegration;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // session_parameters - computed: false, optional: true, required: false
  private _sessionParameters?: { [key: string]: string }; 
  public get sessionParameters() {
    return this.getStringMapAttribute('session_parameters');
  }
  public set sessionParameters(value: { [key: string]: string }) {
    this._sessionParameters = value;
  }
  public resetSessionParameters() {
    this._sessionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionParametersInput() {
    return this._sessionParameters;
  }

  // sql_statement - computed: false, optional: false, required: true
  private _sqlStatement?: string; 
  public get sqlStatement() {
    return this.getStringAttribute('sql_statement');
  }
  public set sqlStatement(value: string) {
    this._sqlStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlStatementInput() {
    return this._sqlStatement;
  }

  // suspend_task_after_num_failures - computed: false, optional: true, required: false
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

  // user_task_managed_initial_warehouse_size - computed: false, optional: true, required: false
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

  // user_task_timeout_ms - computed: false, optional: true, required: false
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

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after: cdktf.listMapper(cdktf.stringToTerraform, false)(this._after),
      allow_overlapping_execution: cdktf.booleanToTerraform(this._allowOverlappingExecution),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      enabled: cdktf.booleanToTerraform(this._enabled),
      error_integration: cdktf.stringToTerraform(this._errorIntegration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      schema: cdktf.stringToTerraform(this._schema),
      session_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._sessionParameters),
      sql_statement: cdktf.stringToTerraform(this._sqlStatement),
      suspend_task_after_num_failures: cdktf.numberToTerraform(this._suspendTaskAfterNumFailures),
      user_task_managed_initial_warehouse_size: cdktf.stringToTerraform(this._userTaskManagedInitialWarehouseSize),
      user_task_timeout_ms: cdktf.numberToTerraform(this._userTaskTimeoutMs),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      when: cdktf.stringToTerraform(this._when),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._after),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allow_overlapping_execution: {
        value: cdktf.booleanToHclTerraform(this._allowOverlappingExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_integration: {
        value: cdktf.stringToHclTerraform(this._errorIntegration),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sessionParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sql_statement: {
        value: cdktf.stringToHclTerraform(this._sqlStatement),
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
      user_task_managed_initial_warehouse_size: {
        value: cdktf.stringToHclTerraform(this._userTaskManagedInitialWarehouseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_task_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._userTaskTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warehouse: {
        value: cdktf.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      when: {
        value: cdktf.stringToHclTerraform(this._when),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
