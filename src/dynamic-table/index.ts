/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the dynamic table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#comment DynamicTable#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the dynamic table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#database DynamicTable#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#id DynamicTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: `ON_CREATE`) Initialize trigger for the dynamic table. Can only be set on creation. Available options are ON_CREATE and ON_SCHEDULE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#initialize DynamicTable#initialize}
  */
  readonly initialize?: string;
  /**
  * Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#name DynamicTable#name}
  */
  readonly name: string;
  /**
  * (Default: `false`) Specifies whether to replace the dynamic table if it already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#or_replace DynamicTable#or_replace}
  */
  readonly orReplace?: boolean | cdktf.IResolvable;
  /**
  * Specifies the query to use to populate the dynamic table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#query DynamicTable#query}
  */
  readonly query: string;
  /**
  * (Default: `AUTO`) INCREMENTAL to use incremental refreshes, FULL to recompute the whole table on every refresh, or AUTO to let Snowflake decide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#refresh_mode DynamicTable#refresh_mode}
  */
  readonly refreshMode?: string;
  /**
  * The schema in which to create the dynamic table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#schema DynamicTable#schema}
  */
  readonly schema: string;
  /**
  * The warehouse in which to create the dynamic table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#warehouse DynamicTable#warehouse}
  */
  readonly warehouse: string;
  /**
  * target_lag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#target_lag DynamicTable#target_lag}
  */
  readonly targetLag: DynamicTableTargetLag;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#timeouts DynamicTable#timeouts}
  */
  readonly timeouts?: DynamicTableTimeouts;
}
export interface DynamicTableTargetLag {
  /**
  * Specifies whether the target lag time is downstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#downstream DynamicTable#downstream}
  */
  readonly downstream?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum target lag time for the dynamic table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#maximum_duration DynamicTable#maximum_duration}
  */
  readonly maximumDuration?: string;
}

export function dynamicTableTargetLagToTerraform(struct?: DynamicTableTargetLagOutputReference | DynamicTableTargetLag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downstream: cdktf.booleanToTerraform(struct!.downstream),
    maximum_duration: cdktf.stringToTerraform(struct!.maximumDuration),
  }
}


export function dynamicTableTargetLagToHclTerraform(struct?: DynamicTableTargetLagOutputReference | DynamicTableTargetLag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downstream: {
      value: cdktf.booleanToHclTerraform(struct!.downstream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_duration: {
      value: cdktf.stringToHclTerraform(struct!.maximumDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicTableTargetLagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DynamicTableTargetLag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstream = this._downstream;
    }
    if (this._maximumDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumDuration = this._maximumDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicTableTargetLag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downstream = undefined;
      this._maximumDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downstream = value.downstream;
      this._maximumDuration = value.maximumDuration;
    }
  }

  // downstream - computed: false, optional: true, required: false
  private _downstream?: boolean | cdktf.IResolvable; 
  public get downstream() {
    return this.getBooleanAttribute('downstream');
  }
  public set downstream(value: boolean | cdktf.IResolvable) {
    this._downstream = value;
  }
  public resetDownstream() {
    this._downstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamInput() {
    return this._downstream;
  }

  // maximum_duration - computed: false, optional: true, required: false
  private _maximumDuration?: string; 
  public get maximumDuration() {
    return this.getStringAttribute('maximum_duration');
  }
  public set maximumDuration(value: string) {
    this._maximumDuration = value;
  }
  public resetMaximumDuration() {
    this._maximumDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDurationInput() {
    return this._maximumDuration;
  }
}
export interface DynamicTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#create DynamicTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#delete DynamicTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#read DynamicTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#update DynamicTable#update}
  */
  readonly update?: string;
}

export function dynamicTableTimeoutsToTerraform(struct?: DynamicTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dynamicTableTimeoutsToHclTerraform(struct?: DynamicTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table snowflake_dynamic_table}
*/
export class DynamicTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_dynamic_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicTable to import
  * @param importFromId The id of the existing DynamicTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_dynamic_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/dynamic_table snowflake_dynamic_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicTableConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicTableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_dynamic_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.5.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._initialize = config.initialize;
    this._name = config.name;
    this._orReplace = config.orReplace;
    this._query = config.query;
    this._refreshMode = config.refreshMode;
    this._schema = config.schema;
    this._warehouse = config.warehouse;
    this._targetLag.internalValue = config.targetLag;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_clustering - computed: true, optional: false, required: false
  public get automaticClustering() {
    return this.getBooleanAttribute('automatic_clustering');
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }

  // cluster_by - computed: true, optional: false, required: false
  public get clusterBy() {
    return this.getStringAttribute('cluster_by');
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // data_timestamp - computed: true, optional: false, required: false
  public get dataTimestamp() {
    return this.getStringAttribute('data_timestamp');
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

  // initialize - computed: false, optional: true, required: false
  private _initialize?: string; 
  public get initialize() {
    return this.getStringAttribute('initialize');
  }
  public set initialize(value: string) {
    this._initialize = value;
  }
  public resetInitialize() {
    this._initialize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeInput() {
    return this._initialize;
  }

  // is_clone - computed: true, optional: false, required: false
  public get isClone() {
    return this.getBooleanAttribute('is_clone');
  }

  // is_replica - computed: true, optional: false, required: false
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
  }

  // last_suspended_on - computed: true, optional: false, required: false
  public get lastSuspendedOn() {
    return this.getStringAttribute('last_suspended_on');
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

  // or_replace - computed: false, optional: true, required: false
  private _orReplace?: boolean | cdktf.IResolvable; 
  public get orReplace() {
    return this.getBooleanAttribute('or_replace');
  }
  public set orReplace(value: boolean | cdktf.IResolvable) {
    this._orReplace = value;
  }
  public resetOrReplace() {
    this._orReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orReplaceInput() {
    return this._orReplace;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // refresh_mode - computed: false, optional: true, required: false
  private _refreshMode?: string; 
  public get refreshMode() {
    return this.getStringAttribute('refresh_mode');
  }
  public set refreshMode(value: string) {
    this._refreshMode = value;
  }
  public resetRefreshMode() {
    this._refreshMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshModeInput() {
    return this._refreshMode;
  }

  // refresh_mode_reason - computed: true, optional: false, required: false
  public get refreshModeReason() {
    return this.getStringAttribute('refresh_mode_reason');
  }

  // rows - computed: true, optional: false, required: false
  public get rows() {
    return this.getNumberAttribute('rows');
  }

  // scheduling_state - computed: true, optional: false, required: false
  public get schedulingState() {
    return this.getStringAttribute('scheduling_state');
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

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // target_lag - computed: false, optional: false, required: true
  private _targetLag = new DynamicTableTargetLagOutputReference(this, "target_lag");
  public get targetLag() {
    return this._targetLag;
  }
  public putTargetLag(value: DynamicTableTargetLag) {
    this._targetLag.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLagInput() {
    return this._targetLag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DynamicTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DynamicTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      initialize: cdktf.stringToTerraform(this._initialize),
      name: cdktf.stringToTerraform(this._name),
      or_replace: cdktf.booleanToTerraform(this._orReplace),
      query: cdktf.stringToTerraform(this._query),
      refresh_mode: cdktf.stringToTerraform(this._refreshMode),
      schema: cdktf.stringToTerraform(this._schema),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      target_lag: dynamicTableTargetLagToTerraform(this._targetLag.internalValue),
      timeouts: dynamicTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initialize: {
        value: cdktf.stringToHclTerraform(this._initialize),
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
      or_replace: {
        value: cdktf.booleanToHclTerraform(this._orReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_mode: {
        value: cdktf.stringToHclTerraform(this._refreshMode),
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
      warehouse: {
        value: cdktf.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_lag: {
        value: dynamicTableTargetLagToHclTerraform(this._targetLag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamicTableTargetLagList",
      },
      timeouts: {
        value: dynamicTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
