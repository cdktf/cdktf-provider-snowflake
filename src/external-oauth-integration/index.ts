/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalOauthIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the list of roles that the client can set as the primary role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#allowed_roles ExternalOauthIntegration#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#any_role_mode ExternalOauthIntegration#any_role_mode}
  */
  readonly anyRoleMode?: string;
  /**
  * Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#audience_urls ExternalOauthIntegration#audience_urls}
  */
  readonly audienceUrls?: string[];
  /**
  * Specifies the list of roles that a client cannot set as the primary role. Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#blocked_roles ExternalOauthIntegration#blocked_roles}
  */
  readonly blockedRoles?: string[];
  /**
  * Specifies a comment for the OAuth integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether to initiate operation of the integration or suspend it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the URL to define the OAuth 2.0 authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#issuer ExternalOauthIntegration#issuer}
  */
  readonly issuer: string;
  /**
  * Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. The maximum number of URLs that can be specified in the list is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#jws_keys_urls ExternalOauthIntegration#jws_keys_urls}
  */
  readonly jwsKeysUrls?: string[];
  /**
  * Specifies the name of the External Oath integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}
  */
  readonly name: string;
  /**
  * Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#rsa_public_key ExternalOauthIntegration#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. Used for key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#rsa_public_key_2 ExternalOauthIntegration#rsa_public_key_2}
  */
  readonly rsaPublicKey2?: string;
  /**
  * Specifies the scope delimiter in the authorization token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#scope_delimiter ExternalOauthIntegration#scope_delimiter}
  */
  readonly scopeDelimiter?: string;
  /**
  * Specifies the access token claim to map the access token to an account role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#scope_mapping_attribute ExternalOauthIntegration#scope_mapping_attribute}
  */
  readonly scopeMappingAttribute?: string;
  /**
  * Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#snowflake_user_mapping_attribute ExternalOauthIntegration#snowflake_user_mapping_attribute}
  */
  readonly snowflakeUserMappingAttribute: string;
  /**
  * Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#token_user_mapping_claims ExternalOauthIntegration#token_user_mapping_claims}
  */
  readonly tokenUserMappingClaims: string[];
  /**
  * Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#type ExternalOauthIntegration#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration}
*/
export class ExternalOauthIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_oauth_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalOauthIntegration to import
  * @param importFromId The id of the existing ExternalOauthIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalOauthIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_external_oauth_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalOauthIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalOauthIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_oauth_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.84.0',
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
    this._allowedRoles = config.allowedRoles;
    this._anyRoleMode = config.anyRoleMode;
    this._audienceUrls = config.audienceUrls;
    this._blockedRoles = config.blockedRoles;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._issuer = config.issuer;
    this._jwsKeysUrls = config.jwsKeysUrls;
    this._name = config.name;
    this._rsaPublicKey = config.rsaPublicKey;
    this._rsaPublicKey2 = config.rsaPublicKey2;
    this._scopeDelimiter = config.scopeDelimiter;
    this._scopeMappingAttribute = config.scopeMappingAttribute;
    this._snowflakeUserMappingAttribute = config.snowflakeUserMappingAttribute;
    this._tokenUserMappingClaims = config.tokenUserMappingClaims;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_roles'));
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // any_role_mode - computed: false, optional: true, required: false
  private _anyRoleMode?: string; 
  public get anyRoleMode() {
    return this.getStringAttribute('any_role_mode');
  }
  public set anyRoleMode(value: string) {
    this._anyRoleMode = value;
  }
  public resetAnyRoleMode() {
    this._anyRoleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyRoleModeInput() {
    return this._anyRoleMode;
  }

  // audience_urls - computed: false, optional: true, required: false
  private _audienceUrls?: string[]; 
  public get audienceUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('audience_urls'));
  }
  public set audienceUrls(value: string[]) {
    this._audienceUrls = value;
  }
  public resetAudienceUrls() {
    this._audienceUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceUrlsInput() {
    return this._audienceUrls;
  }

  // blocked_roles - computed: false, optional: true, required: false
  private _blockedRoles?: string[]; 
  public get blockedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_roles'));
  }
  public set blockedRoles(value: string[]) {
    this._blockedRoles = value;
  }
  public resetBlockedRoles() {
    this._blockedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRolesInput() {
    return this._blockedRoles;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jws_keys_urls - computed: false, optional: true, required: false
  private _jwsKeysUrls?: string[]; 
  public get jwsKeysUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('jws_keys_urls'));
  }
  public set jwsKeysUrls(value: string[]) {
    this._jwsKeysUrls = value;
  }
  public resetJwsKeysUrls() {
    this._jwsKeysUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwsKeysUrlsInput() {
    return this._jwsKeysUrls;
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

  // scope_delimiter - computed: false, optional: true, required: false
  private _scopeDelimiter?: string; 
  public get scopeDelimiter() {
    return this.getStringAttribute('scope_delimiter');
  }
  public set scopeDelimiter(value: string) {
    this._scopeDelimiter = value;
  }
  public resetScopeDelimiter() {
    this._scopeDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeDelimiterInput() {
    return this._scopeDelimiter;
  }

  // scope_mapping_attribute - computed: false, optional: true, required: false
  private _scopeMappingAttribute?: string; 
  public get scopeMappingAttribute() {
    return this.getStringAttribute('scope_mapping_attribute');
  }
  public set scopeMappingAttribute(value: string) {
    this._scopeMappingAttribute = value;
  }
  public resetScopeMappingAttribute() {
    this._scopeMappingAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeMappingAttributeInput() {
    return this._scopeMappingAttribute;
  }

  // snowflake_user_mapping_attribute - computed: false, optional: false, required: true
  private _snowflakeUserMappingAttribute?: string; 
  public get snowflakeUserMappingAttribute() {
    return this.getStringAttribute('snowflake_user_mapping_attribute');
  }
  public set snowflakeUserMappingAttribute(value: string) {
    this._snowflakeUserMappingAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeUserMappingAttributeInput() {
    return this._snowflakeUserMappingAttribute;
  }

  // token_user_mapping_claims - computed: false, optional: false, required: true
  private _tokenUserMappingClaims?: string[]; 
  public get tokenUserMappingClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('token_user_mapping_claims'));
  }
  public set tokenUserMappingClaims(value: string[]) {
    this._tokenUserMappingClaims = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUserMappingClaimsInput() {
    return this._tokenUserMappingClaims;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRoles),
      any_role_mode: cdktf.stringToTerraform(this._anyRoleMode),
      audience_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._audienceUrls),
      blocked_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedRoles),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      jws_keys_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jwsKeysUrls),
      name: cdktf.stringToTerraform(this._name),
      rsa_public_key: cdktf.stringToTerraform(this._rsaPublicKey),
      rsa_public_key_2: cdktf.stringToTerraform(this._rsaPublicKey2),
      scope_delimiter: cdktf.stringToTerraform(this._scopeDelimiter),
      scope_mapping_attribute: cdktf.stringToTerraform(this._scopeMappingAttribute),
      snowflake_user_mapping_attribute: cdktf.stringToTerraform(this._snowflakeUserMappingAttribute),
      token_user_mapping_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenUserMappingClaims),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      any_role_mode: {
        value: cdktf.stringToHclTerraform(this._anyRoleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._audienceUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      blocked_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedRoles),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jws_keys_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jwsKeysUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_public_key: {
        value: cdktf.stringToHclTerraform(this._rsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_public_key_2: {
        value: cdktf.stringToHclTerraform(this._rsaPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_delimiter: {
        value: cdktf.stringToHclTerraform(this._scopeDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_mapping_attribute: {
        value: cdktf.stringToHclTerraform(this._scopeMappingAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_user_mapping_attribute: {
        value: cdktf.stringToHclTerraform(this._snowflakeUserMappingAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_user_mapping_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenUserMappingClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
