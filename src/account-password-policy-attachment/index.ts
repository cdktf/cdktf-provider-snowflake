/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/account_password_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountPasswordPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/account_password_policy_attachment#id AccountPasswordPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Qualified name (`"db"."schema"."policy_name"`) of the password policy to apply to the current account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/account_password_policy_attachment#password_policy AccountPasswordPolicyAttachment#password_policy}
  */
  readonly passwordPolicy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/account_password_policy_attachment snowflake_account_password_policy_attachment}
*/
export class AccountPasswordPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_account_password_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountPasswordPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountPasswordPolicyAttachment to import
  * @param importFromId The id of the existing AccountPasswordPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/account_password_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountPasswordPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_account_password_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.95.0/docs/resources/account_password_policy_attachment snowflake_account_password_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountPasswordPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AccountPasswordPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_account_password_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.95.0',
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
    this._passwordPolicy = config.passwordPolicy;
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

  // password_policy - computed: false, optional: false, required: true
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password_policy: cdktf.stringToTerraform(this._passwordPolicy),
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
      password_policy: {
        value: cdktf.stringToHclTerraform(this._passwordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
