// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#comment User#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#default_namespace User#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * Specifies the role that is active by default for the user’s session upon login.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#default_role User#default_role}
  */
  readonly defaultRole?: string;
  /**
  * Specifies the set of secondary roles that are active for the user’s session upon login. Currently only ["ALL"] value is supported - more information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#default_secondary_roles User#default_secondary_roles}
  */
  readonly defaultSecondaryRoles?: string[];
  /**
  * Specifies the virtual warehouse that is active by default for the user’s session upon login.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#default_warehouse User#default_warehouse}
  */
  readonly defaultWarehouse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name displayed for the user in the Snowflake web interface.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address for the user.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * First name of the user.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Last name of the user.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * The name users use to log in. If not supplied, snowflake will use name instead.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#login_name User#login_name}
  */
  readonly loginName?: string;
  /**
  * Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#must_change_password User#must_change_password}
  */
  readonly mustChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * **WARNING:** this will put the password in the terraform state file. Use carefully.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#rsa_public_key User#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Specifies the user’s second RSA public key; used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}
  */
  readonly rsaPublicKey2?: string;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#tag User#tag}
  */
  readonly tag?: UserTag[] | cdktf.IResolvable;
}
export interface UserTag {
  /**
  * Name of the database that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#database User#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#schema User#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user#value User#value}
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

export class UserTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._name = value.name;
      this._schema = value.schema;
      this._value = value.value;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class UserTagList extends cdktf.ComplexList {
  public internalValue? : UserTag[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserTagOutputReference {
    return new UserTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user snowflake_user}
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
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/user snowflake_user} Resource
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
        providerVersion: '0.64.0',
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
    this._comment = config.comment;
    this._defaultNamespace = config.defaultNamespace;
    this._defaultRole = config.defaultRole;
    this._defaultSecondaryRoles = config.defaultSecondaryRoles;
    this._defaultWarehouse = config.defaultWarehouse;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._email = config.email;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._loginName = config.loginName;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._password = config.password;
    this._rsaPublicKey = config.rsaPublicKey;
    this._rsaPublicKey2 = config.rsaPublicKey2;
    this._tag.internalValue = config.tag;
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

  // default_secondary_roles - computed: false, optional: true, required: false
  private _defaultSecondaryRoles?: string[]; 
  public get defaultSecondaryRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('default_secondary_roles'));
  }
  public set defaultSecondaryRoles(value: string[]) {
    this._defaultSecondaryRoles = value;
  }
  public resetDefaultSecondaryRoles() {
    this._defaultSecondaryRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecondaryRolesInput() {
    return this._defaultSecondaryRoles;
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
  private _tag = new UserTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: UserTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      default_namespace: cdktf.stringToTerraform(this._defaultNamespace),
      default_role: cdktf.stringToTerraform(this._defaultRole),
      default_secondary_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultSecondaryRoles),
      default_warehouse: cdktf.stringToTerraform(this._defaultWarehouse),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      login_name: cdktf.stringToTerraform(this._loginName),
      must_change_password: cdktf.booleanToTerraform(this._mustChangePassword),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      rsa_public_key: cdktf.stringToTerraform(this._rsaPublicKey),
      rsa_public_key_2: cdktf.stringToTerraform(this._rsaPublicKey2),
      tag: cdktf.listMapper(userTagToTerraform, true)(this._tag.internalValue),
    };
  }
}
