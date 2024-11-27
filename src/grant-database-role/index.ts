/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantDatabaseRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified name of the database role which will be granted to share or parent role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role#database_role_name GrantDatabaseRole#database_role_name}
  */
  readonly databaseRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role#id GrantDatabaseRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The fully qualified name of the parent database role which will create a parent-child relationship between the roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role#parent_database_role_name GrantDatabaseRole#parent_database_role_name}
  */
  readonly parentDatabaseRoleName?: string;
  /**
  * The fully qualified name of the parent account role which will create a parent-child relationship between the roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role#parent_role_name GrantDatabaseRole#parent_role_name}
  */
  readonly parentRoleName?: string;
  /**
  * The fully qualified name of the share on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role#share_name GrantDatabaseRole#share_name}
  */
  readonly shareName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role snowflake_grant_database_role}
*/
export class GrantDatabaseRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grant_database_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantDatabaseRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantDatabaseRole to import
  * @param importFromId The id of the existing GrantDatabaseRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantDatabaseRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grant_database_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.99.0/docs/resources/grant_database_role snowflake_grant_database_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantDatabaseRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantDatabaseRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grant_database_role',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.99.0',
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
    this._databaseRoleName = config.databaseRoleName;
    this._id = config.id;
    this._parentDatabaseRoleName = config.parentDatabaseRoleName;
    this._parentRoleName = config.parentRoleName;
    this._shareName = config.shareName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_role_name - computed: false, optional: false, required: true
  private _databaseRoleName?: string; 
  public get databaseRoleName() {
    return this.getStringAttribute('database_role_name');
  }
  public set databaseRoleName(value: string) {
    this._databaseRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleNameInput() {
    return this._databaseRoleName;
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

  // parent_database_role_name - computed: false, optional: true, required: false
  private _parentDatabaseRoleName?: string; 
  public get parentDatabaseRoleName() {
    return this.getStringAttribute('parent_database_role_name');
  }
  public set parentDatabaseRoleName(value: string) {
    this._parentDatabaseRoleName = value;
  }
  public resetParentDatabaseRoleName() {
    this._parentDatabaseRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDatabaseRoleNameInput() {
    return this._parentDatabaseRoleName;
  }

  // parent_role_name - computed: false, optional: true, required: false
  private _parentRoleName?: string; 
  public get parentRoleName() {
    return this.getStringAttribute('parent_role_name');
  }
  public set parentRoleName(value: string) {
    this._parentRoleName = value;
  }
  public resetParentRoleName() {
    this._parentRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRoleNameInput() {
    return this._parentRoleName;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_role_name: cdktf.stringToTerraform(this._databaseRoleName),
      id: cdktf.stringToTerraform(this._id),
      parent_database_role_name: cdktf.stringToTerraform(this._parentDatabaseRoleName),
      parent_role_name: cdktf.stringToTerraform(this._parentRoleName),
      share_name: cdktf.stringToTerraform(this._shareName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_role_name: {
        value: cdktf.stringToHclTerraform(this._databaseRoleName),
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
      parent_database_role_name: {
        value: cdktf.stringToHclTerraform(this._parentDatabaseRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_role_name: {
        value: cdktf.stringToHclTerraform(this._parentRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_name: {
        value: cdktf.stringToHclTerraform(this._shareName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
