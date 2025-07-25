/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies one or more IPv4 addresses (CIDR notation) that are allowed access to your Snowflake account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#allowed_ip_list NetworkPolicy#allowed_ip_list}
  */
  readonly allowedIpList?: string[];
  /**
  * Specifies a list of fully qualified network rules that contain the network identifiers that are allowed access to Snowflake. For more information about this resource, see [docs](./network_rule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#allowed_network_rule_list NetworkPolicy#allowed_network_rule_list}
  */
  readonly allowedNetworkRuleList?: string[];
  /**
  * Specifies one or more IPv4 addresses (CIDR notation) that are denied access to your Snowflake account. **Do not** add `0.0.0.0/0` to `blocked_ip_list`, in order to block all IP addresses except a select list, you only need to add IP addresses to `allowed_ip_list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#blocked_ip_list NetworkPolicy#blocked_ip_list}
  */
  readonly blockedIpList?: string[];
  /**
  * Specifies a list of fully qualified network rules that contain the network identifiers that are denied access to Snowflake. For more information about this resource, see [docs](./network_rule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#blocked_network_rule_list NetworkPolicy#blocked_network_rule_list}
  */
  readonly blockedNetworkRuleList?: string[];
  /**
  * Specifies a comment for the network policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#comment NetworkPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the network policy; must be unique for the account in which the network policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#timeouts NetworkPolicy#timeouts}
  */
  readonly timeouts?: NetworkPolicyTimeouts;
}
export interface NetworkPolicyDescribeOutput {
}

export function networkPolicyDescribeOutputToTerraform(struct?: NetworkPolicyDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicyDescribeOutputToHclTerraform(struct?: NetworkPolicyDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicyDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_list - computed: true, optional: false, required: false
  public get allowedIpList() {
    return this.getStringAttribute('allowed_ip_list');
  }

  // allowed_network_rule_list - computed: true, optional: false, required: false
  public get allowedNetworkRuleList() {
    return this.getStringAttribute('allowed_network_rule_list');
  }

  // blocked_ip_list - computed: true, optional: false, required: false
  public get blockedIpList() {
    return this.getStringAttribute('blocked_ip_list');
  }

  // blocked_network_rule_list - computed: true, optional: false, required: false
  public get blockedNetworkRuleList() {
    return this.getStringAttribute('blocked_network_rule_list');
  }
}

export class NetworkPolicyDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): NetworkPolicyDescribeOutputOutputReference {
    return new NetworkPolicyDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyShowOutput {
}

export function networkPolicyShowOutputToTerraform(struct?: NetworkPolicyShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicyShowOutputToHclTerraform(struct?: NetworkPolicyShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicyShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyShowOutput | undefined) {
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

  // entries_in_allowed_ip_list - computed: true, optional: false, required: false
  public get entriesInAllowedIpList() {
    return this.getNumberAttribute('entries_in_allowed_ip_list');
  }

  // entries_in_allowed_network_rules - computed: true, optional: false, required: false
  public get entriesInAllowedNetworkRules() {
    return this.getNumberAttribute('entries_in_allowed_network_rules');
  }

  // entries_in_blocked_ip_list - computed: true, optional: false, required: false
  public get entriesInBlockedIpList() {
    return this.getNumberAttribute('entries_in_blocked_ip_list');
  }

  // entries_in_blocked_network_rules - computed: true, optional: false, required: false
  public get entriesInBlockedNetworkRules() {
    return this.getNumberAttribute('entries_in_blocked_network_rules');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class NetworkPolicyShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): NetworkPolicyShowOutputOutputReference {
    return new NetworkPolicyShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#create NetworkPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#delete NetworkPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#read NetworkPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#update NetworkPolicy#update}
  */
  readonly update?: string;
}

export function networkPolicyTimeoutsToTerraform(struct?: NetworkPolicyTimeouts | cdktf.IResolvable): any {
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


export function networkPolicyTimeoutsToHclTerraform(struct?: NetworkPolicyTimeouts | cdktf.IResolvable): any {
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

export class NetworkPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy snowflake_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPolicy to import
  * @param importFromId The id of the existing NetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/network_policy snowflake_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_network_policy',
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
    this._allowedIpList = config.allowedIpList;
    this._allowedNetworkRuleList = config.allowedNetworkRuleList;
    this._blockedIpList = config.blockedIpList;
    this._blockedNetworkRuleList = config.blockedNetworkRuleList;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_list - computed: false, optional: true, required: false
  private _allowedIpList?: string[]; 
  public get allowedIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_list'));
  }
  public set allowedIpList(value: string[]) {
    this._allowedIpList = value;
  }
  public resetAllowedIpList() {
    this._allowedIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpListInput() {
    return this._allowedIpList;
  }

  // allowed_network_rule_list - computed: false, optional: true, required: false
  private _allowedNetworkRuleList?: string[]; 
  public get allowedNetworkRuleList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_network_rule_list'));
  }
  public set allowedNetworkRuleList(value: string[]) {
    this._allowedNetworkRuleList = value;
  }
  public resetAllowedNetworkRuleList() {
    this._allowedNetworkRuleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNetworkRuleListInput() {
    return this._allowedNetworkRuleList;
  }

  // blocked_ip_list - computed: false, optional: true, required: false
  private _blockedIpList?: string[]; 
  public get blockedIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_ip_list'));
  }
  public set blockedIpList(value: string[]) {
    this._blockedIpList = value;
  }
  public resetBlockedIpList() {
    this._blockedIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedIpListInput() {
    return this._blockedIpList;
  }

  // blocked_network_rule_list - computed: false, optional: true, required: false
  private _blockedNetworkRuleList?: string[]; 
  public get blockedNetworkRuleList() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_network_rule_list'));
  }
  public set blockedNetworkRuleList(value: string[]) {
    this._blockedNetworkRuleList = value;
  }
  public resetBlockedNetworkRuleList() {
    this._blockedNetworkRuleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedNetworkRuleListInput() {
    return this._blockedNetworkRuleList;
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
  private _describeOutput = new NetworkPolicyDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
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

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new NetworkPolicyShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkPolicyTimeouts) {
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
      allowed_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedIpList),
      allowed_network_rule_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNetworkRuleList),
      blocked_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedIpList),
      blocked_network_rule_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedNetworkRuleList),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: networkPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_network_rule_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNetworkRuleList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_network_rule_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedNetworkRuleList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      timeouts: {
        value: networkPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
