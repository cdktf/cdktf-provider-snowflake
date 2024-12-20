// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/account_authentication_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountAuthenticationPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Qualified name (`"db"."schema"."policy_name"`) of the authentication policy to apply to the current account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/account_authentication_policy_attachment#authentication_policy AccountAuthenticationPolicyAttachment#authentication_policy}
  */
  readonly authenticationPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/account_authentication_policy_attachment#id AccountAuthenticationPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/account_authentication_policy_attachment snowflake_account_authentication_policy_attachment}
*/
export class AccountAuthenticationPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_account_authentication_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountAuthenticationPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountAuthenticationPolicyAttachment to import
  * @param importFromId The id of the existing AccountAuthenticationPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/account_authentication_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountAuthenticationPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_account_authentication_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/account_authentication_policy_attachment snowflake_account_authentication_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountAuthenticationPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AccountAuthenticationPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_account_authentication_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.0',
        providerVersionConstraint: ' ~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationPolicy = config.authenticationPolicy;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_policy - computed: false, optional: false, required: true
  private _authenticationPolicy?: string; 
  public get authenticationPolicy() {
    return this.getStringAttribute('authentication_policy');
  }
  public set authenticationPolicy(value: string) {
    this._authenticationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyInput() {
    return this._authenticationPolicy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_policy: cdktf.stringToTerraform(this._authenticationPolicy),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_policy: {
        value: cdktf.stringToHclTerraform(this._authenticationPolicy),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
