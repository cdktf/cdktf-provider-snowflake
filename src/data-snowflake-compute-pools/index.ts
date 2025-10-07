/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeComputePoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#id DataSnowflakeComputePools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#like DataSnowflakeComputePools#like}
  */
  readonly like?: string;
  /**
  * Filters the output with **case-sensitive** characters indicating the beginning of the object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#starts_with DataSnowflakeComputePools#starts_with}
  */
  readonly startsWith?: string;
  /**
  * (Default: `true`) Runs DESC COMPUTE POOL for each compute pool returned by SHOW COMPUTE POOLS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#with_describe DataSnowflakeComputePools#with_describe}
  */
  readonly withDescribe?: boolean | cdktf.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#limit DataSnowflakeComputePools#limit}
  */
  readonly limit?: DataSnowflakeComputePoolsLimit;
}
export interface DataSnowflakeComputePoolsComputePoolsDescribeOutput {
}

export function dataSnowflakeComputePoolsComputePoolsDescribeOutputToTerraform(struct?: DataSnowflakeComputePoolsComputePoolsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeComputePoolsComputePoolsDescribeOutputToHclTerraform(struct?: DataSnowflakeComputePoolsComputePoolsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeComputePoolsComputePoolsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeComputePoolsComputePoolsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_nodes - computed: true, optional: false, required: false
  public get activeNodes() {
    return this.getNumberAttribute('active_nodes');
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // auto_resume - computed: true, optional: false, required: false
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }

  // auto_suspend_secs - computed: true, optional: false, required: false
  public get autoSuspendSecs() {
    return this.getNumberAttribute('auto_suspend_secs');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // idle_nodes - computed: true, optional: false, required: false
  public get idleNodes() {
    return this.getNumberAttribute('idle_nodes');
  }

  // instance_family - computed: true, optional: false, required: false
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }

  // is_exclusive - computed: true, optional: false, required: false
  public get isExclusive() {
    return this.getBooleanAttribute('is_exclusive');
  }

  // max_nodes - computed: true, optional: false, required: false
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }

  // min_nodes - computed: true, optional: false, required: false
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_jobs - computed: true, optional: false, required: false
  public get numJobs() {
    return this.getNumberAttribute('num_jobs');
  }

  // num_services - computed: true, optional: false, required: false
  public get numServices() {
    return this.getNumberAttribute('num_services');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // resumed_on - computed: true, optional: false, required: false
  public get resumedOn() {
    return this.getStringAttribute('resumed_on');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // target_nodes - computed: true, optional: false, required: false
  public get targetNodes() {
    return this.getNumberAttribute('target_nodes');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class DataSnowflakeComputePoolsComputePoolsDescribeOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference {
    return new DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeComputePoolsComputePoolsShowOutput {
}

export function dataSnowflakeComputePoolsComputePoolsShowOutputToTerraform(struct?: DataSnowflakeComputePoolsComputePoolsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeComputePoolsComputePoolsShowOutputToHclTerraform(struct?: DataSnowflakeComputePoolsComputePoolsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeComputePoolsComputePoolsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeComputePoolsComputePoolsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_nodes - computed: true, optional: false, required: false
  public get activeNodes() {
    return this.getNumberAttribute('active_nodes');
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // auto_resume - computed: true, optional: false, required: false
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }

  // auto_suspend_secs - computed: true, optional: false, required: false
  public get autoSuspendSecs() {
    return this.getNumberAttribute('auto_suspend_secs');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // idle_nodes - computed: true, optional: false, required: false
  public get idleNodes() {
    return this.getNumberAttribute('idle_nodes');
  }

  // instance_family - computed: true, optional: false, required: false
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }

  // is_exclusive - computed: true, optional: false, required: false
  public get isExclusive() {
    return this.getBooleanAttribute('is_exclusive');
  }

  // max_nodes - computed: true, optional: false, required: false
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }

  // min_nodes - computed: true, optional: false, required: false
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // num_jobs - computed: true, optional: false, required: false
  public get numJobs() {
    return this.getNumberAttribute('num_jobs');
  }

  // num_services - computed: true, optional: false, required: false
  public get numServices() {
    return this.getNumberAttribute('num_services');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // resumed_on - computed: true, optional: false, required: false
  public get resumedOn() {
    return this.getStringAttribute('resumed_on');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_nodes - computed: true, optional: false, required: false
  public get targetNodes() {
    return this.getNumberAttribute('target_nodes');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class DataSnowflakeComputePoolsComputePoolsShowOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference {
    return new DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeComputePoolsComputePools {
}

export function dataSnowflakeComputePoolsComputePoolsToTerraform(struct?: DataSnowflakeComputePoolsComputePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeComputePoolsComputePoolsToHclTerraform(struct?: DataSnowflakeComputePoolsComputePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeComputePoolsComputePoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeComputePoolsComputePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeComputePoolsComputePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeComputePoolsComputePoolsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeComputePoolsComputePoolsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeComputePoolsComputePoolsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeComputePoolsComputePoolsOutputReference {
    return new DataSnowflakeComputePoolsComputePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeComputePoolsLimit {
  /**
  * Specifies a **case-sensitive** pattern that is used to match object name. After the first match, the limit on the number of rows will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#from DataSnowflakeComputePools#from}
  */
  readonly from?: string;
  /**
  * The maximum number of rows to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#rows DataSnowflakeComputePools#rows}
  */
  readonly rows: number;
}

export function dataSnowflakeComputePoolsLimitToTerraform(struct?: DataSnowflakeComputePoolsLimitOutputReference | DataSnowflakeComputePoolsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    rows: cdktf.numberToTerraform(struct!.rows),
  }
}


export function dataSnowflakeComputePoolsLimitToHclTerraform(struct?: DataSnowflakeComputePoolsLimitOutputReference | DataSnowflakeComputePoolsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeComputePoolsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeComputePoolsLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeComputePoolsLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._rows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._rows = value.rows;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools snowflake_compute_pools}
*/
export class DataSnowflakeComputePools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_compute_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeComputePools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeComputePools to import
  * @param importFromId The id of the existing DataSnowflakeComputePools that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeComputePools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_compute_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/compute_pools snowflake_compute_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeComputePoolsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeComputePoolsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_compute_pools',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.8.0',
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
    this._id = config.id;
    this._like = config.like;
    this._startsWith = config.startsWith;
    this._withDescribe = config.withDescribe;
    this._limit.internalValue = config.limit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_pools - computed: true, optional: false, required: false
  private _computePools = new DataSnowflakeComputePoolsComputePoolsList(this, "compute_pools", false);
  public get computePools() {
    return this._computePools;
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

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktf.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktf.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new DataSnowflakeComputePoolsLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DataSnowflakeComputePoolsLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      like: cdktf.stringToTerraform(this._like),
      starts_with: cdktf.stringToTerraform(this._startsWith),
      with_describe: cdktf.booleanToTerraform(this._withDescribe),
      limit: dataSnowflakeComputePoolsLimitToTerraform(this._limit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like: {
        value: cdktf.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starts_with: {
        value: cdktf.stringToHclTerraform(this._startsWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktf.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: dataSnowflakeComputePoolsLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeComputePoolsLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
