/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service endpoints and resources within those proxies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#api_allowed_prefixes ApiIntegration#api_allowed_prefixes}
  */
  readonly apiAllowedPrefixes: string[];
  /**
  * ARN of a cloud platform role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#api_aws_role_arn ApiIntegration#api_aws_role_arn}
  */
  readonly apiAwsRoleArn?: string;
  /**
  * Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#api_blocked_prefixes ApiIntegration#api_blocked_prefixes}
  */
  readonly apiBlockedPrefixes?: string[];
  /**
  * The service account used for communication with the Google API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#api_gcp_service_account ApiIntegration#api_gcp_service_account}
  */
  readonly apiGcpServiceAccount?: string;
  /**
  * The API key (also called a “subscription key”).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#api_key ApiIntegration#api_key}
  */
  readonly apiKey?: string;
  /**
  * Specifies the HTTPS proxy service type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#api_provider ApiIntegration#api_provider}
  */
  readonly apiProvider: string;
  /**
  * The 'Application (client) id' of the Azure AD app for your remote service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#azure_ad_application_id ApiIntegration#azure_ad_application_id}
  */
  readonly azureAdApplicationId?: string;
  /**
  * Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#azure_tenant_id ApiIntegration#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#comment ApiIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this API integration is enabled or disabled. If the API integration is disabled, any external function that relies on it will not work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#enabled ApiIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The audience claim when generating the JWT (JSON Web Token) to authenticate to the Google API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#google_audience ApiIntegration#google_audience}
  */
  readonly googleAudience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#id ApiIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the API integration. This name follows the rules for Object Identifiers. The name should be unique among api integrations in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#name ApiIntegration#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration snowflake_api_integration}
*/
export class ApiIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiIntegration to import
  * @param importFromId The id of the existing ApiIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/api_integration snowflake_api_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.98.0',
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
    this._apiAllowedPrefixes = config.apiAllowedPrefixes;
    this._apiAwsRoleArn = config.apiAwsRoleArn;
    this._apiBlockedPrefixes = config.apiBlockedPrefixes;
    this._apiGcpServiceAccount = config.apiGcpServiceAccount;
    this._apiKey = config.apiKey;
    this._apiProvider = config.apiProvider;
    this._azureAdApplicationId = config.azureAdApplicationId;
    this._azureTenantId = config.azureTenantId;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._googleAudience = config.googleAudience;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_allowed_prefixes - computed: false, optional: false, required: true
  private _apiAllowedPrefixes?: string[]; 
  public get apiAllowedPrefixes() {
    return this.getListAttribute('api_allowed_prefixes');
  }
  public set apiAllowedPrefixes(value: string[]) {
    this._apiAllowedPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAllowedPrefixesInput() {
    return this._apiAllowedPrefixes;
  }

  // api_aws_external_id - computed: true, optional: false, required: false
  public get apiAwsExternalId() {
    return this.getStringAttribute('api_aws_external_id');
  }

  // api_aws_iam_user_arn - computed: true, optional: false, required: false
  public get apiAwsIamUserArn() {
    return this.getStringAttribute('api_aws_iam_user_arn');
  }

  // api_aws_role_arn - computed: false, optional: true, required: false
  private _apiAwsRoleArn?: string; 
  public get apiAwsRoleArn() {
    return this.getStringAttribute('api_aws_role_arn');
  }
  public set apiAwsRoleArn(value: string) {
    this._apiAwsRoleArn = value;
  }
  public resetApiAwsRoleArn() {
    this._apiAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAwsRoleArnInput() {
    return this._apiAwsRoleArn;
  }

  // api_blocked_prefixes - computed: false, optional: true, required: false
  private _apiBlockedPrefixes?: string[]; 
  public get apiBlockedPrefixes() {
    return this.getListAttribute('api_blocked_prefixes');
  }
  public set apiBlockedPrefixes(value: string[]) {
    this._apiBlockedPrefixes = value;
  }
  public resetApiBlockedPrefixes() {
    this._apiBlockedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBlockedPrefixesInput() {
    return this._apiBlockedPrefixes;
  }

  // api_gcp_service_account - computed: true, optional: true, required: false
  private _apiGcpServiceAccount?: string; 
  public get apiGcpServiceAccount() {
    return this.getStringAttribute('api_gcp_service_account');
  }
  public set apiGcpServiceAccount(value: string) {
    this._apiGcpServiceAccount = value;
  }
  public resetApiGcpServiceAccount() {
    this._apiGcpServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGcpServiceAccountInput() {
    return this._apiGcpServiceAccount;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_provider - computed: false, optional: false, required: true
  private _apiProvider?: string; 
  public get apiProvider() {
    return this.getStringAttribute('api_provider');
  }
  public set apiProvider(value: string) {
    this._apiProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProviderInput() {
    return this._apiProvider;
  }

  // azure_ad_application_id - computed: false, optional: true, required: false
  private _azureAdApplicationId?: string; 
  public get azureAdApplicationId() {
    return this.getStringAttribute('azure_ad_application_id');
  }
  public set azureAdApplicationId(value: string) {
    this._azureAdApplicationId = value;
  }
  public resetAzureAdApplicationId() {
    this._azureAdApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdApplicationIdInput() {
    return this._azureAdApplicationId;
  }

  // azure_consent_url - computed: true, optional: false, required: false
  public get azureConsentUrl() {
    return this.getStringAttribute('azure_consent_url');
  }

  // azure_multi_tenant_app_name - computed: true, optional: false, required: false
  public get azureMultiTenantAppName() {
    return this.getStringAttribute('azure_multi_tenant_app_name');
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
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

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // google_audience - computed: false, optional: true, required: false
  private _googleAudience?: string; 
  public get googleAudience() {
    return this.getStringAttribute('google_audience');
  }
  public set googleAudience(value: string) {
    this._googleAudience = value;
  }
  public resetGoogleAudience() {
    this._googleAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAudienceInput() {
    return this._googleAudience;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiAllowedPrefixes),
      api_aws_role_arn: cdktf.stringToTerraform(this._apiAwsRoleArn),
      api_blocked_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiBlockedPrefixes),
      api_gcp_service_account: cdktf.stringToTerraform(this._apiGcpServiceAccount),
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_provider: cdktf.stringToTerraform(this._apiProvider),
      azure_ad_application_id: cdktf.stringToTerraform(this._azureAdApplicationId),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.booleanToTerraform(this._enabled),
      google_audience: cdktf.stringToTerraform(this._googleAudience),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_allowed_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiAllowedPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      api_aws_role_arn: {
        value: cdktf.stringToHclTerraform(this._apiAwsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_blocked_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiBlockedPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      api_gcp_service_account: {
        value: cdktf.stringToHclTerraform(this._apiGcpServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_provider: {
        value: cdktf.stringToHclTerraform(this._apiProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_ad_application_id: {
        value: cdktf.stringToHclTerraform(this._azureAdApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      google_audience: {
        value: cdktf.stringToHclTerraform(this._googleAudience),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
