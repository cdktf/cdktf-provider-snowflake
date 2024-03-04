// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailoverGroupGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * When this is set to true, multiple grants of the same type can be created. This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#enable_multiple_grants FailoverGroupGrant#enable_multiple_grants}
  */
  readonly enableMultipleGrants?: boolean | cdktf.IResolvable;
  /**
  * The name of the failover group on which to grant privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#failover_group_name FailoverGroupGrant#failover_group_name}
  */
  readonly failoverGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#id FailoverGroupGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The privilege to grant on the failover group. To grant all privileges, use the value `ALL PRIVILEGES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#privilege FailoverGroupGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * The name of the role to revert ownership to on destroy. Has no effect unless `privilege` is set to `OWNERSHIP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#revert_ownership_to_role_name FailoverGroupGrant#revert_ownership_to_role_name}
  */
  readonly revertOwnershipToRoleName?: string;
  /**
  * Grants privilege to these roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#roles FailoverGroupGrant#roles}
  */
  readonly roles: string[];
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#with_grant_option FailoverGroupGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant snowflake_failover_group_grant}
*/
export class FailoverGroupGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_failover_group_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailoverGroupGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailoverGroupGrant to import
  * @param importFromId The id of the existing FailoverGroupGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailoverGroupGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_failover_group_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.0/docs/resources/failover_group_grant snowflake_failover_group_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailoverGroupGrantConfig
  */
  public constructor(scope: Construct, id: string, config: FailoverGroupGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_failover_group_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.87.0',
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
    this._enableMultipleGrants = config.enableMultipleGrants;
    this._failoverGroupName = config.failoverGroupName;
    this._id = config.id;
    this._privilege = config.privilege;
    this._revertOwnershipToRoleName = config.revertOwnershipToRoleName;
    this._roles = config.roles;
    this._withGrantOption = config.withGrantOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_multiple_grants - computed: false, optional: true, required: false
  private _enableMultipleGrants?: boolean | cdktf.IResolvable; 
  public get enableMultipleGrants() {
    return this.getBooleanAttribute('enable_multiple_grants');
  }
  public set enableMultipleGrants(value: boolean | cdktf.IResolvable) {
    this._enableMultipleGrants = value;
  }
  public resetEnableMultipleGrants() {
    this._enableMultipleGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleGrantsInput() {
    return this._enableMultipleGrants;
  }

  // failover_group_name - computed: false, optional: true, required: false
  private _failoverGroupName?: string; 
  public get failoverGroupName() {
    return this.getStringAttribute('failover_group_name');
  }
  public set failoverGroupName(value: string) {
    this._failoverGroupName = value;
  }
  public resetFailoverGroupName() {
    this._failoverGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverGroupNameInput() {
    return this._failoverGroupName;
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

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // with_grant_option - computed: false, optional: true, required: false
  private _withGrantOption?: boolean | cdktf.IResolvable; 
  public get withGrantOption() {
    return this.getBooleanAttribute('with_grant_option');
  }
  public set withGrantOption(value: boolean | cdktf.IResolvable) {
    this._withGrantOption = value;
  }
  public resetWithGrantOption() {
    this._withGrantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withGrantOptionInput() {
    return this._withGrantOption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_multiple_grants: cdktf.booleanToTerraform(this._enableMultipleGrants),
      failover_group_name: cdktf.stringToTerraform(this._failoverGroupName),
      id: cdktf.stringToTerraform(this._id),
      privilege: cdktf.stringToTerraform(this._privilege),
      revert_ownership_to_role_name: cdktf.stringToTerraform(this._revertOwnershipToRoleName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_multiple_grants: {
        value: cdktf.booleanToHclTerraform(this._enableMultipleGrants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_group_name: {
        value: cdktf.stringToHclTerraform(this._failoverGroupName),
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
      privilege: {
        value: cdktf.stringToHclTerraform(this._privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revert_ownership_to_role_name: {
        value: cdktf.stringToHclTerraform(this._revertOwnershipToRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      with_grant_option: {
        value: cdktf.booleanToHclTerraform(this._withGrantOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
