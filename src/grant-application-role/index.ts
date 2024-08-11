// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantApplicationRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified name of the application on which application role will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role#application_name GrantApplicationRole#application_name}
  */
  readonly applicationName?: string;
  /**
  * Specifies the identifier for the application role to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role#application_role_name GrantApplicationRole#application_role_name}
  */
  readonly applicationRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role#id GrantApplicationRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The fully qualified name of the account role on which application role will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role#parent_account_role_name GrantApplicationRole#parent_account_role_name}
  */
  readonly parentAccountRoleName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role snowflake_grant_application_role}
*/
export class GrantApplicationRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grant_application_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantApplicationRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantApplicationRole to import
  * @param importFromId The id of the existing GrantApplicationRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantApplicationRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grant_application_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.1/docs/resources/grant_application_role snowflake_grant_application_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantApplicationRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantApplicationRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grant_application_role',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.94.1',
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
    this._applicationName = config.applicationName;
    this._applicationRoleName = config.applicationRoleName;
    this._id = config.id;
    this._parentAccountRoleName = config.parentAccountRoleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_name - computed: false, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // application_role_name - computed: false, optional: false, required: true
  private _applicationRoleName?: string; 
  public get applicationRoleName() {
    return this.getStringAttribute('application_role_name');
  }
  public set applicationRoleName(value: string) {
    this._applicationRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRoleNameInput() {
    return this._applicationRoleName;
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

  // parent_account_role_name - computed: false, optional: true, required: false
  private _parentAccountRoleName?: string; 
  public get parentAccountRoleName() {
    return this.getStringAttribute('parent_account_role_name');
  }
  public set parentAccountRoleName(value: string) {
    this._parentAccountRoleName = value;
  }
  public resetParentAccountRoleName() {
    this._parentAccountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAccountRoleNameInput() {
    return this._parentAccountRoleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_name: cdktf.stringToTerraform(this._applicationName),
      application_role_name: cdktf.stringToTerraform(this._applicationRoleName),
      id: cdktf.stringToTerraform(this._id),
      parent_account_role_name: cdktf.stringToTerraform(this._parentAccountRoleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_role_name: {
        value: cdktf.stringToHclTerraform(this._applicationRoleName),
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
      parent_account_role_name: {
        value: cdktf.stringToHclTerraform(this._parentAccountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
