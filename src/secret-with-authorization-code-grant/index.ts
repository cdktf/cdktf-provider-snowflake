/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretWithAuthorizationCodeGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. For more information about this resource, see [docs](./api_authentication_integration_with_authorization_code_grant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#api_authentication SecretWithAuthorizationCodeGrant#api_authentication}
  */
  readonly apiAuthentication: string;
  /**
  * Specifies a comment for the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#comment SecretWithAuthorizationCodeGrant#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#database SecretWithAuthorizationCodeGrant#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#name SecretWithAuthorizationCodeGrant#name}
  */
  readonly name: string;
  /**
  * Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token SecretWithAuthorizationCodeGrant#oauth_refresh_token}
  */
  readonly oauthRefreshToken: string;
  /**
  * Specifies the timestamp as a string when the OAuth refresh token expires. Accepted string formats: YYYY-MM-DD, YYYY-MM-DD HH:MI, YYYY-MM-DD HH:MI:SS, YYYY-MM-DD HH:MI <timezone>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token_expiry_time SecretWithAuthorizationCodeGrant#oauth_refresh_token_expiry_time}
  */
  readonly oauthRefreshTokenExpiryTime: string;
  /**
  * The schema in which to create the secret. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#schema SecretWithAuthorizationCodeGrant#schema}
  */
  readonly schema: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#timeouts SecretWithAuthorizationCodeGrant#timeouts}
  */
  readonly timeouts?: SecretWithAuthorizationCodeGrantTimeouts;
}
export interface SecretWithAuthorizationCodeGrantDescribeOutput {
}

export function secretWithAuthorizationCodeGrantDescribeOutputToTerraform(struct?: SecretWithAuthorizationCodeGrantDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secretWithAuthorizationCodeGrantDescribeOutputToHclTerraform(struct?: SecretWithAuthorizationCodeGrantDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretWithAuthorizationCodeGrantDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecretWithAuthorizationCodeGrantDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretWithAuthorizationCodeGrantDescribeOutput | undefined) {
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

  // integration_name - computed: true, optional: false, required: false
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_access_token_expiry_time - computed: true, optional: false, required: false
  public get oauthAccessTokenExpiryTime() {
    return this.getStringAttribute('oauth_access_token_expiry_time');
  }

  // oauth_refresh_token_expiry_time - computed: true, optional: false, required: false
  public get oauthRefreshTokenExpiryTime() {
    return this.getStringAttribute('oauth_refresh_token_expiry_time');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // secret_type - computed: true, optional: false, required: false
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class SecretWithAuthorizationCodeGrantDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): SecretWithAuthorizationCodeGrantDescribeOutputOutputReference {
    return new SecretWithAuthorizationCodeGrantDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretWithAuthorizationCodeGrantShowOutput {
}

export function secretWithAuthorizationCodeGrantShowOutputToTerraform(struct?: SecretWithAuthorizationCodeGrantShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function secretWithAuthorizationCodeGrantShowOutputToHclTerraform(struct?: SecretWithAuthorizationCodeGrantShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecretWithAuthorizationCodeGrantShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecretWithAuthorizationCodeGrantShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretWithAuthorizationCodeGrantShowOutput | undefined) {
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

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
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

  // secret_type - computed: true, optional: false, required: false
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
}

export class SecretWithAuthorizationCodeGrantShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): SecretWithAuthorizationCodeGrantShowOutputOutputReference {
    return new SecretWithAuthorizationCodeGrantShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecretWithAuthorizationCodeGrantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#create SecretWithAuthorizationCodeGrant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#delete SecretWithAuthorizationCodeGrant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#read SecretWithAuthorizationCodeGrant#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#update SecretWithAuthorizationCodeGrant#update}
  */
  readonly update?: string;
}

export function secretWithAuthorizationCodeGrantTimeoutsToTerraform(struct?: SecretWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secretWithAuthorizationCodeGrantTimeoutsToHclTerraform(struct?: SecretWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretWithAuthorizationCodeGrantTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant snowflake_secret_with_authorization_code_grant}
*/
export class SecretWithAuthorizationCodeGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_secret_with_authorization_code_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretWithAuthorizationCodeGrant to import
  * @param importFromId The id of the existing SecretWithAuthorizationCodeGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretWithAuthorizationCodeGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_secret_with_authorization_code_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/secret_with_authorization_code_grant snowflake_secret_with_authorization_code_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretWithAuthorizationCodeGrantConfig
  */
  public constructor(scope: Construct, id: string, config: SecretWithAuthorizationCodeGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_secret_with_authorization_code_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAuthentication = config.apiAuthentication;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._oauthRefreshToken = config.oauthRefreshToken;
    this._oauthRefreshTokenExpiryTime = config.oauthRefreshTokenExpiryTime;
    this._schema = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_authentication - computed: false, optional: false, required: true
  private _apiAuthentication?: string; 
  public get apiAuthentication() {
    return this.getStringAttribute('api_authentication');
  }
  public set apiAuthentication(value: string) {
    this._apiAuthentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAuthenticationInput() {
    return this._apiAuthentication;
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
  private _describeOutput = new SecretWithAuthorizationCodeGrantDescribeOutputList(this, "describe_output", false);
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

  // oauth_refresh_token - computed: false, optional: false, required: true
  private _oauthRefreshToken?: string; 
  public get oauthRefreshToken() {
    return this.getStringAttribute('oauth_refresh_token');
  }
  public set oauthRefreshToken(value: string) {
    this._oauthRefreshToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenInput() {
    return this._oauthRefreshToken;
  }

  // oauth_refresh_token_expiry_time - computed: false, optional: false, required: true
  private _oauthRefreshTokenExpiryTime?: string; 
  public get oauthRefreshTokenExpiryTime() {
    return this.getStringAttribute('oauth_refresh_token_expiry_time');
  }
  public set oauthRefreshTokenExpiryTime(value: string) {
    this._oauthRefreshTokenExpiryTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenExpiryTimeInput() {
    return this._oauthRefreshTokenExpiryTime;
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

  // secret_type - computed: true, optional: false, required: false
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new SecretWithAuthorizationCodeGrantShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretWithAuthorizationCodeGrantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretWithAuthorizationCodeGrantTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_authentication: cdktf.stringToTerraform(this._apiAuthentication),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth_refresh_token: cdktf.stringToTerraform(this._oauthRefreshToken),
      oauth_refresh_token_expiry_time: cdktf.stringToTerraform(this._oauthRefreshTokenExpiryTime),
      schema: cdktf.stringToTerraform(this._schema),
      timeouts: secretWithAuthorizationCodeGrantTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_authentication: {
        value: cdktf.stringToHclTerraform(this._apiAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_refresh_token: {
        value: cdktf.stringToHclTerraform(this._oauthRefreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_refresh_token_expiry_time: {
        value: cdktf.stringToHclTerraform(this._oauthRefreshTokenExpiryTime),
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
      timeouts: {
        value: secretWithAuthorizationCodeGrantTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretWithAuthorizationCodeGrantTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
