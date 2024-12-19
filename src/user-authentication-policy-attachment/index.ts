// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAuthenticationPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fully qualified name of the authentication policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#authentication_policy_name UserAuthenticationPolicyAttachment#authentication_policy_name}
  */
  readonly authenticationPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#id UserAuthenticationPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User name of the user you want to attach the authentication policy to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#user_name UserAuthenticationPolicyAttachment#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment snowflake_user_authentication_policy_attachment}
*/
export class UserAuthenticationPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_user_authentication_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserAuthenticationPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserAuthenticationPolicyAttachment to import
  * @param importFromId The id of the existing UserAuthenticationPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserAuthenticationPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_user_authentication_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/user_authentication_policy_attachment snowflake_user_authentication_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAuthenticationPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: UserAuthenticationPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_user_authentication_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.100.0',
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
    this._authenticationPolicyName = config.authenticationPolicyName;
    this._id = config.id;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_policy_name - computed: false, optional: false, required: true
  private _authenticationPolicyName?: string; 
  public get authenticationPolicyName() {
    return this.getStringAttribute('authentication_policy_name');
  }
  public set authenticationPolicyName(value: string) {
    this._authenticationPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyNameInput() {
    return this._authenticationPolicyName;
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

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_policy_name: cdktf.stringToTerraform(this._authenticationPolicyName),
      id: cdktf.stringToTerraform(this._id),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_policy_name: {
        value: cdktf.stringToHclTerraform(this._authenticationPolicyName),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
