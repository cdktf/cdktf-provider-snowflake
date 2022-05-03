// https://www.terraform.io/docs/providers/snowflake/r/user_ownership_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserOwnershipGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user_ownership_grant#current_grants UserOwnershipGrant#current_grants}
  */
  readonly currentGrants?: string;
  /**
  * The name of the user ownership is granted on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user_ownership_grant#on_user_name UserOwnershipGrant#on_user_name}
  */
  readonly onUserName: string;
  /**
  * The name of the role to grant ownership. Please ensure that the role that terraform is using is granted access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user_ownership_grant#to_role_name UserOwnershipGrant#to_role_name}
  */
  readonly toRoleName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/user_ownership_grant snowflake_user_ownership_grant}
*/
export class UserOwnershipGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_user_ownership_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/user_ownership_grant snowflake_user_ownership_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserOwnershipGrantConfig
  */
  public constructor(scope: Construct, id: string, config: UserOwnershipGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_user_ownership_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.33.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._currentGrants = config.currentGrants;
    this._onUserName = config.onUserName;
    this._toRoleName = config.toRoleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_grants - computed: false, optional: true, required: false
  private _currentGrants?: string; 
  public get currentGrants() {
    return this.getStringAttribute('current_grants');
  }
  public set currentGrants(value: string) {
    this._currentGrants = value;
  }
  public resetCurrentGrants() {
    this._currentGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentGrantsInput() {
    return this._currentGrants;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_user_name - computed: false, optional: false, required: true
  private _onUserName?: string; 
  public get onUserName() {
    return this.getStringAttribute('on_user_name');
  }
  public set onUserName(value: string) {
    this._onUserName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onUserNameInput() {
    return this._onUserName;
  }

  // to_role_name - computed: false, optional: false, required: true
  private _toRoleName?: string; 
  public get toRoleName() {
    return this.getStringAttribute('to_role_name');
  }
  public set toRoleName(value: string) {
    this._toRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toRoleNameInput() {
    return this._toRoleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_grants: cdktf.stringToTerraform(this._currentGrants),
      on_user_name: cdktf.stringToTerraform(this._onUserName),
      to_role_name: cdktf.stringToTerraform(this._toRoleName),
    };
  }
}
