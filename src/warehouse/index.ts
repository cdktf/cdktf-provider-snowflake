// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WarehouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to automatically resume a warehouse when a SQL statement (e.g. query) is submitted to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#auto_resume Warehouse#auto_resume}
  */
  readonly autoResume?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of seconds of inactivity after which a warehouse is automatically suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#auto_suspend Warehouse#auto_suspend}
  */
  readonly autoSuspend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#comment Warehouse#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether to enable the query acceleration service for queries that rely on this warehouse for compute resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#enable_query_acceleration Warehouse#enable_query_acceleration}
  */
  readonly enableQueryAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#id Warehouse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether the warehouse is created initially in the ‘Suspended’ state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#initially_suspended Warehouse#initially_suspended}
  */
  readonly initiallySuspended?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of server clusters for the warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#max_cluster_count Warehouse#max_cluster_count}
  */
  readonly maxClusterCount?: number;
  /**
  * Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by a warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#max_concurrency_level Warehouse#max_concurrency_level}
  */
  readonly maxConcurrencyLevel?: number;
  /**
  * Specifies the minimum number of server clusters for the warehouse (only applies to multi-cluster warehouses).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#min_cluster_count Warehouse#min_cluster_count}
  */
  readonly minClusterCount?: number;
  /**
  * Identifier for the virtual warehouse; must be unique for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#name Warehouse#name}
  */
  readonly name: string;
  /**
  * Specifies the maximum scale factor for leasing compute resources for query acceleration. The scale factor is used as a multiplier based on warehouse size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#query_acceleration_max_scale_factor Warehouse#query_acceleration_max_scale_factor}
  */
  readonly queryAccelerationMaxScaleFactor?: number;
  /**
  * Specifies the name of a resource monitor that is explicitly assigned to the warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#resource_monitor Warehouse#resource_monitor}
  */
  readonly resourceMonitor?: string;
  /**
  * Specifies the policy for automatically starting and shutting down clusters in a multi-cluster warehouse running in Auto-scale mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#scaling_policy Warehouse#scaling_policy}
  */
  readonly scalingPolicy?: string;
  /**
  * Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#statement_queued_timeout_in_seconds Warehouse#statement_queued_timeout_in_seconds}
  */
  readonly statementQueuedTimeoutInSeconds?: number;
  /**
  * Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#statement_timeout_in_seconds Warehouse#statement_timeout_in_seconds}
  */
  readonly statementTimeoutInSeconds?: number;
  /**
  * Specifies whether the warehouse, after being resized, waits for all the servers to provision before executing any queued or new queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#wait_for_provisioning Warehouse#wait_for_provisioning}
  */
  readonly waitForProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Specifies the size of the virtual warehouse. Larger warehouse sizes 5X-Large and 6X-Large are currently in preview and only available on Amazon Web Services (AWS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#warehouse_size Warehouse#warehouse_size}
  */
  readonly warehouseSize?: string;
  /**
  * Specifies a STANDARD or SNOWPARK-OPTIMIZED warehouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#warehouse_type Warehouse#warehouse_type}
  */
  readonly warehouseType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse snowflake_warehouse}
*/
export class Warehouse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_warehouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Warehouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Warehouse to import
  * @param importFromId The id of the existing Warehouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Warehouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_warehouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/warehouse snowflake_warehouse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WarehouseConfig
  */
  public constructor(scope: Construct, id: string, config: WarehouseConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_warehouse',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.82.0',
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
    this._autoResume = config.autoResume;
    this._autoSuspend = config.autoSuspend;
    this._comment = config.comment;
    this._enableQueryAcceleration = config.enableQueryAcceleration;
    this._id = config.id;
    this._initiallySuspended = config.initiallySuspended;
    this._maxClusterCount = config.maxClusterCount;
    this._maxConcurrencyLevel = config.maxConcurrencyLevel;
    this._minClusterCount = config.minClusterCount;
    this._name = config.name;
    this._queryAccelerationMaxScaleFactor = config.queryAccelerationMaxScaleFactor;
    this._resourceMonitor = config.resourceMonitor;
    this._scalingPolicy = config.scalingPolicy;
    this._statementQueuedTimeoutInSeconds = config.statementQueuedTimeoutInSeconds;
    this._statementTimeoutInSeconds = config.statementTimeoutInSeconds;
    this._waitForProvisioning = config.waitForProvisioning;
    this._warehouseSize = config.warehouseSize;
    this._warehouseType = config.warehouseType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_resume - computed: true, optional: true, required: false
  private _autoResume?: boolean | cdktf.IResolvable; 
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }
  public set autoResume(value: boolean | cdktf.IResolvable) {
    this._autoResume = value;
  }
  public resetAutoResume() {
    this._autoResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResumeInput() {
    return this._autoResume;
  }

  // auto_suspend - computed: true, optional: true, required: false
  private _autoSuspend?: number; 
  public get autoSuspend() {
    return this.getNumberAttribute('auto_suspend');
  }
  public set autoSuspend(value: number) {
    this._autoSuspend = value;
  }
  public resetAutoSuspend() {
    this._autoSuspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendInput() {
    return this._autoSuspend;
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

  // enable_query_acceleration - computed: false, optional: true, required: false
  private _enableQueryAcceleration?: boolean | cdktf.IResolvable; 
  public get enableQueryAcceleration() {
    return this.getBooleanAttribute('enable_query_acceleration');
  }
  public set enableQueryAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableQueryAcceleration = value;
  }
  public resetEnableQueryAcceleration() {
    this._enableQueryAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQueryAccelerationInput() {
    return this._enableQueryAcceleration;
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

  // initially_suspended - computed: false, optional: true, required: false
  private _initiallySuspended?: boolean | cdktf.IResolvable; 
  public get initiallySuspended() {
    return this.getBooleanAttribute('initially_suspended');
  }
  public set initiallySuspended(value: boolean | cdktf.IResolvable) {
    this._initiallySuspended = value;
  }
  public resetInitiallySuspended() {
    this._initiallySuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiallySuspendedInput() {
    return this._initiallySuspended;
  }

  // max_cluster_count - computed: true, optional: true, required: false
  private _maxClusterCount?: number; 
  public get maxClusterCount() {
    return this.getNumberAttribute('max_cluster_count');
  }
  public set maxClusterCount(value: number) {
    this._maxClusterCount = value;
  }
  public resetMaxClusterCount() {
    this._maxClusterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClusterCountInput() {
    return this._maxClusterCount;
  }

  // max_concurrency_level - computed: false, optional: true, required: false
  private _maxConcurrencyLevel?: number; 
  public get maxConcurrencyLevel() {
    return this.getNumberAttribute('max_concurrency_level');
  }
  public set maxConcurrencyLevel(value: number) {
    this._maxConcurrencyLevel = value;
  }
  public resetMaxConcurrencyLevel() {
    this._maxConcurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyLevelInput() {
    return this._maxConcurrencyLevel;
  }

  // min_cluster_count - computed: true, optional: true, required: false
  private _minClusterCount?: number; 
  public get minClusterCount() {
    return this.getNumberAttribute('min_cluster_count');
  }
  public set minClusterCount(value: number) {
    this._minClusterCount = value;
  }
  public resetMinClusterCount() {
    this._minClusterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClusterCountInput() {
    return this._minClusterCount;
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

  // query_acceleration_max_scale_factor - computed: false, optional: true, required: false
  private _queryAccelerationMaxScaleFactor?: number; 
  public get queryAccelerationMaxScaleFactor() {
    return this.getNumberAttribute('query_acceleration_max_scale_factor');
  }
  public set queryAccelerationMaxScaleFactor(value: number) {
    this._queryAccelerationMaxScaleFactor = value;
  }
  public resetQueryAccelerationMaxScaleFactor() {
    this._queryAccelerationMaxScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAccelerationMaxScaleFactorInput() {
    return this._queryAccelerationMaxScaleFactor;
  }

  // resource_monitor - computed: true, optional: true, required: false
  private _resourceMonitor?: string; 
  public get resourceMonitor() {
    return this.getStringAttribute('resource_monitor');
  }
  public set resourceMonitor(value: string) {
    this._resourceMonitor = value;
  }
  public resetResourceMonitor() {
    this._resourceMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMonitorInput() {
    return this._resourceMonitor;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy?: string; 
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }
  public set scalingPolicy(value: string) {
    this._scalingPolicy = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy;
  }

  // statement_queued_timeout_in_seconds - computed: false, optional: true, required: false
  private _statementQueuedTimeoutInSeconds?: number; 
  public get statementQueuedTimeoutInSeconds() {
    return this.getNumberAttribute('statement_queued_timeout_in_seconds');
  }
  public set statementQueuedTimeoutInSeconds(value: number) {
    this._statementQueuedTimeoutInSeconds = value;
  }
  public resetStatementQueuedTimeoutInSeconds() {
    this._statementQueuedTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementQueuedTimeoutInSecondsInput() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: false, optional: true, required: false
  private _statementTimeoutInSeconds?: number; 
  public get statementTimeoutInSeconds() {
    return this.getNumberAttribute('statement_timeout_in_seconds');
  }
  public set statementTimeoutInSeconds(value: number) {
    this._statementTimeoutInSeconds = value;
  }
  public resetStatementTimeoutInSeconds() {
    this._statementTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutInSecondsInput() {
    return this._statementTimeoutInSeconds;
  }

  // wait_for_provisioning - computed: false, optional: true, required: false
  private _waitForProvisioning?: boolean | cdktf.IResolvable; 
  public get waitForProvisioning() {
    return this.getBooleanAttribute('wait_for_provisioning');
  }
  public set waitForProvisioning(value: boolean | cdktf.IResolvable) {
    this._waitForProvisioning = value;
  }
  public resetWaitForProvisioning() {
    this._waitForProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForProvisioningInput() {
    return this._waitForProvisioning;
  }

  // warehouse_size - computed: true, optional: true, required: false
  private _warehouseSize?: string; 
  public get warehouseSize() {
    return this.getStringAttribute('warehouse_size');
  }
  public set warehouseSize(value: string) {
    this._warehouseSize = value;
  }
  public resetWarehouseSize() {
    this._warehouseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseSizeInput() {
    return this._warehouseSize;
  }

  // warehouse_type - computed: false, optional: true, required: false
  private _warehouseType?: string; 
  public get warehouseType() {
    return this.getStringAttribute('warehouse_type');
  }
  public set warehouseType(value: string) {
    this._warehouseType = value;
  }
  public resetWarehouseType() {
    this._warehouseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseTypeInput() {
    return this._warehouseType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_resume: cdktf.booleanToTerraform(this._autoResume),
      auto_suspend: cdktf.numberToTerraform(this._autoSuspend),
      comment: cdktf.stringToTerraform(this._comment),
      enable_query_acceleration: cdktf.booleanToTerraform(this._enableQueryAcceleration),
      id: cdktf.stringToTerraform(this._id),
      initially_suspended: cdktf.booleanToTerraform(this._initiallySuspended),
      max_cluster_count: cdktf.numberToTerraform(this._maxClusterCount),
      max_concurrency_level: cdktf.numberToTerraform(this._maxConcurrencyLevel),
      min_cluster_count: cdktf.numberToTerraform(this._minClusterCount),
      name: cdktf.stringToTerraform(this._name),
      query_acceleration_max_scale_factor: cdktf.numberToTerraform(this._queryAccelerationMaxScaleFactor),
      resource_monitor: cdktf.stringToTerraform(this._resourceMonitor),
      scaling_policy: cdktf.stringToTerraform(this._scalingPolicy),
      statement_queued_timeout_in_seconds: cdktf.numberToTerraform(this._statementQueuedTimeoutInSeconds),
      statement_timeout_in_seconds: cdktf.numberToTerraform(this._statementTimeoutInSeconds),
      wait_for_provisioning: cdktf.booleanToTerraform(this._waitForProvisioning),
      warehouse_size: cdktf.stringToTerraform(this._warehouseSize),
      warehouse_type: cdktf.stringToTerraform(this._warehouseType),
    };
  }
}
