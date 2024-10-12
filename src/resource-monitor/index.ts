/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of credits allocated to the resource monitor per frequency interval. When total usage for all warehouses assigned to the monitor reaches this number for the current frequency interval, the resource monitor is considered to be at 100% of quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}
  */
  readonly creditQuota?: number;
  /**
  * The date and time when the resource monitor suspends the assigned warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}
  */
  readonly endTimestamp?: string;
  /**
  * The frequency interval at which the credit usage resets to 0. Valid values are (case-insensitive): `MONTHLY` | `DAILY` | `WEEKLY` | `YEARLY` | `NEVER`. If you set a `frequency` for a resource monitor, you must also set `start_timestamp`. If you specify `NEVER` for the frequency, the credit usage for the warehouse does not reset. After removing this field from the config, the previously set value will be preserved on the Snowflake side, not the default value. That's due to Snowflake limitation and the lack of unset functionality for this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#id ResourceMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the resource monitor; must be unique for your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#name ResourceMonitor#name}
  */
  readonly name: string;
  /**
  * Specifies a list of percentages of the credit quota. After reaching any of the values the users passed in the notify_users field will be notified (to receive the notification they should have notifications enabled). Values over 100 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}
  */
  readonly notifyTriggers?: number[];
  /**
  * Specifies the list of users (their identifiers) to receive email notifications on resource monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}
  */
  readonly notifyUsers?: string[];
  /**
  * The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses. If you set a `start_timestamp` for a resource monitor, you must also set `frequency`.  After removing this field from the config, the previously set value will be preserved on the Snowflake side, not the default value. That's due to Snowflake limitation and the lack of unset functionality for this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}
  */
  readonly startTimestamp?: string;
  /**
  * Represents a numeric value specified as a percentage of the credit quota. Values over 100 are supported. After reaching this value, all assigned warehouses immediately cancel any currently running queries or statements. In addition, this action sends a notification to all users who have enabled notifications for themselves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}
  */
  readonly suspendImmediateTrigger?: number;
  /**
  * Represents a numeric value specified as a percentage of the credit quota. Values over 100 are supported. After reaching this value, all assigned warehouses while allowing currently running queries to complete will be suspended. No new queries can be executed by the warehouses until the credit quota for the resource monitor is increased. In addition, this action sends a notification to all users who have enabled notifications for themselves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}
  */
  readonly suspendTrigger?: number;
}
export interface ResourceMonitorShowOutput {
}

export function resourceMonitorShowOutputToTerraform(struct?: ResourceMonitorShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceMonitorShowOutputToHclTerraform(struct?: ResourceMonitorShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceMonitorShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceMonitorShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceMonitorShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // credit_quota - computed: true, optional: false, required: false
  public get creditQuota() {
    return this.getNumberAttribute('credit_quota');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // remaining_credits - computed: true, optional: false, required: false
  public get remainingCredits() {
    return this.getNumberAttribute('remaining_credits');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // suspend_at - computed: true, optional: false, required: false
  public get suspendAt() {
    return this.getNumberAttribute('suspend_at');
  }

  // suspend_immediate_at - computed: true, optional: false, required: false
  public get suspendImmediateAt() {
    return this.getNumberAttribute('suspend_immediate_at');
  }

  // used_credits - computed: true, optional: false, required: false
  public get usedCredits() {
    return this.getNumberAttribute('used_credits');
  }
}

export class ResourceMonitorShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ResourceMonitorShowOutputOutputReference {
    return new ResourceMonitorShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor snowflake_resource_monitor}
*/
export class ResourceMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_resource_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceMonitor to import
  * @param importFromId The id of the existing ResourceMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_resource_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/resource_monitor snowflake_resource_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_resource_monitor',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.97.0',
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
    this._creditQuota = config.creditQuota;
    this._endTimestamp = config.endTimestamp;
    this._frequency = config.frequency;
    this._id = config.id;
    this._name = config.name;
    this._notifyTriggers = config.notifyTriggers;
    this._notifyUsers = config.notifyUsers;
    this._startTimestamp = config.startTimestamp;
    this._suspendImmediateTrigger = config.suspendImmediateTrigger;
    this._suspendTrigger = config.suspendTrigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credit_quota - computed: false, optional: true, required: false
  private _creditQuota?: number; 
  public get creditQuota() {
    return this.getNumberAttribute('credit_quota');
  }
  public set creditQuota(value: number) {
    this._creditQuota = value;
  }
  public resetCreditQuota() {
    this._creditQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditQuotaInput() {
    return this._creditQuota;
  }

  // end_timestamp - computed: false, optional: true, required: false
  private _endTimestamp?: string; 
  public get endTimestamp() {
    return this.getStringAttribute('end_timestamp');
  }
  public set endTimestamp(value: string) {
    this._endTimestamp = value;
  }
  public resetEndTimestamp() {
    this._endTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimestampInput() {
    return this._endTimestamp;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // notify_triggers - computed: false, optional: true, required: false
  private _notifyTriggers?: number[]; 
  public get notifyTriggers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('notify_triggers')));
  }
  public set notifyTriggers(value: number[]) {
    this._notifyTriggers = value;
  }
  public resetNotifyTriggers() {
    this._notifyTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTriggersInput() {
    return this._notifyTriggers;
  }

  // notify_users - computed: false, optional: true, required: false
  private _notifyUsers?: string[]; 
  public get notifyUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_users'));
  }
  public set notifyUsers(value: string[]) {
    this._notifyUsers = value;
  }
  public resetNotifyUsers() {
    this._notifyUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUsersInput() {
    return this._notifyUsers;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ResourceMonitorShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // start_timestamp - computed: false, optional: true, required: false
  private _startTimestamp?: string; 
  public get startTimestamp() {
    return this.getStringAttribute('start_timestamp');
  }
  public set startTimestamp(value: string) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }

  // suspend_immediate_trigger - computed: false, optional: true, required: false
  private _suspendImmediateTrigger?: number; 
  public get suspendImmediateTrigger() {
    return this.getNumberAttribute('suspend_immediate_trigger');
  }
  public set suspendImmediateTrigger(value: number) {
    this._suspendImmediateTrigger = value;
  }
  public resetSuspendImmediateTrigger() {
    this._suspendImmediateTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendImmediateTriggerInput() {
    return this._suspendImmediateTrigger;
  }

  // suspend_trigger - computed: false, optional: true, required: false
  private _suspendTrigger?: number; 
  public get suspendTrigger() {
    return this.getNumberAttribute('suspend_trigger');
  }
  public set suspendTrigger(value: number) {
    this._suspendTrigger = value;
  }
  public resetSuspendTrigger() {
    this._suspendTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTriggerInput() {
    return this._suspendTrigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credit_quota: cdktf.numberToTerraform(this._creditQuota),
      end_timestamp: cdktf.stringToTerraform(this._endTimestamp),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_triggers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._notifyTriggers),
      notify_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyUsers),
      start_timestamp: cdktf.stringToTerraform(this._startTimestamp),
      suspend_immediate_trigger: cdktf.numberToTerraform(this._suspendImmediateTrigger),
      suspend_trigger: cdktf.numberToTerraform(this._suspendTrigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credit_quota: {
        value: cdktf.numberToHclTerraform(this._creditQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_timestamp: {
        value: cdktf.stringToHclTerraform(this._endTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      notify_triggers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._notifyTriggers),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      notify_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifyUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      start_timestamp: {
        value: cdktf.stringToHclTerraform(this._startTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspend_immediate_trigger: {
        value: cdktf.numberToHclTerraform(this._suspendImmediateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suspend_trigger: {
        value: cdktf.numberToHclTerraform(this._suspendTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
