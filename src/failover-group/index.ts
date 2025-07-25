/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailoverGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the target account or list of target accounts to which replication and failover of specified objects from the source account is enabled. Secondary failover groups in the target accounts in this list can be promoted to serve as the primary failover group in case of failover. Expected in the form <org_name>.<target_account_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}
  */
  readonly allowedAccounts?: string[];
  /**
  * Specifies the database or list of databases for which you are enabling replication and failover from the source account to the target account. The OBJECT_TYPES list must include DATABASES to set this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}
  */
  readonly allowedDatabases?: string[];
  /**
  * Type(s) of integrations for which you are enabling replication and failover from the source account to the target account. This property requires that the OBJECT_TYPES list include INTEGRATIONS to set this parameter. The following integration types are supported: "SECURITY INTEGRATIONS", "API INTEGRATIONS", "STORAGE INTEGRATIONS", "EXTERNAL ACCESS INTEGRATIONS", "NOTIFICATION INTEGRATIONS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}
  */
  readonly allowedIntegrationTypes?: string[];
  /**
  * Specifies the share or list of shares for which you are enabling replication and failover from the source account to the target account. The OBJECT_TYPES list must include SHARES to set this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}
  */
  readonly allowedShares?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#id FailoverGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: `false`) Allows replicating objects to accounts on lower editions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}
  */
  readonly ignoreEditionCheck?: boolean | cdktf.IResolvable;
  /**
  * Specifies the identifier for the failover group. The identifier must start with an alphabetic character and cannot contain spaces or special characters unless the identifier string is enclosed in double quotes (e.g. "My object"). Identifiers enclosed in double quotes are also case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#name FailoverGroup#name}
  */
  readonly name: string;
  /**
  * Type(s) of objects for which you are enabling replication and failover from the source account to the target account. The following object types are supported: "ACCOUNT PARAMETERS", "DATABASES", "INTEGRATIONS", "NETWORK POLICIES", "RESOURCE MONITORS", "ROLES", "SHARES", "USERS", "WAREHOUSES"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#object_types FailoverGroup#object_types}
  */
  readonly objectTypes?: string[];
  /**
  * from_replica block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#from_replica FailoverGroup#from_replica}
  */
  readonly fromReplica?: FailoverGroupFromReplica;
  /**
  * replication_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}
  */
  readonly replicationSchedule?: FailoverGroupReplicationSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}
  */
  readonly timeouts?: FailoverGroupTimeouts;
}
export interface FailoverGroupFromReplica {
  /**
  * Identifier for the primary failover group in the source account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#name FailoverGroup#name}
  */
  readonly name: string;
  /**
  * Name of your Snowflake organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#organization_name FailoverGroup#organization_name}
  */
  readonly organizationName: string;
  /**
  * Source account from which you are enabling replication and failover of the specified objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#source_account_name FailoverGroup#source_account_name}
  */
  readonly sourceAccountName: string;
}

export function failoverGroupFromReplicaToTerraform(struct?: FailoverGroupFromReplicaOutputReference | FailoverGroupFromReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    source_account_name: cdktf.stringToTerraform(struct!.sourceAccountName),
  }
}


export function failoverGroupFromReplicaToHclTerraform(struct?: FailoverGroupFromReplicaOutputReference | FailoverGroupFromReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_account_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailoverGroupFromReplicaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailoverGroupFromReplica | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._sourceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAccountName = this._sourceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverGroupFromReplica | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._organizationName = undefined;
      this._sourceAccountName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._organizationName = value.organizationName;
      this._sourceAccountName = value.sourceAccountName;
    }
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

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // source_account_name - computed: false, optional: false, required: true
  private _sourceAccountName?: string; 
  public get sourceAccountName() {
    return this.getStringAttribute('source_account_name');
  }
  public set sourceAccountName(value: string) {
    this._sourceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccountNameInput() {
    return this._sourceAccountName;
  }
}
export interface FailoverGroupReplicationScheduleCron {
  /**
  * Specifies the cron expression for the replication schedule. The cron expression must be in the following format: "minute hour day-of-month month day-of-week". The following values are supported: minute: 0-59 hour: 0-23 day-of-month: 1-31 month: 1-12 day-of-week: 0-6 (0 is Sunday)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#expression FailoverGroup#expression}
  */
  readonly expression: string;
  /**
  * Specifies the time zone for secondary group refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#time_zone FailoverGroup#time_zone}
  */
  readonly timeZone: string;
}

export function failoverGroupReplicationScheduleCronToTerraform(struct?: FailoverGroupReplicationScheduleCronOutputReference | FailoverGroupReplicationScheduleCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function failoverGroupReplicationScheduleCronToHclTerraform(struct?: FailoverGroupReplicationScheduleCronOutputReference | FailoverGroupReplicationScheduleCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailoverGroupReplicationScheduleCronOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailoverGroupReplicationScheduleCron | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverGroupReplicationScheduleCron | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._timeZone = value.timeZone;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface FailoverGroupReplicationSchedule {
  /**
  * Specifies the interval in minutes for the replication schedule. The interval must be greater than 0 and less than 1440 (24 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#interval FailoverGroup#interval}
  */
  readonly interval?: number;
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#cron FailoverGroup#cron}
  */
  readonly cron?: FailoverGroupReplicationScheduleCron;
}

export function failoverGroupReplicationScheduleToTerraform(struct?: FailoverGroupReplicationScheduleOutputReference | FailoverGroupReplicationSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    cron: failoverGroupReplicationScheduleCronToTerraform(struct!.cron),
  }
}


export function failoverGroupReplicationScheduleToHclTerraform(struct?: FailoverGroupReplicationScheduleOutputReference | FailoverGroupReplicationSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cron: {
      value: failoverGroupReplicationScheduleCronToHclTerraform(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "FailoverGroupReplicationScheduleCronList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailoverGroupReplicationScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailoverGroupReplicationSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverGroupReplicationSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._cron.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._cron.internalValue = value.cron;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new FailoverGroupReplicationScheduleCronOutputReference(this, "cron");
  public get cron() {
    return this._cron;
  }
  public putCron(value: FailoverGroupReplicationScheduleCron) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }
}
export interface FailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#create FailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#delete FailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#read FailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#update FailoverGroup#update}
  */
  readonly update?: string;
}

export function failoverGroupTimeoutsToTerraform(struct?: FailoverGroupTimeouts | cdktf.IResolvable): any {
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


export function failoverGroupTimeoutsToHclTerraform(struct?: FailoverGroupTimeouts | cdktf.IResolvable): any {
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

export class FailoverGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FailoverGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FailoverGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group snowflake_failover_group}
*/
export class FailoverGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_failover_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailoverGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailoverGroup to import
  * @param importFromId The id of the existing FailoverGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailoverGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_failover_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/failover_group snowflake_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailoverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_failover_group',
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
    this._allowedAccounts = config.allowedAccounts;
    this._allowedDatabases = config.allowedDatabases;
    this._allowedIntegrationTypes = config.allowedIntegrationTypes;
    this._allowedShares = config.allowedShares;
    this._id = config.id;
    this._ignoreEditionCheck = config.ignoreEditionCheck;
    this._name = config.name;
    this._objectTypes = config.objectTypes;
    this._fromReplica.internalValue = config.fromReplica;
    this._replicationSchedule.internalValue = config.replicationSchedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_accounts - computed: false, optional: true, required: false
  private _allowedAccounts?: string[]; 
  public get allowedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_accounts'));
  }
  public set allowedAccounts(value: string[]) {
    this._allowedAccounts = value;
  }
  public resetAllowedAccounts() {
    this._allowedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountsInput() {
    return this._allowedAccounts;
  }

  // allowed_databases - computed: false, optional: true, required: false
  private _allowedDatabases?: string[]; 
  public get allowedDatabases() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_databases'));
  }
  public set allowedDatabases(value: string[]) {
    this._allowedDatabases = value;
  }
  public resetAllowedDatabases() {
    this._allowedDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDatabasesInput() {
    return this._allowedDatabases;
  }

  // allowed_integration_types - computed: false, optional: true, required: false
  private _allowedIntegrationTypes?: string[]; 
  public get allowedIntegrationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_integration_types'));
  }
  public set allowedIntegrationTypes(value: string[]) {
    this._allowedIntegrationTypes = value;
  }
  public resetAllowedIntegrationTypes() {
    this._allowedIntegrationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIntegrationTypesInput() {
    return this._allowedIntegrationTypes;
  }

  // allowed_shares - computed: false, optional: true, required: false
  private _allowedShares?: string[]; 
  public get allowedShares() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_shares'));
  }
  public set allowedShares(value: string[]) {
    this._allowedShares = value;
  }
  public resetAllowedShares() {
    this._allowedShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSharesInput() {
    return this._allowedShares;
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

  // ignore_edition_check - computed: false, optional: true, required: false
  private _ignoreEditionCheck?: boolean | cdktf.IResolvable; 
  public get ignoreEditionCheck() {
    return this.getBooleanAttribute('ignore_edition_check');
  }
  public set ignoreEditionCheck(value: boolean | cdktf.IResolvable) {
    this._ignoreEditionCheck = value;
  }
  public resetIgnoreEditionCheck() {
    this._ignoreEditionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEditionCheckInput() {
    return this._ignoreEditionCheck;
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

  // object_types - computed: false, optional: true, required: false
  private _objectTypes?: string[]; 
  public get objectTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('object_types'));
  }
  public set objectTypes(value: string[]) {
    this._objectTypes = value;
  }
  public resetObjectTypes() {
    this._objectTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypesInput() {
    return this._objectTypes;
  }

  // from_replica - computed: false, optional: true, required: false
  private _fromReplica = new FailoverGroupFromReplicaOutputReference(this, "from_replica");
  public get fromReplica() {
    return this._fromReplica;
  }
  public putFromReplica(value: FailoverGroupFromReplica) {
    this._fromReplica.internalValue = value;
  }
  public resetFromReplica() {
    this._fromReplica.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromReplicaInput() {
    return this._fromReplica.internalValue;
  }

  // replication_schedule - computed: false, optional: true, required: false
  private _replicationSchedule = new FailoverGroupReplicationScheduleOutputReference(this, "replication_schedule");
  public get replicationSchedule() {
    return this._replicationSchedule;
  }
  public putReplicationSchedule(value: FailoverGroupReplicationSchedule) {
    this._replicationSchedule.internalValue = value;
  }
  public resetReplicationSchedule() {
    this._replicationSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationScheduleInput() {
    return this._replicationSchedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FailoverGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FailoverGroupTimeouts) {
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
      allowed_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccounts),
      allowed_databases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDatabases),
      allowed_integration_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIntegrationTypes),
      allowed_shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedShares),
      id: cdktf.stringToTerraform(this._id),
      ignore_edition_check: cdktf.booleanToTerraform(this._ignoreEditionCheck),
      name: cdktf.stringToTerraform(this._name),
      object_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectTypes),
      from_replica: failoverGroupFromReplicaToTerraform(this._fromReplica.internalValue),
      replication_schedule: failoverGroupReplicationScheduleToTerraform(this._replicationSchedule.internalValue),
      timeouts: failoverGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_databases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDatabases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_integration_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIntegrationTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_shares: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedShares),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_edition_check: {
        value: cdktf.booleanToHclTerraform(this._ignoreEditionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      from_replica: {
        value: failoverGroupFromReplicaToHclTerraform(this._fromReplica.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailoverGroupFromReplicaList",
      },
      replication_schedule: {
        value: failoverGroupReplicationScheduleToHclTerraform(this._replicationSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailoverGroupReplicationScheduleList",
      },
      timeouts: {
        value: failoverGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FailoverGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
