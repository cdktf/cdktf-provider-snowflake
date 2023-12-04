# `samlIntegration` Submodule <a name="`samlIntegration` Submodule" id="@cdktf/provider-snowflake.samlIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIntegration <a name="SamlIntegration" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration snowflake_saml_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.saml_integration.SamlIntegration;

SamlIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .saml2Issuer(java.lang.String)
    .saml2Provider(java.lang.String)
    .saml2SsoUrl(java.lang.String)
    .saml2X509Cert(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .saml2EnableSpInitiated(java.lang.Boolean)
//  .saml2EnableSpInitiated(IResolvable)
//  .saml2ForceAuthn(java.lang.Boolean)
//  .saml2ForceAuthn(IResolvable)
//  .saml2PostLogoutRedirectUrl(java.lang.String)
//  .saml2RequestedNameidFormat(java.lang.String)
//  .saml2SignRequest(java.lang.Boolean)
//  .saml2SignRequest(IResolvable)
//  .saml2SnowflakeAcsUrl(java.lang.String)
//  .saml2SnowflakeIssuerUrl(java.lang.String)
//  .saml2SnowflakeX509Cert(java.lang.String)
//  .saml2SpInitiatedLoginPageLabel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Issuer">saml2Issuer</a></code> | <code>java.lang.String</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Provider">saml2Provider</a></code> | <code>java.lang.String</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SsoUrl">saml2SsoUrl</a></code> | <code>java.lang.String</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2X509Cert">saml2X509Cert</a></code> | <code>java.lang.String</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>java.lang.String</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>java.lang.String</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SignRequest">saml2SignRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>java.lang.String</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>java.lang.String</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeX509Cert">saml2SnowflakeX509Cert</a></code> | <code>java.lang.String</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>java.lang.String</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Issuer"></a>

- *Type:* java.lang.String

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Provider"></a>

- *Type:* java.lang.String

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SsoUrl"></a>

- *Type:* java.lang.String

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2X509Cert"></a>

- *Type:* java.lang.String

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2EnableSpInitiated`<sup>Optional</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2EnableSpInitiated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `saml2ForceAuthn`<sup>Optional</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2ForceAuthn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2PostLogoutRedirectUrl"></a>

- *Type:* java.lang.String

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `saml2RequestedNameidFormat`<sup>Optional</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2RequestedNameidFormat"></a>

- *Type:* java.lang.String

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `saml2SignRequest`<sup>Optional</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SignRequest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeAcsUrl"></a>

- *Type:* java.lang.String

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeIssuerUrl"></a>

- *Type:* java.lang.String

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `saml2SnowflakeX509Cert`<sup>Optional</sup> <a name="saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeX509Cert"></a>

- *Type:* java.lang.String

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SpInitiatedLoginPageLabel"></a>

- *Type:* java.lang.String

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated">resetSaml2EnableSpInitiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn">resetSaml2ForceAuthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl">resetSaml2PostLogoutRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat">resetSaml2RequestedNameidFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest">resetSaml2SignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl">resetSaml2SnowflakeAcsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl">resetSaml2SnowflakeIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert">resetSaml2SnowflakeX509Cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel">resetSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetSaml2EnableSpInitiated` <a name="resetSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated"></a>

```java
public void resetSaml2EnableSpInitiated()
```

##### `resetSaml2ForceAuthn` <a name="resetSaml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn"></a>

```java
public void resetSaml2ForceAuthn()
```

##### `resetSaml2PostLogoutRedirectUrl` <a name="resetSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl"></a>

```java
public void resetSaml2PostLogoutRedirectUrl()
```

##### `resetSaml2RequestedNameidFormat` <a name="resetSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat"></a>

```java
public void resetSaml2RequestedNameidFormat()
```

##### `resetSaml2SignRequest` <a name="resetSaml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest"></a>

```java
public void resetSaml2SignRequest()
```

##### `resetSaml2SnowflakeAcsUrl` <a name="resetSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl"></a>

```java
public void resetSaml2SnowflakeAcsUrl()
```

##### `resetSaml2SnowflakeIssuerUrl` <a name="resetSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl"></a>

```java
public void resetSaml2SnowflakeIssuerUrl()
```

##### `resetSaml2SnowflakeX509Cert` <a name="resetSaml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert"></a>

```java
public void resetSaml2SnowflakeX509Cert()
```

##### `resetSaml2SpInitiatedLoginPageLabel` <a name="resetSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel"></a>

```java
public void resetSaml2SpInitiatedLoginPageLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.saml_integration.SamlIntegration;

SamlIntegration.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.saml_integration.SamlIntegration;

SamlIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.saml_integration.SamlIntegration;

SamlIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.saml_integration.SamlIntegration;

SamlIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SamlIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SamlIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SamlIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SamlIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SamlIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed">saml2DigestMethodsUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed">saml2SignatureMethodsUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata">saml2SnowflakeMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput">saml2EnableSpInitiatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput">saml2ForceAuthnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput">saml2IssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput">saml2PostLogoutRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput">saml2ProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput">saml2RequestedNameidFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput">saml2SignRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput">saml2SnowflakeAcsUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput">saml2SnowflakeIssuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput">saml2SnowflakeX509CertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput">saml2SpInitiatedLoginPageLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput">saml2SsoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput">saml2X509CertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer">saml2Issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider">saml2Provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest">saml2SignRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert">saml2SnowflakeX509Cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert">saml2X509Cert</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `saml2DigestMethodsUsed`<sup>Required</sup> <a name="saml2DigestMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed"></a>

```java
public java.lang.String getSaml2DigestMethodsUsed();
```

- *Type:* java.lang.String

---

##### `saml2SignatureMethodsUsed`<sup>Required</sup> <a name="saml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed"></a>

```java
public java.lang.String getSaml2SignatureMethodsUsed();
```

- *Type:* java.lang.String

---

##### `saml2SnowflakeMetadata`<sup>Required</sup> <a name="saml2SnowflakeMetadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata"></a>

```java
public java.lang.String getSaml2SnowflakeMetadata();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `saml2EnableSpInitiatedInput`<sup>Optional</sup> <a name="saml2EnableSpInitiatedInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput"></a>

```java
public java.lang.Object getSaml2EnableSpInitiatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saml2ForceAuthnInput`<sup>Optional</sup> <a name="saml2ForceAuthnInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput"></a>

```java
public java.lang.Object getSaml2ForceAuthnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saml2IssuerInput`<sup>Optional</sup> <a name="saml2IssuerInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput"></a>

```java
public java.lang.String getSaml2IssuerInput();
```

- *Type:* java.lang.String

---

##### `saml2PostLogoutRedirectUrlInput`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput"></a>

```java
public java.lang.String getSaml2PostLogoutRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `saml2ProviderInput`<sup>Optional</sup> <a name="saml2ProviderInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput"></a>

```java
public java.lang.String getSaml2ProviderInput();
```

- *Type:* java.lang.String

---

##### `saml2RequestedNameidFormatInput`<sup>Optional</sup> <a name="saml2RequestedNameidFormatInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput"></a>

```java
public java.lang.String getSaml2RequestedNameidFormatInput();
```

- *Type:* java.lang.String

---

##### `saml2SignRequestInput`<sup>Optional</sup> <a name="saml2SignRequestInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput"></a>

```java
public java.lang.Object getSaml2SignRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saml2SnowflakeAcsUrlInput`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput"></a>

```java
public java.lang.String getSaml2SnowflakeAcsUrlInput();
```

- *Type:* java.lang.String

---

##### `saml2SnowflakeIssuerUrlInput`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput"></a>

```java
public java.lang.String getSaml2SnowflakeIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `saml2SnowflakeX509CertInput`<sup>Optional</sup> <a name="saml2SnowflakeX509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput"></a>

```java
public java.lang.String getSaml2SnowflakeX509CertInput();
```

- *Type:* java.lang.String

---

##### `saml2SpInitiatedLoginPageLabelInput`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabelInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```java
public java.lang.String getSaml2SpInitiatedLoginPageLabelInput();
```

- *Type:* java.lang.String

---

##### `saml2SsoUrlInput`<sup>Optional</sup> <a name="saml2SsoUrlInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput"></a>

```java
public java.lang.String getSaml2SsoUrlInput();
```

- *Type:* java.lang.String

---

##### `saml2X509CertInput`<sup>Optional</sup> <a name="saml2X509CertInput" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput"></a>

```java
public java.lang.String getSaml2X509CertInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `saml2EnableSpInitiated`<sup>Required</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated"></a>

```java
public java.lang.Object getSaml2EnableSpInitiated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saml2ForceAuthn`<sup>Required</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn"></a>

```java
public java.lang.Object getSaml2ForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer"></a>

```java
public java.lang.String getSaml2Issuer();
```

- *Type:* java.lang.String

---

##### `saml2PostLogoutRedirectUrl`<sup>Required</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl"></a>

```java
public java.lang.String getSaml2PostLogoutRedirectUrl();
```

- *Type:* java.lang.String

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider"></a>

```java
public java.lang.String getSaml2Provider();
```

- *Type:* java.lang.String

---

##### `saml2RequestedNameidFormat`<sup>Required</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat"></a>

```java
public java.lang.String getSaml2RequestedNameidFormat();
```

- *Type:* java.lang.String

---

##### `saml2SignRequest`<sup>Required</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest"></a>

```java
public java.lang.Object getSaml2SignRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `saml2SnowflakeAcsUrl`<sup>Required</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl"></a>

```java
public java.lang.String getSaml2SnowflakeAcsUrl();
```

- *Type:* java.lang.String

---

##### `saml2SnowflakeIssuerUrl`<sup>Required</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl"></a>

```java
public java.lang.String getSaml2SnowflakeIssuerUrl();
```

- *Type:* java.lang.String

---

##### `saml2SnowflakeX509Cert`<sup>Required</sup> <a name="saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert"></a>

```java
public java.lang.String getSaml2SnowflakeX509Cert();
```

- *Type:* java.lang.String

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Required</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel"></a>

```java
public java.lang.String getSaml2SpInitiatedLoginPageLabel();
```

- *Type:* java.lang.String

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl"></a>

```java
public java.lang.String getSaml2SsoUrl();
```

- *Type:* java.lang.String

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert"></a>

```java
public java.lang.String getSaml2X509Cert();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIntegrationConfig <a name="SamlIntegrationConfig" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.saml_integration.SamlIntegrationConfig;

SamlIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .saml2Issuer(java.lang.String)
    .saml2Provider(java.lang.String)
    .saml2SsoUrl(java.lang.String)
    .saml2X509Cert(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .saml2EnableSpInitiated(java.lang.Boolean)
//  .saml2EnableSpInitiated(IResolvable)
//  .saml2ForceAuthn(java.lang.Boolean)
//  .saml2ForceAuthn(IResolvable)
//  .saml2PostLogoutRedirectUrl(java.lang.String)
//  .saml2RequestedNameidFormat(java.lang.String)
//  .saml2SignRequest(java.lang.Boolean)
//  .saml2SignRequest(IResolvable)
//  .saml2SnowflakeAcsUrl(java.lang.String)
//  .saml2SnowflakeIssuerUrl(java.lang.String)
//  .saml2SnowflakeX509Cert(java.lang.String)
//  .saml2SpInitiatedLoginPageLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer">saml2Issuer</a></code> | <code>java.lang.String</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider">saml2Provider</a></code> | <code>java.lang.String</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl">saml2SsoUrl</a></code> | <code>java.lang.String</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert">saml2X509Cert</a></code> | <code>java.lang.String</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated">saml2EnableSpInitiated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn">saml2ForceAuthn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl">saml2PostLogoutRedirectUrl</a></code> | <code>java.lang.String</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat">saml2RequestedNameidFormat</a></code> | <code>java.lang.String</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest">saml2SignRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl">saml2SnowflakeAcsUrl</a></code> | <code>java.lang.String</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl">saml2SnowflakeIssuerUrl</a></code> | <code>java.lang.String</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert">saml2SnowflakeX509Cert</a></code> | <code>java.lang.String</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel">saml2SpInitiatedLoginPageLabel</a></code> | <code>java.lang.String</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `saml2Issuer`<sup>Required</sup> <a name="saml2Issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer"></a>

```java
public java.lang.String getSaml2Issuer();
```

- *Type:* java.lang.String

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `saml2Provider`<sup>Required</sup> <a name="saml2Provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider"></a>

```java
public java.lang.String getSaml2Provider();
```

- *Type:* java.lang.String

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `saml2SsoUrl`<sup>Required</sup> <a name="saml2SsoUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl"></a>

```java
public java.lang.String getSaml2SsoUrl();
```

- *Type:* java.lang.String

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `saml2X509Cert`<sup>Required</sup> <a name="saml2X509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert"></a>

```java
public java.lang.String getSaml2X509Cert();
```

- *Type:* java.lang.String

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2EnableSpInitiated`<sup>Optional</sup> <a name="saml2EnableSpInitiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated"></a>

```java
public java.lang.Object getSaml2EnableSpInitiated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `saml2ForceAuthn`<sup>Optional</sup> <a name="saml2ForceAuthn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn"></a>

```java
public java.lang.Object getSaml2ForceAuthn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `saml2PostLogoutRedirectUrl`<sup>Optional</sup> <a name="saml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```java
public java.lang.String getSaml2PostLogoutRedirectUrl();
```

- *Type:* java.lang.String

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `saml2RequestedNameidFormat`<sup>Optional</sup> <a name="saml2RequestedNameidFormat" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat"></a>

```java
public java.lang.String getSaml2RequestedNameidFormat();
```

- *Type:* java.lang.String

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `saml2SignRequest`<sup>Optional</sup> <a name="saml2SignRequest" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest"></a>

```java
public java.lang.Object getSaml2SignRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `saml2SnowflakeAcsUrl`<sup>Optional</sup> <a name="saml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```java
public java.lang.String getSaml2SnowflakeAcsUrl();
```

- *Type:* java.lang.String

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `saml2SnowflakeIssuerUrl`<sup>Optional</sup> <a name="saml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```java
public java.lang.String getSaml2SnowflakeIssuerUrl();
```

- *Type:* java.lang.String

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `saml2SnowflakeX509Cert`<sup>Optional</sup> <a name="saml2SnowflakeX509Cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert"></a>

```java
public java.lang.String getSaml2SnowflakeX509Cert();
```

- *Type:* java.lang.String

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `saml2SpInitiatedLoginPageLabel`<sup>Optional</sup> <a name="saml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```java
public java.lang.String getSaml2SpInitiatedLoginPageLabel();
```

- *Type:* java.lang.String

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.77.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---



