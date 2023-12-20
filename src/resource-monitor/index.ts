// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of credits allocated monthly to the resource monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#credit_quota ResourceMonitor#credit_quota}
  */
  readonly creditQuota?: number;
  /**
  * The date and time when the resource monitor suspends the assigned warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#end_timestamp ResourceMonitor#end_timestamp}
  */
  readonly endTimestamp?: string;
  /**
  * The frequency interval at which the credit usage resets to 0. If you set a frequency for a resource monitor, you must also set START_TIMESTAMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#frequency ResourceMonitor#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#id ResourceMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the resource monitor; must be unique for your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#name ResourceMonitor#name}
  */
  readonly name: string;
  /**
  * A list of percentage thresholds at which to send an alert to subscribed users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#notify_triggers ResourceMonitor#notify_triggers}
  */
  readonly notifyTriggers?: number[];
  /**
  * Specifies the list of users to receive email notifications on resource monitors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#notify_users ResourceMonitor#notify_users}
  */
  readonly notifyUsers?: string[];
  /**
  * Specifies whether the resource monitor should be applied globally to your Snowflake account (defaults to false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#set_for_account ResourceMonitor#set_for_account}
  */
  readonly setForAccount?: boolean | cdktf.IResolvable;
  /**
  * The date and time when the resource monitor starts monitoring credit usage for the assigned warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#start_timestamp ResourceMonitor#start_timestamp}
  */
  readonly startTimestamp?: string;
  /**
  * The number that represents the percentage threshold at which to immediately suspend all warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#suspend_immediate_trigger ResourceMonitor#suspend_immediate_trigger}
  */
  readonly suspendImmediateTrigger?: number;
  /**
  * A list of percentage thresholds at which to suspend all warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#suspend_immediate_triggers ResourceMonitor#suspend_immediate_triggers}
  */
  readonly suspendImmediateTriggers?: number[];
  /**
  * The number that represents the percentage threshold at which to suspend all warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#suspend_trigger ResourceMonitor#suspend_trigger}
  */
  readonly suspendTrigger?: number;
  /**
  * A list of percentage thresholds at which to suspend all warehouses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#suspend_triggers ResourceMonitor#suspend_triggers}
  */
  readonly suspendTriggers?: number[];
  /**
  * A list of warehouses to apply the resource monitor to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#warehouses ResourceMonitor#warehouses}
  */
  readonly warehouses?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor snowflake_resource_monitor}
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
  * @param importFromId The id of the existing ResourceMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_resource_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/resource_monitor snowflake_resource_monitor} Resource
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
        providerVersion: '0.80.0',
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
    this._setForAccount = config.setForAccount;
    this._startTimestamp = config.startTimestamp;
    this._suspendImmediateTrigger = config.suspendImmediateTrigger;
    this._suspendImmediateTriggers = config.suspendImmediateTriggers;
    this._suspendTrigger = config.suspendTrigger;
    this._suspendTriggers = config.suspendTriggers;
    this._warehouses = config.warehouses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credit_quota - computed: true, optional: true, required: false
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

  // frequency - computed: true, optional: true, required: false
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

  // set_for_account - computed: false, optional: true, required: false
  private _setForAccount?: boolean | cdktf.IResolvable; 
  public get setForAccount() {
    return this.getBooleanAttribute('set_for_account');
  }
  public set setForAccount(value: boolean | cdktf.IResolvable) {
    this._setForAccount = value;
  }
  public resetSetForAccount() {
    this._setForAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setForAccountInput() {
    return this._setForAccount;
  }

  // start_timestamp - computed: true, optional: true, required: false
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

  // suspend_immediate_triggers - computed: false, optional: true, required: false
  private _suspendImmediateTriggers?: number[]; 
  public get suspendImmediateTriggers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('suspend_immediate_triggers')));
  }
  public set suspendImmediateTriggers(value: number[]) {
    this._suspendImmediateTriggers = value;
  }
  public resetSuspendImmediateTriggers() {
    this._suspendImmediateTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendImmediateTriggersInput() {
    return this._suspendImmediateTriggers;
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

  // suspend_triggers - computed: false, optional: true, required: false
  private _suspendTriggers?: number[]; 
  public get suspendTriggers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('suspend_triggers')));
  }
  public set suspendTriggers(value: number[]) {
    this._suspendTriggers = value;
  }
  public resetSuspendTriggers() {
    this._suspendTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTriggersInput() {
    return this._suspendTriggers;
  }

  // warehouses - computed: false, optional: true, required: false
  private _warehouses?: string[]; 
  public get warehouses() {
    return cdktf.Fn.tolist(this.getListAttribute('warehouses'));
  }
  public set warehouses(value: string[]) {
    this._warehouses = value;
  }
  public resetWarehouses() {
    this._warehouses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehousesInput() {
    return this._warehouses;
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
      set_for_account: cdktf.booleanToTerraform(this._setForAccount),
      start_timestamp: cdktf.stringToTerraform(this._startTimestamp),
      suspend_immediate_trigger: cdktf.numberToTerraform(this._suspendImmediateTrigger),
      suspend_immediate_triggers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._suspendImmediateTriggers),
      suspend_trigger: cdktf.numberToTerraform(this._suspendTrigger),
      suspend_triggers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._suspendTriggers),
      warehouses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._warehouses),
    };
  }
}
