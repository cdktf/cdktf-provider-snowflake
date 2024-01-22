/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether this security integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#id SamlIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the SAML2 integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#name SamlIntegration#name}
  */
  readonly name: string;
  /**
  * The Boolean indicating if the Log In With button will be shown on the login page. TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}
  */
  readonly saml2EnableSpInitiated?: boolean | cdktf.IResolvable;
  /**
  * The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}
  */
  readonly saml2ForceAuthn?: boolean | cdktf.IResolvable;
  /**
  * The string containing the IdP EntityID / Issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}
  */
  readonly saml2Issuer: string;
  /**
  * The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}
  */
  readonly saml2PostLogoutRedirectUrl?: string;
  /**
  * The string describing the IdP. One of the following: OKTA, ADFS, Custom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}
  */
  readonly saml2Provider: string;
  /**
  * The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}
  */
  readonly saml2RequestedNameidFormat?: string;
  /**
  * The Boolean indicating whether SAML requests are signed. TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}
  */
  readonly saml2SignRequest?: boolean | cdktf.IResolvable;
  /**
  * The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}
  */
  readonly saml2SnowflakeAcsUrl?: string;
  /**
  * The string containing the EntityID / Issuer for the Snowflake service provider. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}
  */
  readonly saml2SnowflakeIssuerUrl?: string;
  /**
  * The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}
  */
  readonly saml2SnowflakeX509Cert?: string;
  /**
  * The string containing the label to display after the Log In With button on the login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}
  */
  readonly saml2SpInitiatedLoginPageLabel?: string;
  /**
  * The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}
  */
  readonly saml2SsoUrl: string;
  /**
  * The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}
  */
  readonly saml2X509Cert: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration snowflake_saml_integration}
*/
export class SamlIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_saml_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlIntegration to import
  * @param importFromId The id of the existing SamlIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_saml_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/saml_integration snowflake_saml_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: SamlIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_saml_integration',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._saml2EnableSpInitiated = config.saml2EnableSpInitiated;
    this._saml2ForceAuthn = config.saml2ForceAuthn;
    this._saml2Issuer = config.saml2Issuer;
    this._saml2PostLogoutRedirectUrl = config.saml2PostLogoutRedirectUrl;
    this._saml2Provider = config.saml2Provider;
    this._saml2RequestedNameidFormat = config.saml2RequestedNameidFormat;
    this._saml2SignRequest = config.saml2SignRequest;
    this._saml2SnowflakeAcsUrl = config.saml2SnowflakeAcsUrl;
    this._saml2SnowflakeIssuerUrl = config.saml2SnowflakeIssuerUrl;
    this._saml2SnowflakeX509Cert = config.saml2SnowflakeX509Cert;
    this._saml2SpInitiatedLoginPageLabel = config.saml2SpInitiatedLoginPageLabel;
    this._saml2SsoUrl = config.saml2SsoUrl;
    this._saml2X509Cert = config.saml2X509Cert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // saml2_digest_methods_used - computed: true, optional: false, required: false
  public get saml2DigestMethodsUsed() {
    return this.getStringAttribute('saml2_digest_methods_used');
  }

  // saml2_enable_sp_initiated - computed: false, optional: true, required: false
  private _saml2EnableSpInitiated?: boolean | cdktf.IResolvable; 
  public get saml2EnableSpInitiated() {
    return this.getBooleanAttribute('saml2_enable_sp_initiated');
  }
  public set saml2EnableSpInitiated(value: boolean | cdktf.IResolvable) {
    this._saml2EnableSpInitiated = value;
  }
  public resetSaml2EnableSpInitiated() {
    this._saml2EnableSpInitiated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2EnableSpInitiatedInput() {
    return this._saml2EnableSpInitiated;
  }

  // saml2_force_authn - computed: false, optional: true, required: false
  private _saml2ForceAuthn?: boolean | cdktf.IResolvable; 
  public get saml2ForceAuthn() {
    return this.getBooleanAttribute('saml2_force_authn');
  }
  public set saml2ForceAuthn(value: boolean | cdktf.IResolvable) {
    this._saml2ForceAuthn = value;
  }
  public resetSaml2ForceAuthn() {
    this._saml2ForceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2ForceAuthnInput() {
    return this._saml2ForceAuthn;
  }

  // saml2_issuer - computed: false, optional: false, required: true
  private _saml2Issuer?: string; 
  public get saml2Issuer() {
    return this.getStringAttribute('saml2_issuer');
  }
  public set saml2Issuer(value: string) {
    this._saml2Issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2IssuerInput() {
    return this._saml2Issuer;
  }

  // saml2_post_logout_redirect_url - computed: false, optional: true, required: false
  private _saml2PostLogoutRedirectUrl?: string; 
  public get saml2PostLogoutRedirectUrl() {
    return this.getStringAttribute('saml2_post_logout_redirect_url');
  }
  public set saml2PostLogoutRedirectUrl(value: string) {
    this._saml2PostLogoutRedirectUrl = value;
  }
  public resetSaml2PostLogoutRedirectUrl() {
    this._saml2PostLogoutRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2PostLogoutRedirectUrlInput() {
    return this._saml2PostLogoutRedirectUrl;
  }

  // saml2_provider - computed: false, optional: false, required: true
  private _saml2Provider?: string; 
  public get saml2Provider() {
    return this.getStringAttribute('saml2_provider');
  }
  public set saml2Provider(value: string) {
    this._saml2Provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2ProviderInput() {
    return this._saml2Provider;
  }

  // saml2_requested_nameid_format - computed: false, optional: true, required: false
  private _saml2RequestedNameidFormat?: string; 
  public get saml2RequestedNameidFormat() {
    return this.getStringAttribute('saml2_requested_nameid_format');
  }
  public set saml2RequestedNameidFormat(value: string) {
    this._saml2RequestedNameidFormat = value;
  }
  public resetSaml2RequestedNameidFormat() {
    this._saml2RequestedNameidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2RequestedNameidFormatInput() {
    return this._saml2RequestedNameidFormat;
  }

  // saml2_sign_request - computed: false, optional: true, required: false
  private _saml2SignRequest?: boolean | cdktf.IResolvable; 
  public get saml2SignRequest() {
    return this.getBooleanAttribute('saml2_sign_request');
  }
  public set saml2SignRequest(value: boolean | cdktf.IResolvable) {
    this._saml2SignRequest = value;
  }
  public resetSaml2SignRequest() {
    this._saml2SignRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SignRequestInput() {
    return this._saml2SignRequest;
  }

  // saml2_signature_methods_used - computed: true, optional: false, required: false
  public get saml2SignatureMethodsUsed() {
    return this.getStringAttribute('saml2_signature_methods_used');
  }

  // saml2_snowflake_acs_url - computed: true, optional: true, required: false
  private _saml2SnowflakeAcsUrl?: string; 
  public get saml2SnowflakeAcsUrl() {
    return this.getStringAttribute('saml2_snowflake_acs_url');
  }
  public set saml2SnowflakeAcsUrl(value: string) {
    this._saml2SnowflakeAcsUrl = value;
  }
  public resetSaml2SnowflakeAcsUrl() {
    this._saml2SnowflakeAcsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SnowflakeAcsUrlInput() {
    return this._saml2SnowflakeAcsUrl;
  }

  // saml2_snowflake_issuer_url - computed: true, optional: true, required: false
  private _saml2SnowflakeIssuerUrl?: string; 
  public get saml2SnowflakeIssuerUrl() {
    return this.getStringAttribute('saml2_snowflake_issuer_url');
  }
  public set saml2SnowflakeIssuerUrl(value: string) {
    this._saml2SnowflakeIssuerUrl = value;
  }
  public resetSaml2SnowflakeIssuerUrl() {
    this._saml2SnowflakeIssuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SnowflakeIssuerUrlInput() {
    return this._saml2SnowflakeIssuerUrl;
  }

  // saml2_snowflake_metadata - computed: true, optional: false, required: false
  public get saml2SnowflakeMetadata() {
    return this.getStringAttribute('saml2_snowflake_metadata');
  }

  // saml2_snowflake_x509_cert - computed: true, optional: true, required: false
  private _saml2SnowflakeX509Cert?: string; 
  public get saml2SnowflakeX509Cert() {
    return this.getStringAttribute('saml2_snowflake_x509_cert');
  }
  public set saml2SnowflakeX509Cert(value: string) {
    this._saml2SnowflakeX509Cert = value;
  }
  public resetSaml2SnowflakeX509Cert() {
    this._saml2SnowflakeX509Cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SnowflakeX509CertInput() {
    return this._saml2SnowflakeX509Cert;
  }

  // saml2_sp_initiated_login_page_label - computed: false, optional: true, required: false
  private _saml2SpInitiatedLoginPageLabel?: string; 
  public get saml2SpInitiatedLoginPageLabel() {
    return this.getStringAttribute('saml2_sp_initiated_login_page_label');
  }
  public set saml2SpInitiatedLoginPageLabel(value: string) {
    this._saml2SpInitiatedLoginPageLabel = value;
  }
  public resetSaml2SpInitiatedLoginPageLabel() {
    this._saml2SpInitiatedLoginPageLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SpInitiatedLoginPageLabelInput() {
    return this._saml2SpInitiatedLoginPageLabel;
  }

  // saml2_sso_url - computed: false, optional: false, required: true
  private _saml2SsoUrl?: string; 
  public get saml2SsoUrl() {
    return this.getStringAttribute('saml2_sso_url');
  }
  public set saml2SsoUrl(value: string) {
    this._saml2SsoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SsoUrlInput() {
    return this._saml2SsoUrl;
  }

  // saml2_x509_cert - computed: false, optional: false, required: true
  private _saml2X509Cert?: string; 
  public get saml2X509Cert() {
    return this.getStringAttribute('saml2_x509_cert');
  }
  public set saml2X509Cert(value: string) {
    this._saml2X509Cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2X509CertInput() {
    return this._saml2X509Cert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      saml2_enable_sp_initiated: cdktf.booleanToTerraform(this._saml2EnableSpInitiated),
      saml2_force_authn: cdktf.booleanToTerraform(this._saml2ForceAuthn),
      saml2_issuer: cdktf.stringToTerraform(this._saml2Issuer),
      saml2_post_logout_redirect_url: cdktf.stringToTerraform(this._saml2PostLogoutRedirectUrl),
      saml2_provider: cdktf.stringToTerraform(this._saml2Provider),
      saml2_requested_nameid_format: cdktf.stringToTerraform(this._saml2RequestedNameidFormat),
      saml2_sign_request: cdktf.booleanToTerraform(this._saml2SignRequest),
      saml2_snowflake_acs_url: cdktf.stringToTerraform(this._saml2SnowflakeAcsUrl),
      saml2_snowflake_issuer_url: cdktf.stringToTerraform(this._saml2SnowflakeIssuerUrl),
      saml2_snowflake_x509_cert: cdktf.stringToTerraform(this._saml2SnowflakeX509Cert),
      saml2_sp_initiated_login_page_label: cdktf.stringToTerraform(this._saml2SpInitiatedLoginPageLabel),
      saml2_sso_url: cdktf.stringToTerraform(this._saml2SsoUrl),
      saml2_x509_cert: cdktf.stringToTerraform(this._saml2X509Cert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_enable_sp_initiated: {
        value: cdktf.booleanToHclTerraform(this._saml2EnableSpInitiated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml2_force_authn: {
        value: cdktf.booleanToHclTerraform(this._saml2ForceAuthn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml2_issuer: {
        value: cdktf.stringToHclTerraform(this._saml2Issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_post_logout_redirect_url: {
        value: cdktf.stringToHclTerraform(this._saml2PostLogoutRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_provider: {
        value: cdktf.stringToHclTerraform(this._saml2Provider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_requested_nameid_format: {
        value: cdktf.stringToHclTerraform(this._saml2RequestedNameidFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_sign_request: {
        value: cdktf.booleanToHclTerraform(this._saml2SignRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml2_snowflake_acs_url: {
        value: cdktf.stringToHclTerraform(this._saml2SnowflakeAcsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_snowflake_issuer_url: {
        value: cdktf.stringToHclTerraform(this._saml2SnowflakeIssuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_snowflake_x509_cert: {
        value: cdktf.stringToHclTerraform(this._saml2SnowflakeX509Cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_sp_initiated_login_page_label: {
        value: cdktf.stringToHclTerraform(this._saml2SpInitiatedLoginPageLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_sso_url: {
        value: cdktf.stringToHclTerraform(this._saml2SsoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_x509_cert: {
        value: cdktf.stringToHclTerraform(this._saml2X509Cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
