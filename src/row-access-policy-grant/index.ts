/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RowAccessPolicyGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database containing the row access policy on which to grant privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#database_name RowAccessPolicyGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * When this is set to true, multiple grants of the same type can be created. This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#enable_multiple_grants RowAccessPolicyGrant#enable_multiple_grants}
  */
  readonly enableMultipleGrants?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#id RowAccessPolicyGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The privilege to grant on the row access policy. To grant all privileges, use the value `ALL PRIVILEGES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#privilege RowAccessPolicyGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * The name of the role to revert ownership to on destroy. Has no effect unless `privilege` is set to `OWNERSHIP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#revert_ownership_to_role_name RowAccessPolicyGrant#revert_ownership_to_role_name}
  */
  readonly revertOwnershipToRoleName?: string;
  /**
  * Grants privilege to these roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#roles RowAccessPolicyGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the row access policy on which to grant privileges immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#row_access_policy_name RowAccessPolicyGrant#row_access_policy_name}
  */
  readonly rowAccessPolicyName: string;
  /**
  * The name of the schema containing the row access policy on which to grant privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#schema_name RowAccessPolicyGrant#schema_name}
  */
  readonly schemaName: string;
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#with_grant_option RowAccessPolicyGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant snowflake_row_access_policy_grant}
*/
export class RowAccessPolicyGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_row_access_policy_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RowAccessPolicyGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RowAccessPolicyGrant to import
  * @param importFromId The id of the existing RowAccessPolicyGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RowAccessPolicyGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_row_access_policy_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.80.0/docs/resources/row_access_policy_grant snowflake_row_access_policy_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RowAccessPolicyGrantConfig
  */
  public constructor(scope: Construct, id: string, config: RowAccessPolicyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_row_access_policy_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.80.0',
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
    this._databaseName = config.databaseName;
    this._enableMultipleGrants = config.enableMultipleGrants;
    this._id = config.id;
    this._privilege = config.privilege;
    this._revertOwnershipToRoleName = config.revertOwnershipToRoleName;
    this._roles = config.roles;
    this._rowAccessPolicyName = config.rowAccessPolicyName;
    this._schemaName = config.schemaName;
    this._withGrantOption = config.withGrantOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // row_access_policy_name - computed: false, optional: false, required: true
  private _rowAccessPolicyName?: string; 
  public get rowAccessPolicyName() {
    return this.getStringAttribute('row_access_policy_name');
  }
  public set rowAccessPolicyName(value: string) {
    this._rowAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAccessPolicyNameInput() {
    return this._rowAccessPolicyName;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
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
      database_name: cdktf.stringToTerraform(this._databaseName),
      enable_multiple_grants: cdktf.booleanToTerraform(this._enableMultipleGrants),
      id: cdktf.stringToTerraform(this._id),
      privilege: cdktf.stringToTerraform(this._privilege),
      revert_ownership_to_role_name: cdktf.stringToTerraform(this._revertOwnershipToRoleName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      row_access_policy_name: cdktf.stringToTerraform(this._rowAccessPolicyName),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}
