// https://www.terraform.io/docs/providers/snowflake/r/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#comment User#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#default_namespace User#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * Specifies the role that is active by default for the user’s session upon login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#default_role User#default_role}
  */
  readonly defaultRole?: string;
  /**
  * Specifies the virtual warehouse that is active by default for the user’s session upon login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#default_warehouse User#default_warehouse}
  */
  readonly defaultWarehouse?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name displayed for the user in the Snowflake web interface.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address for the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#email User#email}
  */
  readonly email?: string;
  /**
  * First name of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * Last name of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * The name users use to log in. If not supplied, snowflake will use name instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#login_name User#login_name}
  */
  readonly loginName?: string;
  /**
  * Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#must_change_password User#must_change_password}
  */
  readonly mustChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#name User#name}
  */
  readonly name: string;
  /**
  * **WARNING:** this will put the password in the terraform state file. Use carefully.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#password User#password}
  */
  readonly password?: string;
  /**
  * Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#rsa_public_key User#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Specifies the user’s second RSA public key; used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#rsa_public_key_2 User#rsa_public_key_2}
  */
  readonly rsaPublicKey2?: string;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#tag User#tag}
  */
  readonly tag?: UserTag[] | cdktf.IResolvable;
}
export interface UserTag {
  /**
  * Name of the database that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#database User#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#name User#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#schema User#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/user#value User#value}
  */
  readonly value: string;
}

export function userTagToTerraform(struct?: UserTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/user snowflake_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/user snowflake_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_user',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.29.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._defaultNamespace = config.defaultNamespace;
    this._defaultRole = config.defaultRole;
    this._defaultWarehouse = config.defaultWarehouse;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._email = config.email;
    this._firstName = config.firstName;
    this._lastName = config.lastName;
    this._loginName = config.loginName;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._password = config.password;
    this._rsaPublicKey = config.rsaPublicKey;
    this._rsaPublicKey2 = config.rsaPublicKey2;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_namespace - computed: false, optional: true, required: false
  private _defaultNamespace?: string; 
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }
  public set defaultNamespace(value: string) {
    this._defaultNamespace = value;
  }
  public resetDefaultNamespace() {
    this._defaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNamespaceInput() {
    return this._defaultNamespace;
  }

  // default_role - computed: true, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // default_warehouse - computed: false, optional: true, required: false
  private _defaultWarehouse?: string; 
  public get defaultWarehouse() {
    return this.getStringAttribute('default_warehouse');
  }
  public set defaultWarehouse(value: string) {
    this._defaultWarehouse = value;
  }
  public resetDefaultWarehouse() {
    this._defaultWarehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWarehouseInput() {
    return this._defaultWarehouse;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // has_rsa_public_key - computed: true, optional: false, required: false
  public get hasRsaPublicKey() {
    return this.getBooleanAttribute('has_rsa_public_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // login_name - computed: true, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: boolean | cdktf.IResolvable; 
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }
  public set mustChangePassword(value: boolean | cdktf.IResolvable) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // rsa_public_key - computed: false, optional: true, required: false
  private _rsaPublicKey?: string; 
  public get rsaPublicKey() {
    return this.getStringAttribute('rsa_public_key');
  }
  public set rsaPublicKey(value: string) {
    this._rsaPublicKey = value;
  }
  public resetRsaPublicKey() {
    this._rsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKeyInput() {
    return this._rsaPublicKey;
  }

  // rsa_public_key_2 - computed: false, optional: true, required: false
  private _rsaPublicKey2?: string; 
  public get rsaPublicKey2() {
    return this.getStringAttribute('rsa_public_key_2');
  }
  public set rsaPublicKey2(value: string) {
    this._rsaPublicKey2 = value;
  }
  public resetRsaPublicKey2() {
    this._rsaPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKey2Input() {
    return this._rsaPublicKey2;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: UserTag[] | cdktf.IResolvable; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag');
  }
  public set tag(value: UserTag[] | cdktf.IResolvable) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      default_namespace: cdktf.stringToTerraform(this._defaultNamespace),
      default_role: cdktf.stringToTerraform(this._defaultRole),
      default_warehouse: cdktf.stringToTerraform(this._defaultWarehouse),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      last_name: cdktf.stringToTerraform(this._lastName),
      login_name: cdktf.stringToTerraform(this._loginName),
      must_change_password: cdktf.booleanToTerraform(this._mustChangePassword),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      rsa_public_key: cdktf.stringToTerraform(this._rsaPublicKey),
      rsa_public_key_2: cdktf.stringToTerraform(this._rsaPublicKey2),
      tag: cdktf.listMapper(userTagToTerraform)(this._tag),
    };
  }
}
