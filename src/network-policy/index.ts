// https://www.terraform.io/docs/providers/snowflake/r/network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies one or more IPv4 addresses (CIDR notation) that are allowed access to your Snowflake account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy#allowed_ip_list NetworkPolicy#allowed_ip_list}
  */
  readonly allowedIpList: string[];
  /**
  * Specifies one or more IPv4 addresses (CIDR notation) that are denied access to your Snowflake account<br><br>**Do not** add `0.0.0.0/0` to `blocked_ip_list`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy#blocked_ip_list NetworkPolicy#blocked_ip_list}
  */
  readonly blockedIpList?: string[];
  /**
  * Specifies a comment for the network policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy#comment NetworkPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the network policy; must be unique for the account in which the network policy is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy snowflake_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_network_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/network_policy snowflake_network_policy} Resource
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
        providerVersion: '0.58.0',
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
    this._blockedIpList = config.blockedIpList;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_ip_list - computed: false, optional: false, required: true
  private _allowedIpList?: string[]; 
  public get allowedIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_list'));
  }
  public set allowedIpList(value: string[]) {
    this._allowedIpList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpListInput() {
    return this._allowedIpList;
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
      blocked_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedIpList),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
