// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of authentication methods that are allowed during login. This parameter accepts one or more of the following values: `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}
  */
  readonly authenticationMethods?: string[];
  /**
  * A list of clients that can authenticate with Snowflake. If a client tries to connect, and the client is not one of the valid CLIENT_TYPES, then the login attempt fails. Allowed values are `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL`. The CLIENT_TYPES property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}
  */
  readonly clientTypes?: string[];
  /**
  * Specifies a comment for the authentication policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the authentication policy. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#database AuthenticationPolicy#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of authentication methods that enforce multi-factor authentication (MFA) during login. Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}
  */
  readonly mfaAuthenticationMethods?: string[];
  /**
  * Determines whether a user must enroll in multi-factor authentication. Allowed values are REQUIRED and OPTIONAL. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the CLIENT_TYPES parameter must include SNOWFLAKE_UI, because Snowsight is the only place users can enroll in multi-factor authentication (MFA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}
  */
  readonly mfaEnrollment?: string;
  /**
  * Specifies the identifier for the authentication policy. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#name AuthenticationPolicy#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the authentication policy. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}
  */
  readonly schema: string;
  /**
  * A list of security integrations the authentication policy is associated with. This parameter has no effect when SAML or OAUTH are not in the AUTHENTICATION_METHODS list. All values in the SECURITY_INTEGRATIONS list must be compatible with the values in the AUTHENTICATION_METHODS list. For example, if SECURITY_INTEGRATIONS contains a SAML security integration, and AUTHENTICATION_METHODS contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use ALL as parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}
  */
  readonly securityIntegrations?: string[];
}
export interface AuthenticationPolicyDescribeOutput {
}

export function authenticationPolicyDescribeOutputToTerraform(struct?: AuthenticationPolicyDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationPolicyDescribeOutputToHclTerraform(struct?: AuthenticationPolicyDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationPolicyDescribeOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AuthenticationPolicyDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_methods - computed: true, optional: false, required: false
  public get authenticationMethods() {
    return this.getStringAttribute('authentication_methods');
  }

  // client_types - computed: true, optional: false, required: false
  public get clientTypes() {
    return this.getStringAttribute('client_types');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // mfa_authentication_methods - computed: true, optional: false, required: false
  public get mfaAuthenticationMethods() {
    return this.getStringAttribute('mfa_authentication_methods');
  }

  // mfa_enrollment - computed: true, optional: false, required: false
  public get mfaEnrollment() {
    return this.getStringAttribute('mfa_enrollment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // security_integrations - computed: true, optional: false, required: false
  public get securityIntegrations() {
    return this.getStringAttribute('security_integrations');
  }
}

export class AuthenticationPolicyDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): AuthenticationPolicyDescribeOutputOutputReference {
    return new AuthenticationPolicyDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationPolicyShowOutput {
}

export function authenticationPolicyShowOutputToTerraform(struct?: AuthenticationPolicyShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationPolicyShowOutputToHclTerraform(struct?: AuthenticationPolicyShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationPolicyShowOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AuthenticationPolicyShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class AuthenticationPolicyShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): AuthenticationPolicyShowOutputOutputReference {
    return new AuthenticationPolicyShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy snowflake_authentication_policy}
*/
export class AuthenticationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_authentication_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPolicy to import
  * @param importFromId The id of the existing AuthenticationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_authentication_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/resources/authentication_policy snowflake_authentication_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_authentication_policy',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.0',
        providerVersionConstraint: ' ~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethods = config.authenticationMethods;
    this._clientTypes = config.clientTypes;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._mfaAuthenticationMethods = config.mfaAuthenticationMethods;
    this._mfaEnrollment = config.mfaEnrollment;
    this._name = config.name;
    this._schema = config.schema;
    this._securityIntegrations = config.securityIntegrations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_methods - computed: false, optional: true, required: false
  private _authenticationMethods?: string[]; 
  public get authenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_methods'));
  }
  public set authenticationMethods(value: string[]) {
    this._authenticationMethods = value;
  }
  public resetAuthenticationMethods() {
    this._authenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodsInput() {
    return this._authenticationMethods;
  }

  // client_types - computed: false, optional: true, required: false
  private _clientTypes?: string[]; 
  public get clientTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('client_types'));
  }
  public set clientTypes(value: string[]) {
    this._clientTypes = value;
  }
  public resetClientTypes() {
    this._clientTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypesInput() {
    return this._clientTypes;
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

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new AuthenticationPolicyDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
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

  // mfa_authentication_methods - computed: false, optional: true, required: false
  private _mfaAuthenticationMethods?: string[]; 
  public get mfaAuthenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('mfa_authentication_methods'));
  }
  public set mfaAuthenticationMethods(value: string[]) {
    this._mfaAuthenticationMethods = value;
  }
  public resetMfaAuthenticationMethods() {
    this._mfaAuthenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaAuthenticationMethodsInput() {
    return this._mfaAuthenticationMethods;
  }

  // mfa_enrollment - computed: false, optional: true, required: false
  private _mfaEnrollment?: string; 
  public get mfaEnrollment() {
    return this.getStringAttribute('mfa_enrollment');
  }
  public set mfaEnrollment(value: string) {
    this._mfaEnrollment = value;
  }
  public resetMfaEnrollment() {
    this._mfaEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnrollmentInput() {
    return this._mfaEnrollment;
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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // security_integrations - computed: false, optional: true, required: false
  private _securityIntegrations?: string[]; 
  public get securityIntegrations() {
    return cdktf.Fn.tolist(this.getListAttribute('security_integrations'));
  }
  public set securityIntegrations(value: string[]) {
    this._securityIntegrations = value;
  }
  public resetSecurityIntegrations() {
    this._securityIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIntegrationsInput() {
    return this._securityIntegrations;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new AuthenticationPolicyShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationMethods),
      client_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientTypes),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      mfa_authentication_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mfaAuthenticationMethods),
      mfa_enrollment: cdktf.stringToTerraform(this._mfaEnrollment),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      security_integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIntegrations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      mfa_authentication_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mfaAuthenticationMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mfa_enrollment: {
        value: cdktf.stringToHclTerraform(this._mfaEnrollment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIntegrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
