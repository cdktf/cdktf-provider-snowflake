// https://www.terraform.io/docs/providers/snowflake/r/managed_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier, as well as login name, for the initial user in the managed account. This user serves as the account administrator for the account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account#admin_name ManagedAccount#admin_name}
  */
  readonly adminName: string;
  /**
  * Password for the initial user in the managed account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account#admin_password ManagedAccount#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Specifies a comment for the managed account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account#comment ManagedAccount#comment}
  */
  readonly comment?: string;
  /**
  * Identifier for the managed account; must be unique for your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account#name ManagedAccount#name}
  */
  readonly name: string;
  /**
  * Specifies the type of managed account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account#type ManagedAccount#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account snowflake_managed_account}
*/
export class ManagedAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_managed_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/managed_account snowflake_managed_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_managed_account',
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
    this._adminName = config.adminName;
    this._adminPassword = config.adminPassword;
    this._comment = config.comment;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_name - computed: false, optional: false, required: true
  private _adminName?: string; 
  public get adminName() {
    return this.getStringAttribute('admin_name');
  }
  public set adminName(value: string) {
    this._adminName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNameInput() {
    return this._adminName;
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locator - computed: true, optional: false, required: false
  public get locator() {
    return this.getStringAttribute('locator');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_name: cdktf.stringToTerraform(this._adminName),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
