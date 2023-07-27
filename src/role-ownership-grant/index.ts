// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleOwnershipGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant#current_grants RoleOwnershipGrant#current_grants}
  */
  readonly currentGrants?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant#id RoleOwnershipGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the role ownership is granted on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant#on_role_name RoleOwnershipGrant#on_role_name}
  */
  readonly onRoleName: string;
  /**
  * The name of the role to revert ownership to on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant#revert_ownership_to_role_name RoleOwnershipGrant#revert_ownership_to_role_name}
  */
  readonly revertOwnershipToRoleName?: string;
  /**
  * The name of the role to grant ownership. Please ensure that the role that terraform is using is granted access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant#to_role_name RoleOwnershipGrant#to_role_name}
  */
  readonly toRoleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant snowflake_role_ownership_grant}
*/
export class RoleOwnershipGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_role_ownership_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.2/docs/resources/role_ownership_grant snowflake_role_ownership_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleOwnershipGrantConfig
  */
  public constructor(scope: Construct, id: string, config: RoleOwnershipGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_role_ownership_grant',
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
    this._currentGrants = config.currentGrants;
    this._id = config.id;
    this._onRoleName = config.onRoleName;
    this._revertOwnershipToRoleName = config.revertOwnershipToRoleName;
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

  // on_role_name - computed: false, optional: false, required: true
  private _onRoleName?: string; 
  public get onRoleName() {
    return this.getStringAttribute('on_role_name');
  }
  public set onRoleName(value: string) {
    this._onRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onRoleNameInput() {
    return this._onRoleName;
  }

  // revert_ownership_to_role_name - computed: false, optional: true, required: false
  private _revertOwnershipToRoleName?: string; 
  public get revertOwnershipToRoleName() {
    return this.getStringAttribute('revert_ownership_to_role_name');
  }
  public set revertOwnershipToRoleName(value: string) {
    this._revertOwnershipToRoleName = value;
  }
  public resetRevertOwnershipToRoleName() {
    this._revertOwnershipToRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertOwnershipToRoleNameInput() {
    return this._revertOwnershipToRoleName;
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
      id: cdktf.stringToTerraform(this._id),
      on_role_name: cdktf.stringToTerraform(this._onRoleName),
      revert_ownership_to_role_name: cdktf.stringToTerraform(this._revertOwnershipToRoleName),
      to_role_name: cdktf.stringToTerraform(this._toRoleName),
    };
  }
}
