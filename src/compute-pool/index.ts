/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a compute pool when a service or job is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#auto_resume ComputePool#auto_resume}
  */
  readonly autoResume?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of seconds of inactivity after which you want Snowflake to automatically suspend the compute pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#auto_suspend_secs ComputePool#auto_suspend_secs}
  */
  readonly autoSuspendSecs?: number;
  /**
  * Specifies a comment for the compute pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#comment ComputePool#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the Snowflake Native App name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#for_application ComputePool#for_application}
  */
  readonly forApplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#id ComputePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the compute pool is created initially in the suspended state. This field is used only when creating a compute pool. Changes on this field are ignored after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#initially_suspended ComputePool#initially_suspended}
  */
  readonly initiallySuspended?: string;
  /**
  * Identifies the type of machine you want to provision for the nodes in the compute pool. Valid values are (case-insensitive): `CPU_X64_XS` | `CPU_X64_S` | `CPU_X64_M` | `CPU_X64_L` | `HIGHMEM_X64_S` | `HIGHMEM_X64_M` | `HIGHMEM_X64_L` | `HIGHMEM_X64_SL` | `GPU_NV_S` | `GPU_NV_M` | `GPU_NV_L` | `GPU_NV_XS` | `GPU_NV_SM` | `GPU_NV_2M` | `GPU_NV_3M` | `GPU_NV_SL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#instance_family ComputePool#instance_family}
  */
  readonly instanceFamily: string;
  /**
  * Specifies the maximum number of nodes for the compute pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#max_nodes ComputePool#max_nodes}
  */
  readonly maxNodes: number;
  /**
  * Specifies the minimum number of nodes for the compute pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#min_nodes ComputePool#min_nodes}
  */
  readonly minNodes: number;
  /**
  * Specifies the identifier for the compute pool; must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#name ComputePool#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#timeouts ComputePool#timeouts}
  */
  readonly timeouts?: ComputePoolTimeouts;
}
export interface ComputePoolDescribeOutput {
}

export function computePoolDescribeOutputToTerraform(struct?: ComputePoolDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computePoolDescribeOutputToHclTerraform(struct?: ComputePoolDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputePoolDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputePoolDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePoolDescribeOutput | undefined) {
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

export class ComputePoolDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ComputePoolDescribeOutputOutputReference {
    return new ComputePoolDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePoolShowOutput {
}

export function computePoolShowOutputToTerraform(struct?: ComputePoolShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computePoolShowOutputToHclTerraform(struct?: ComputePoolShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputePoolShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputePoolShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePoolShowOutput | undefined) {
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

export class ComputePoolShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ComputePoolShowOutputOutputReference {
    return new ComputePoolShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#create ComputePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#delete ComputePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#read ComputePool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#update ComputePool#update}
  */
  readonly update?: string;
}

export function computePoolTimeoutsToTerraform(struct?: ComputePoolTimeouts | cdktf.IResolvable): any {
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


export function computePoolTimeoutsToHclTerraform(struct?: ComputePoolTimeouts | cdktf.IResolvable): any {
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

export class ComputePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool snowflake_compute_pool}
*/
export class ComputePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_compute_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputePool to import
  * @param importFromId The id of the existing ComputePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_compute_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/compute_pool snowflake_compute_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_compute_pool',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
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
    this._autoResume = config.autoResume;
    this._autoSuspendSecs = config.autoSuspendSecs;
    this._comment = config.comment;
    this._forApplication = config.forApplication;
    this._id = config.id;
    this._initiallySuspended = config.initiallySuspended;
    this._instanceFamily = config.instanceFamily;
    this._maxNodes = config.maxNodes;
    this._minNodes = config.minNodes;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_resume - computed: false, optional: true, required: false
  private _autoResume?: string; 
  public get autoResume() {
    return this.getStringAttribute('auto_resume');
  }
  public set autoResume(value: string) {
    this._autoResume = value;
  }
  public resetAutoResume() {
    this._autoResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResumeInput() {
    return this._autoResume;
  }

  // auto_suspend_secs - computed: false, optional: true, required: false
  private _autoSuspendSecs?: number; 
  public get autoSuspendSecs() {
    return this.getNumberAttribute('auto_suspend_secs');
  }
  public set autoSuspendSecs(value: number) {
    this._autoSuspendSecs = value;
  }
  public resetAutoSuspendSecs() {
    this._autoSuspendSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendSecsInput() {
    return this._autoSuspendSecs;
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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new ComputePoolDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // for_application - computed: false, optional: true, required: false
  private _forApplication?: string; 
  public get forApplication() {
    return this.getStringAttribute('for_application');
  }
  public set forApplication(value: string) {
    this._forApplication = value;
  }
  public resetForApplication() {
    this._forApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forApplicationInput() {
    return this._forApplication;
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

  // initially_suspended - computed: false, optional: true, required: false
  private _initiallySuspended?: string; 
  public get initiallySuspended() {
    return this.getStringAttribute('initially_suspended');
  }
  public set initiallySuspended(value: string) {
    this._initiallySuspended = value;
  }
  public resetInitiallySuspended() {
    this._initiallySuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiallySuspendedInput() {
    return this._initiallySuspended;
  }

  // instance_family - computed: false, optional: false, required: true
  private _instanceFamily?: string; 
  public get instanceFamily() {
    return this.getStringAttribute('instance_family');
  }
  public set instanceFamily(value: string) {
    this._instanceFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamilyInput() {
    return this._instanceFamily;
  }

  // max_nodes - computed: false, optional: false, required: true
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: false, optional: false, required: true
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
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

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ComputePoolShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePoolTimeouts) {
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
      auto_resume: cdktf.stringToTerraform(this._autoResume),
      auto_suspend_secs: cdktf.numberToTerraform(this._autoSuspendSecs),
      comment: cdktf.stringToTerraform(this._comment),
      for_application: cdktf.stringToTerraform(this._forApplication),
      id: cdktf.stringToTerraform(this._id),
      initially_suspended: cdktf.stringToTerraform(this._initiallySuspended),
      instance_family: cdktf.stringToTerraform(this._instanceFamily),
      max_nodes: cdktf.numberToTerraform(this._maxNodes),
      min_nodes: cdktf.numberToTerraform(this._minNodes),
      name: cdktf.stringToTerraform(this._name),
      timeouts: computePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_resume: {
        value: cdktf.stringToHclTerraform(this._autoResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_suspend_secs: {
        value: cdktf.numberToHclTerraform(this._autoSuspendSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      for_application: {
        value: cdktf.stringToHclTerraform(this._forApplication),
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
      initially_suspended: {
        value: cdktf.stringToHclTerraform(this._initiallySuspended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_family: {
        value: cdktf.stringToHclTerraform(this._instanceFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_nodes: {
        value: cdktf.numberToHclTerraform(this._maxNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_nodes: {
        value: cdktf.numberToHclTerraform(this._minNodes),
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
      timeouts: {
        value: computePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
