/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies one or more IPv4 addresses (CIDR notation) that are allowed access to your Snowflake account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#allowed_ip_list NetworkPolicy#allowed_ip_list}
  */
  readonly allowedIpList?: string[];
  /**
  * Specifies a list of fully qualified network rules that contain the network identifiers that are allowed access to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#allowed_network_rule_list NetworkPolicy#allowed_network_rule_list}
  */
  readonly allowedNetworkRuleList?: string[];
  /**
  * Specifies one or more IPv4 addresses (CIDR notation) that are denied access to your Snowflake account<br><br>**Do not** add `0.0.0.0/0` to `blocked_ip_list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#blocked_ip_list NetworkPolicy#blocked_ip_list}
  */
  readonly blockedIpList?: string[];
  /**
  * Specifies a list of fully qualified network rules that contain the network identifiers that are denied access to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#blocked_network_rule_list NetworkPolicy#blocked_network_rule_list}
  */
  readonly blockedNetworkRuleList?: string[];
  /**
  * Specifies a comment for the network policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#comment NetworkPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the network policy; must be unique for the account in which the network policy is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy snowflake_network_policy}
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
  * @param importFromId The id of the existing NetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/network_policy snowflake_network_policy} Resource
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
        providerVersion: '0.92.0',
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
    this._allowedIpList = config.allowedIpList;
    this._allowedNetworkRuleList = config.allowedNetworkRuleList;
    this._blockedIpList = config.blockedIpList;
    this._blockedNetworkRuleList = config.blockedNetworkRuleList;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
