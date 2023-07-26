/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment#id NetworkPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the network policy; must be unique for the account in which the network policy is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment#network_policy_name NetworkPolicyAttachment#network_policy_name}
  */
  readonly networkPolicyName: string;
  /**
  * Specifies whether the network policy should be applied globally to your Snowflake account<br><br>**Note:** The Snowflake user running `terraform apply` must be on an IP address allowed by the network policy to set that policy globally on the Snowflake account.<br><br>Additionally, a Snowflake account can only have one network policy set globally at any given time. This resource does not enforce one-policy-per-account, it is the user's responsibility to enforce this. If multiple network policy resources have `set_for_account: true`, the final policy set on the account will be non-deterministic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment#set_for_account NetworkPolicyAttachment#set_for_account}
  */
  readonly setForAccount?: boolean | cdktf.IResolvable;
  /**
  * Specifies which users the network policy should be attached to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment#users NetworkPolicyAttachment#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment snowflake_network_policy_attachment}
*/
export class NetworkPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_network_policy_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/network_policy_attachment snowflake_network_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_network_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.68.2',
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
    this._id = config.id;
    this._networkPolicyName = config.networkPolicyName;
    this._setForAccount = config.setForAccount;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_policy_name - computed: false, optional: false, required: true
  private _networkPolicyName?: string; 
  public get networkPolicyName() {
    return this.getStringAttribute('network_policy_name');
  }
  public set networkPolicyName(value: string) {
    this._networkPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyNameInput() {
    return this._networkPolicyName;
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

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_policy_name: cdktf.stringToTerraform(this._networkPolicyName),
      set_for_account: cdktf.booleanToTerraform(this._setForAccount),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }
}
