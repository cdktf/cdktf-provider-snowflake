# `snowflake_saml_integration`

Refer to the Terraform Registory for docs: [`snowflake_saml_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration).

# `samlIntegration` Submodule <a name="`samlIntegration` Submodule" id="@cdktf/provider-snowflake.samlIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIntegration <a name="SamlIntegration" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration snowflake_saml_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml_integration

samlIntegration.SamlIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  saml2_issuer: str,
  saml2_provider: str,
  saml2_sso_url: str,
  saml2_x509_cert: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  saml2_enable_sp_initiated: typing.Union[bool, IResolvable] = None,
  saml2_force_authn: typing.Union[bool, IResolvable] = None,
  saml2_post_logout_redirect_url: str = None,
  saml2_requested_nameid_format: str = None,
  saml2_sign_request: typing.Union[bool, IResolvable] = None,
  saml2_snowflake_acs_url: str = None,
  saml2_snowflake_issuer_url: str = None,
  saml2_snowflake_x509_cert: str = None,
  saml2_sp_initiated_login_page_label: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Issuer">saml2_issuer</a></code> | <code>str</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Provider">saml2_provider</a></code> | <code>str</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SsoUrl">saml2_sso_url</a></code> | <code>str</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2X509Cert">saml2_x509_cert</a></code> | <code>str</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2ForceAuthn">saml2_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code>str</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code>str</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SignRequest">saml2_sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code>str</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code>str</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeX509Cert">saml2_snowflake_x509_cert</a></code> | <code>str</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code>str</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Issuer"></a>

- *Type:* str

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2Provider"></a>

- *Type:* str

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SsoUrl"></a>

- *Type:* str

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `saml2_x509_cert`<sup>Required</sup> <a name="saml2_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2X509Cert"></a>

- *Type:* str

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2_enable_sp_initiated`<sup>Optional</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2EnableSpInitiated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `saml2_force_authn`<sup>Optional</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2ForceAuthn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `saml2_post_logout_redirect_url`<sup>Optional</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2PostLogoutRedirectUrl"></a>

- *Type:* str

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `saml2_requested_nameid_format`<sup>Optional</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2RequestedNameidFormat"></a>

- *Type:* str

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `saml2_sign_request`<sup>Optional</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SignRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `saml2_snowflake_acs_url`<sup>Optional</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeAcsUrl"></a>

- *Type:* str

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `saml2_snowflake_issuer_url`<sup>Optional</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeIssuerUrl"></a>

- *Type:* str

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `saml2_snowflake_x509_cert`<sup>Optional</sup> <a name="saml2_snowflake_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SnowflakeX509Cert"></a>

- *Type:* str

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `saml2_sp_initiated_login_page_label`<sup>Optional</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.Initializer.parameter.saml2SpInitiatedLoginPageLabel"></a>

- *Type:* str

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated">reset_saml2_enable_sp_initiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn">reset_saml2_force_authn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl">reset_saml2_post_logout_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat">reset_saml2_requested_nameid_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest">reset_saml2_sign_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl">reset_saml2_snowflake_acs_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl">reset_saml2_snowflake_issuer_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert">reset_saml2_snowflake_x509_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel">reset_saml2_sp_initiated_login_page_label</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_saml2_enable_sp_initiated` <a name="reset_saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2EnableSpInitiated"></a>

```python
def reset_saml2_enable_sp_initiated() -> None
```

##### `reset_saml2_force_authn` <a name="reset_saml2_force_authn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2ForceAuthn"></a>

```python
def reset_saml2_force_authn() -> None
```

##### `reset_saml2_post_logout_redirect_url` <a name="reset_saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2PostLogoutRedirectUrl"></a>

```python
def reset_saml2_post_logout_redirect_url() -> None
```

##### `reset_saml2_requested_nameid_format` <a name="reset_saml2_requested_nameid_format" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2RequestedNameidFormat"></a>

```python
def reset_saml2_requested_nameid_format() -> None
```

##### `reset_saml2_sign_request` <a name="reset_saml2_sign_request" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SignRequest"></a>

```python
def reset_saml2_sign_request() -> None
```

##### `reset_saml2_snowflake_acs_url` <a name="reset_saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeAcsUrl"></a>

```python
def reset_saml2_snowflake_acs_url() -> None
```

##### `reset_saml2_snowflake_issuer_url` <a name="reset_saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeIssuerUrl"></a>

```python
def reset_saml2_snowflake_issuer_url() -> None
```

##### `reset_saml2_snowflake_x509_cert` <a name="reset_saml2_snowflake_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SnowflakeX509Cert"></a>

```python
def reset_saml2_snowflake_x509_cert() -> None
```

##### `reset_saml2_sp_initiated_login_page_label` <a name="reset_saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.resetSaml2SpInitiatedLoginPageLabel"></a>

```python
def reset_saml2_sp_initiated_login_page_label() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import saml_integration

samlIntegration.SamlIntegration.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import saml_integration

samlIntegration.SamlIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import saml_integration

samlIntegration.SamlIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed">saml2_digest_methods_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed">saml2_signature_methods_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata">saml2_snowflake_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput">saml2_enable_sp_initiated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput">saml2_force_authn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput">saml2_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput">saml2_post_logout_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput">saml2_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput">saml2_requested_nameid_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput">saml2_sign_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput">saml2_snowflake_acs_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput">saml2_snowflake_issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput">saml2_snowflake_x509_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput">saml2_sp_initiated_login_page_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput">saml2_sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput">saml2_x509_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn">saml2_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer">saml2_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider">saml2_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest">saml2_sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert">saml2_snowflake_x509_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl">saml2_sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert">saml2_x509_cert</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `saml2_digest_methods_used`<sup>Required</sup> <a name="saml2_digest_methods_used" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2DigestMethodsUsed"></a>

```python
saml2_digest_methods_used: str
```

- *Type:* str

---

##### `saml2_signature_methods_used`<sup>Required</sup> <a name="saml2_signature_methods_used" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignatureMethodsUsed"></a>

```python
saml2_signature_methods_used: str
```

- *Type:* str

---

##### `saml2_snowflake_metadata`<sup>Required</sup> <a name="saml2_snowflake_metadata" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeMetadata"></a>

```python
saml2_snowflake_metadata: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `saml2_enable_sp_initiated_input`<sup>Optional</sup> <a name="saml2_enable_sp_initiated_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiatedInput"></a>

```python
saml2_enable_sp_initiated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml2_force_authn_input`<sup>Optional</sup> <a name="saml2_force_authn_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthnInput"></a>

```python
saml2_force_authn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml2_issuer_input`<sup>Optional</sup> <a name="saml2_issuer_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2IssuerInput"></a>

```python
saml2_issuer_input: str
```

- *Type:* str

---

##### `saml2_post_logout_redirect_url_input`<sup>Optional</sup> <a name="saml2_post_logout_redirect_url_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrlInput"></a>

```python
saml2_post_logout_redirect_url_input: str
```

- *Type:* str

---

##### `saml2_provider_input`<sup>Optional</sup> <a name="saml2_provider_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ProviderInput"></a>

```python
saml2_provider_input: str
```

- *Type:* str

---

##### `saml2_requested_nameid_format_input`<sup>Optional</sup> <a name="saml2_requested_nameid_format_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormatInput"></a>

```python
saml2_requested_nameid_format_input: str
```

- *Type:* str

---

##### `saml2_sign_request_input`<sup>Optional</sup> <a name="saml2_sign_request_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequestInput"></a>

```python
saml2_sign_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml2_snowflake_acs_url_input`<sup>Optional</sup> <a name="saml2_snowflake_acs_url_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrlInput"></a>

```python
saml2_snowflake_acs_url_input: str
```

- *Type:* str

---

##### `saml2_snowflake_issuer_url_input`<sup>Optional</sup> <a name="saml2_snowflake_issuer_url_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrlInput"></a>

```python
saml2_snowflake_issuer_url_input: str
```

- *Type:* str

---

##### `saml2_snowflake_x509_cert_input`<sup>Optional</sup> <a name="saml2_snowflake_x509_cert_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509CertInput"></a>

```python
saml2_snowflake_x509_cert_input: str
```

- *Type:* str

---

##### `saml2_sp_initiated_login_page_label_input`<sup>Optional</sup> <a name="saml2_sp_initiated_login_page_label_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```python
saml2_sp_initiated_login_page_label_input: str
```

- *Type:* str

---

##### `saml2_sso_url_input`<sup>Optional</sup> <a name="saml2_sso_url_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrlInput"></a>

```python
saml2_sso_url_input: str
```

- *Type:* str

---

##### `saml2_x509_cert_input`<sup>Optional</sup> <a name="saml2_x509_cert_input" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509CertInput"></a>

```python
saml2_x509_cert_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `saml2_enable_sp_initiated`<sup>Required</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2EnableSpInitiated"></a>

```python
saml2_enable_sp_initiated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml2_force_authn`<sup>Required</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2ForceAuthn"></a>

```python
saml2_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Issuer"></a>

```python
saml2_issuer: str
```

- *Type:* str

---

##### `saml2_post_logout_redirect_url`<sup>Required</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2PostLogoutRedirectUrl"></a>

```python
saml2_post_logout_redirect_url: str
```

- *Type:* str

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2Provider"></a>

```python
saml2_provider: str
```

- *Type:* str

---

##### `saml2_requested_nameid_format`<sup>Required</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2RequestedNameidFormat"></a>

```python
saml2_requested_nameid_format: str
```

- *Type:* str

---

##### `saml2_sign_request`<sup>Required</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SignRequest"></a>

```python
saml2_sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `saml2_snowflake_acs_url`<sup>Required</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeAcsUrl"></a>

```python
saml2_snowflake_acs_url: str
```

- *Type:* str

---

##### `saml2_snowflake_issuer_url`<sup>Required</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeIssuerUrl"></a>

```python
saml2_snowflake_issuer_url: str
```

- *Type:* str

---

##### `saml2_snowflake_x509_cert`<sup>Required</sup> <a name="saml2_snowflake_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SnowflakeX509Cert"></a>

```python
saml2_snowflake_x509_cert: str
```

- *Type:* str

---

##### `saml2_sp_initiated_login_page_label`<sup>Required</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SpInitiatedLoginPageLabel"></a>

```python
saml2_sp_initiated_login_page_label: str
```

- *Type:* str

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2SsoUrl"></a>

```python
saml2_sso_url: str
```

- *Type:* str

---

##### `saml2_x509_cert`<sup>Required</sup> <a name="saml2_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.saml2X509Cert"></a>

```python
saml2_x509_cert: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIntegrationConfig <a name="SamlIntegrationConfig" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml_integration

samlIntegration.SamlIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  saml2_issuer: str,
  saml2_provider: str,
  saml2_sso_url: str,
  saml2_x509_cert: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  saml2_enable_sp_initiated: typing.Union[bool, IResolvable] = None,
  saml2_force_authn: typing.Union[bool, IResolvable] = None,
  saml2_post_logout_redirect_url: str = None,
  saml2_requested_nameid_format: str = None,
  saml2_sign_request: typing.Union[bool, IResolvable] = None,
  saml2_snowflake_acs_url: str = None,
  saml2_snowflake_issuer_url: str = None,
  saml2_snowflake_x509_cert: str = None,
  saml2_sp_initiated_login_page_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer">saml2_issuer</a></code> | <code>str</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider">saml2_provider</a></code> | <code>str</code> | The string describing the IdP. One of the following: OKTA, ADFS, Custom. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl">saml2_sso_url</a></code> | <code>str</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert">saml2_x509_cert</a></code> | <code>str</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#id SamlIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn">saml2_force_authn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code>str</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code>str</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient . |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest">saml2_sign_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code>str</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code>str</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert">saml2_snowflake_x509_cert</a></code> | <code>str</code> | The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests. |
| <code><a href="#@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code>str</code> | The string containing the label to display after the Log In With button on the login page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#name SamlIntegration#name}

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Issuer"></a>

```python
saml2_issuer: str
```

- *Type:* str

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_issuer SamlIntegration#saml2_issuer}

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2Provider"></a>

```python
saml2_provider: str
```

- *Type:* str

The string describing the IdP. One of the following: OKTA, ADFS, Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_provider SamlIntegration#saml2_provider}

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SsoUrl"></a>

```python
saml2_sso_url: str
```

- *Type:* str

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_sso_url SamlIntegration#saml2_sso_url}

---

##### `saml2_x509_cert`<sup>Required</sup> <a name="saml2_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2X509Cert"></a>

```python
saml2_x509_cert: str
```

- *Type:* str

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_x509_cert SamlIntegration#saml2_x509_cert}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#enabled SamlIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#id SamlIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2_enable_sp_initiated`<sup>Optional</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2EnableSpInitiated"></a>

```python
saml2_enable_sp_initiated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in WIth button on the login page.  FALSE: does not display the Log in With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_enable_sp_initiated SamlIntegration#saml2_enable_sp_initiated}

---

##### `saml2_force_authn`<sup>Optional</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2ForceAuthn"></a>

```python
saml2_force_authn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_force_authn SamlIntegration#saml2_force_authn}

---

##### `saml2_post_logout_redirect_url`<sup>Optional</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```python
saml2_post_logout_redirect_url: str
```

- *Type:* str

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_post_logout_redirect_url SamlIntegration#saml2_post_logout_redirect_url}

---

##### `saml2_requested_nameid_format`<sup>Optional</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2RequestedNameidFormat"></a>

```python
saml2_requested_nameid_format: str
```

- *Type:* str

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. If a value is not specified, Snowflake sends the urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress value in the authentication request to the IdP. NameID must be one of the following values: urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified, urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress, urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName, urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName, urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos, urn:oasis:names:tc:SAML:2.0:nameid-format:persistent, urn:oasis:names:tc:SAML:2.0:nameid-format:transient .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_requested_nameid_format SamlIntegration#saml2_requested_nameid_format}

---

##### `saml2_sign_request`<sup>Optional</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SignRequest"></a>

```python
saml2_sign_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_sign_request SamlIntegration#saml2_sign_request}

---

##### `saml2_snowflake_acs_url`<sup>Optional</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```python
saml2_snowflake_acs_url: str
```

- *Type:* str

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Default: https://<account_locator>.<region>.snowflakecomputing.com/fed/login

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_snowflake_acs_url SamlIntegration#saml2_snowflake_acs_url}

---

##### `saml2_snowflake_issuer_url`<sup>Optional</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```python
saml2_snowflake_issuer_url: str
```

- *Type:* str

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_snowflake_issuer_url SamlIntegration#saml2_snowflake_issuer_url}

---

##### `saml2_snowflake_x509_cert`<sup>Optional</sup> <a name="saml2_snowflake_x509_cert" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SnowflakeX509Cert"></a>

```python
saml2_snowflake_x509_cert: str
```

- *Type:* str

The Base64 encoded self-signed certificate generated by Snowflake for use with Encrypting SAML Assertions and Signed SAML Requests.

You must have at least one of these features (encrypted SAML assertions or signed SAML responses) enabled in your Snowflake account to access the certificate value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_snowflake_x509_cert SamlIntegration#saml2_snowflake_x509_cert}

---

##### `saml2_sp_initiated_login_page_label`<sup>Optional</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.samlIntegration.SamlIntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```python
saml2_sp_initiated_login_page_label: str
```

- *Type:* str

The string containing the label to display after the Log In With button on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.63.0/docs/resources/saml_integration#saml2_sp_initiated_login_page_label SamlIntegration#saml2_sp_initiated_login_page_label}

---



