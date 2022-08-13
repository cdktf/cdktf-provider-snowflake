// https://www.terraform.io/docs/providers/snowflake/r/oauth_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of roles that a user cannot explicitly consent to using after authenticating. Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#blocked_roles_list OauthIntegration#blocked_roles_list}
  */
  readonly blockedRolesList?: string[];
  /**
  * Specifies a comment for the OAuth integration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#comment OauthIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this OAuth integration is enabled or disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#enabled OauthIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#id OauthIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the OAuth integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#name OauthIntegration#name}
  */
  readonly name: string;
  /**
  * Specifies the OAuth client type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#oauth_client OauthIntegration#oauth_client}
  */
  readonly oauthClient: string;
  /**
  * Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#oauth_issue_refresh_tokens OauthIntegration#oauth_issue_refresh_tokens}
  */
  readonly oauthIssueRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#oauth_refresh_token_validity OauthIntegration#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration#oauth_use_secondary_roles OauthIntegration#oauth_use_secondary_roles}
  */
  readonly oauthUseSecondaryRoles?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration snowflake_oauth_integration}
*/
export class OauthIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_oauth_integration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/oauth_integration snowflake_oauth_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: OauthIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_oauth_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.41.0',
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
    this._blockedRolesList = config.blockedRolesList;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._oauthClient = config.oauthClient;
    this._oauthIssueRefreshTokens = config.oauthIssueRefreshTokens;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthUseSecondaryRoles = config.oauthUseSecondaryRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_roles_list - computed: false, optional: true, required: false
  private _blockedRolesList?: string[]; 
  public get blockedRolesList() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_roles_list'));
  }
  public set blockedRolesList(value: string[]) {
    this._blockedRolesList = value;
  }
  public resetBlockedRolesList() {
    this._blockedRolesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRolesListInput() {
    return this._blockedRolesList;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
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

  // oauth_client - computed: false, optional: false, required: true
  private _oauthClient?: string; 
  public get oauthClient() {
    return this.getStringAttribute('oauth_client');
  }
  public set oauthClient(value: string) {
    this._oauthClient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientInput() {
    return this._oauthClient;
  }

  // oauth_issue_refresh_tokens - computed: false, optional: true, required: false
  private _oauthIssueRefreshTokens?: boolean | cdktf.IResolvable; 
  public get oauthIssueRefreshTokens() {
    return this.getBooleanAttribute('oauth_issue_refresh_tokens');
  }
  public set oauthIssueRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._oauthIssueRefreshTokens = value;
  }
  public resetOauthIssueRefreshTokens() {
    this._oauthIssueRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthIssueRefreshTokensInput() {
    return this._oauthIssueRefreshTokens;
  }

  // oauth_refresh_token_validity - computed: false, optional: true, required: false
  private _oauthRefreshTokenValidity?: number; 
  public get oauthRefreshTokenValidity() {
    return this.getNumberAttribute('oauth_refresh_token_validity');
  }
  public set oauthRefreshTokenValidity(value: number) {
    this._oauthRefreshTokenValidity = value;
  }
  public resetOauthRefreshTokenValidity() {
    this._oauthRefreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenValidityInput() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_use_secondary_roles - computed: false, optional: true, required: false
  private _oauthUseSecondaryRoles?: string; 
  public get oauthUseSecondaryRoles() {
    return this.getStringAttribute('oauth_use_secondary_roles');
  }
  public set oauthUseSecondaryRoles(value: string) {
    this._oauthUseSecondaryRoles = value;
  }
  public resetOauthUseSecondaryRoles() {
    this._oauthUseSecondaryRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthUseSecondaryRolesInput() {
    return this._oauthUseSecondaryRoles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_roles_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedRolesList),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth_client: cdktf.stringToTerraform(this._oauthClient),
      oauth_issue_refresh_tokens: cdktf.booleanToTerraform(this._oauthIssueRefreshTokens),
      oauth_refresh_token_validity: cdktf.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_use_secondary_roles: cdktf.stringToTerraform(this._oauthUseSecondaryRoles),
    };
  }
}
