# `saml2Integration` Submodule <a name="`saml2Integration` Submodule" id="@cdktf/provider-snowflake.saml2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Saml2Integration <a name="Saml2Integration" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration snowflake_saml2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2Integration(
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
  allowed_email_patterns: typing.List[str] = None,
  allowed_user_domains: typing.List[str] = None,
  comment: str = None,
  enabled: str = None,
  id: str = None,
  saml2_enable_sp_initiated: str = None,
  saml2_force_authn: str = None,
  saml2_post_logout_redirect_url: str = None,
  saml2_requested_nameid_format: str = None,
  saml2_sign_request: str = None,
  saml2_snowflake_acs_url: str = None,
  saml2_snowflake_issuer_url: str = None,
  saml2_sp_initiated_login_page_label: str = None,
  timeouts: Saml2IntegrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2Issuer">saml2_issuer</a></code> | <code>str</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2Provider">saml2_provider</a></code> | <code>str</code> | The string describing the IdP. Valid options are: `OKTA` \| `ADFS` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SsoUrl">saml2_sso_url</a></code> | <code>str</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2X509Cert">saml2_x509_cert</a></code> | <code>str</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.allowedEmailPatterns">allowed_email_patterns</a></code> | <code>typing.List[str]</code> | A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.allowedUserDomains">allowed_user_domains</a></code> | <code>typing.List[str]</code> | A list of email domains that can authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.enabled">enabled</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#id Saml2Integration#id}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2ForceAuthn">saml2_force_authn</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code>str</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code>str</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SignRequest">saml2_sign_request</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code>str</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code>str</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code>str</code> | The string containing the label to display after the Log In With button on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#name Saml2Integration#name}

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2Issuer"></a>

- *Type:* str

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_issuer Saml2Integration#saml2_issuer}

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2Provider"></a>

- *Type:* str

The string describing the IdP. Valid options are: `OKTA` | `ADFS` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_provider Saml2Integration#saml2_provider}

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SsoUrl"></a>

- *Type:* str

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_sso_url Saml2Integration#saml2_sso_url}

---

##### `saml2_x509_cert`<sup>Required</sup> <a name="saml2_x509_cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2X509Cert"></a>

- *Type:* str

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_x509_cert Saml2Integration#saml2_x509_cert}

---

##### `allowed_email_patterns`<sup>Optional</sup> <a name="allowed_email_patterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.allowedEmailPatterns"></a>

- *Type:* typing.List[str]

A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#allowed_email_patterns Saml2Integration#allowed_email_patterns}

---

##### `allowed_user_domains`<sup>Optional</sup> <a name="allowed_user_domains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.allowedUserDomains"></a>

- *Type:* typing.List[str]

A list of email domains that can authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#allowed_user_domains Saml2Integration#allowed_user_domains}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#comment Saml2Integration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.enabled"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#enabled Saml2Integration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#id Saml2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2_enable_sp_initiated`<sup>Optional</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2EnableSpInitiated"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in With button on the login page. FALSE: does not display the Log in With button on the login page. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_enable_sp_initiated Saml2Integration#saml2_enable_sp_initiated}

---

##### `saml2_force_authn`<sup>Optional</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2ForceAuthn"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_force_authn Saml2Integration#saml2_force_authn}

---

##### `saml2_post_logout_redirect_url`<sup>Optional</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2PostLogoutRedirectUrl"></a>

- *Type:* str

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_post_logout_redirect_url Saml2Integration#saml2_post_logout_redirect_url}

---

##### `saml2_requested_nameid_format`<sup>Optional</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2RequestedNameidFormat"></a>

- *Type:* str

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` | `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` | `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` | `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` | `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_requested_nameid_format Saml2Integration#saml2_requested_nameid_format}

---

##### `saml2_sign_request`<sup>Optional</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SignRequest"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_sign_request Saml2Integration#saml2_sign_request}

---

##### `saml2_snowflake_acs_url`<sup>Optional</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SnowflakeAcsUrl"></a>

- *Type:* str

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_snowflake_acs_url Saml2Integration#saml2_snowflake_acs_url}

---

##### `saml2_snowflake_issuer_url`<sup>Optional</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SnowflakeIssuerUrl"></a>

- *Type:* str

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_snowflake_issuer_url Saml2Integration#saml2_snowflake_issuer_url}

---

##### `saml2_sp_initiated_login_page_label`<sup>Optional</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.saml2SpInitiatedLoginPageLabel"></a>

- *Type:* str

The string containing the label to display after the Log In With button on the login page.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_sp_initiated_login_page_label Saml2Integration#saml2_sp_initiated_login_page_label}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#timeouts Saml2Integration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns">reset_allowed_email_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains">reset_allowed_user_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated">reset_saml2_enable_sp_initiated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn">reset_saml2_force_authn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl">reset_saml2_post_logout_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat">reset_saml2_requested_nameid_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest">reset_saml2_sign_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl">reset_saml2_snowflake_acs_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl">reset_saml2_snowflake_issuer_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel">reset_saml2_sp_initiated_login_page_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#create Saml2Integration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#delete Saml2Integration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#read Saml2Integration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#update Saml2Integration#update}.

---

##### `reset_allowed_email_patterns` <a name="reset_allowed_email_patterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedEmailPatterns"></a>

```python
def reset_allowed_email_patterns() -> None
```

##### `reset_allowed_user_domains` <a name="reset_allowed_user_domains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetAllowedUserDomains"></a>

```python
def reset_allowed_user_domains() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_saml2_enable_sp_initiated` <a name="reset_saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2EnableSpInitiated"></a>

```python
def reset_saml2_enable_sp_initiated() -> None
```

##### `reset_saml2_force_authn` <a name="reset_saml2_force_authn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2ForceAuthn"></a>

```python
def reset_saml2_force_authn() -> None
```

##### `reset_saml2_post_logout_redirect_url` <a name="reset_saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2PostLogoutRedirectUrl"></a>

```python
def reset_saml2_post_logout_redirect_url() -> None
```

##### `reset_saml2_requested_nameid_format` <a name="reset_saml2_requested_nameid_format" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2RequestedNameidFormat"></a>

```python
def reset_saml2_requested_nameid_format() -> None
```

##### `reset_saml2_sign_request` <a name="reset_saml2_sign_request" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SignRequest"></a>

```python
def reset_saml2_sign_request() -> None
```

##### `reset_saml2_snowflake_acs_url` <a name="reset_saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeAcsUrl"></a>

```python
def reset_saml2_snowflake_acs_url() -> None
```

##### `reset_saml2_snowflake_issuer_url` <a name="reset_saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SnowflakeIssuerUrl"></a>

```python
def reset_saml2_snowflake_issuer_url() -> None
```

##### `reset_saml2_sp_initiated_login_page_label` <a name="reset_saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetSaml2SpInitiatedLoginPageLabel"></a>

```python
def reset_saml2_sp_initiated_login_page_label() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2Integration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2Integration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2Integration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2Integration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Saml2Integration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Saml2Integration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Saml2Integration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput">allowed_email_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput">allowed_user_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput">enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput">saml2_enable_sp_initiated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput">saml2_force_authn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput">saml2_issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput">saml2_post_logout_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput">saml2_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput">saml2_requested_nameid_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput">saml2_sign_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput">saml2_snowflake_acs_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput">saml2_snowflake_issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput">saml2_sp_initiated_login_page_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput">saml2_sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput">saml2_x509_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns">allowed_email_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains">allowed_user_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled">enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn">saml2_force_authn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer">saml2_issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider">saml2_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest">saml2_sign_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl">saml2_sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert">saml2_x509_cert</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.describeOutput"></a>

```python
describe_output: Saml2IntegrationDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList">Saml2IntegrationDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.showOutput"></a>

```python
show_output: Saml2IntegrationShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList">Saml2IntegrationShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeouts"></a>

```python
timeouts: Saml2IntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference">Saml2IntegrationTimeoutsOutputReference</a>

---

##### `allowed_email_patterns_input`<sup>Optional</sup> <a name="allowed_email_patterns_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatternsInput"></a>

```python
allowed_email_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_user_domains_input`<sup>Optional</sup> <a name="allowed_user_domains_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomainsInput"></a>

```python
allowed_user_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabledInput"></a>

```python
enabled_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `saml2_enable_sp_initiated_input`<sup>Optional</sup> <a name="saml2_enable_sp_initiated_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiatedInput"></a>

```python
saml2_enable_sp_initiated_input: str
```

- *Type:* str

---

##### `saml2_force_authn_input`<sup>Optional</sup> <a name="saml2_force_authn_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthnInput"></a>

```python
saml2_force_authn_input: str
```

- *Type:* str

---

##### `saml2_issuer_input`<sup>Optional</sup> <a name="saml2_issuer_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2IssuerInput"></a>

```python
saml2_issuer_input: str
```

- *Type:* str

---

##### `saml2_post_logout_redirect_url_input`<sup>Optional</sup> <a name="saml2_post_logout_redirect_url_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrlInput"></a>

```python
saml2_post_logout_redirect_url_input: str
```

- *Type:* str

---

##### `saml2_provider_input`<sup>Optional</sup> <a name="saml2_provider_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ProviderInput"></a>

```python
saml2_provider_input: str
```

- *Type:* str

---

##### `saml2_requested_nameid_format_input`<sup>Optional</sup> <a name="saml2_requested_nameid_format_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormatInput"></a>

```python
saml2_requested_nameid_format_input: str
```

- *Type:* str

---

##### `saml2_sign_request_input`<sup>Optional</sup> <a name="saml2_sign_request_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequestInput"></a>

```python
saml2_sign_request_input: str
```

- *Type:* str

---

##### `saml2_snowflake_acs_url_input`<sup>Optional</sup> <a name="saml2_snowflake_acs_url_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrlInput"></a>

```python
saml2_snowflake_acs_url_input: str
```

- *Type:* str

---

##### `saml2_snowflake_issuer_url_input`<sup>Optional</sup> <a name="saml2_snowflake_issuer_url_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrlInput"></a>

```python
saml2_snowflake_issuer_url_input: str
```

- *Type:* str

---

##### `saml2_sp_initiated_login_page_label_input`<sup>Optional</sup> <a name="saml2_sp_initiated_login_page_label_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabelInput"></a>

```python
saml2_sp_initiated_login_page_label_input: str
```

- *Type:* str

---

##### `saml2_sso_url_input`<sup>Optional</sup> <a name="saml2_sso_url_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrlInput"></a>

```python
saml2_sso_url_input: str
```

- *Type:* str

---

##### `saml2_x509_cert_input`<sup>Optional</sup> <a name="saml2_x509_cert_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509CertInput"></a>

```python
saml2_x509_cert_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Saml2IntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>]

---

##### `allowed_email_patterns`<sup>Required</sup> <a name="allowed_email_patterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedEmailPatterns"></a>

```python
allowed_email_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_user_domains`<sup>Required</sup> <a name="allowed_user_domains" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.allowedUserDomains"></a>

```python
allowed_user_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.enabled"></a>

```python
enabled: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `saml2_enable_sp_initiated`<sup>Required</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2EnableSpInitiated"></a>

```python
saml2_enable_sp_initiated: str
```

- *Type:* str

---

##### `saml2_force_authn`<sup>Required</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2ForceAuthn"></a>

```python
saml2_force_authn: str
```

- *Type:* str

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Issuer"></a>

```python
saml2_issuer: str
```

- *Type:* str

---

##### `saml2_post_logout_redirect_url`<sup>Required</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2PostLogoutRedirectUrl"></a>

```python
saml2_post_logout_redirect_url: str
```

- *Type:* str

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2Provider"></a>

```python
saml2_provider: str
```

- *Type:* str

---

##### `saml2_requested_nameid_format`<sup>Required</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2RequestedNameidFormat"></a>

```python
saml2_requested_nameid_format: str
```

- *Type:* str

---

##### `saml2_sign_request`<sup>Required</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SignRequest"></a>

```python
saml2_sign_request: str
```

- *Type:* str

---

##### `saml2_snowflake_acs_url`<sup>Required</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeAcsUrl"></a>

```python
saml2_snowflake_acs_url: str
```

- *Type:* str

---

##### `saml2_snowflake_issuer_url`<sup>Required</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SnowflakeIssuerUrl"></a>

```python
saml2_snowflake_issuer_url: str
```

- *Type:* str

---

##### `saml2_sp_initiated_login_page_label`<sup>Required</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SpInitiatedLoginPageLabel"></a>

```python
saml2_sp_initiated_login_page_label: str
```

- *Type:* str

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2SsoUrl"></a>

```python
saml2_sso_url: str
```

- *Type:* str

---

##### `saml2_x509_cert`<sup>Required</sup> <a name="saml2_x509_cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.saml2X509Cert"></a>

```python
saml2_x509_cert: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.saml2Integration.Saml2Integration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Saml2IntegrationConfig <a name="Saml2IntegrationConfig" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationConfig(
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
  allowed_email_patterns: typing.List[str] = None,
  allowed_user_domains: typing.List[str] = None,
  comment: str = None,
  enabled: str = None,
  id: str = None,
  saml2_enable_sp_initiated: str = None,
  saml2_force_authn: str = None,
  saml2_post_logout_redirect_url: str = None,
  saml2_requested_nameid_format: str = None,
  saml2_sign_request: str = None,
  saml2_snowflake_acs_url: str = None,
  saml2_snowflake_issuer_url: str = None,
  saml2_sp_initiated_login_page_label: str = None,
  timeouts: Saml2IntegrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the SAML2 integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer">saml2_issuer</a></code> | <code>str</code> | The string containing the IdP EntityID / Issuer. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider">saml2_provider</a></code> | <code>str</code> | The string describing the IdP. Valid options are: `OKTA` \| `ADFS` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl">saml2_sso_url</a></code> | <code>str</code> | The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert">saml2_x509_cert</a></code> | <code>str</code> | The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns">allowed_email_patterns</a></code> | <code>typing.List[str]</code> | A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains">allowed_user_domains</a></code> | <code>typing.List[str]</code> | A list of email domains that can authenticate with a SAML2 security integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled">enabled</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#id Saml2Integration#id}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn">saml2_force_authn</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code>str</code> | The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code>str</code> | The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` \| `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` \| `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest">saml2_sign_request</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code>str</code> | The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code>str</code> | The string containing the EntityID / Issuer for the Snowflake service provider. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code>str</code> | The string containing the label to display after the Log In With button on the login page. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the SAML2 integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#name Saml2Integration#name}

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Issuer"></a>

```python
saml2_issuer: str
```

- *Type:* str

The string containing the IdP EntityID / Issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_issuer Saml2Integration#saml2_issuer}

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2Provider"></a>

```python
saml2_provider: str
```

- *Type:* str

The string describing the IdP. Valid options are: `OKTA` | `ADFS` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_provider Saml2Integration#saml2_provider}

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SsoUrl"></a>

```python
saml2_sso_url: str
```

- *Type:* str

The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_sso_url Saml2Integration#saml2_sso_url}

---

##### `saml2_x509_cert`<sup>Required</sup> <a name="saml2_x509_cert" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2X509Cert"></a>

```python
saml2_x509_cert: str
```

- *Type:* str

The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_x509_cert Saml2Integration#saml2_x509_cert}

---

##### `allowed_email_patterns`<sup>Optional</sup> <a name="allowed_email_patterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedEmailPatterns"></a>

```python
allowed_email_patterns: typing.List[str]
```

- *Type:* typing.List[str]

A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#allowed_email_patterns Saml2Integration#allowed_email_patterns}

---

##### `allowed_user_domains`<sup>Optional</sup> <a name="allowed_user_domains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.allowedUserDomains"></a>

```python
allowed_user_domains: typing.List[str]
```

- *Type:* typing.List[str]

A list of email domains that can authenticate with a SAML2 security integration.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#allowed_user_domains Saml2Integration#allowed_user_domains}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#comment Saml2Integration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.enabled"></a>

```python
enabled: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#enabled Saml2Integration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#id Saml2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml2_enable_sp_initiated`<sup>Optional</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2EnableSpInitiated"></a>

```python
saml2_enable_sp_initiated: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page.

TRUE: displays the Log in With button on the login page. FALSE: does not display the Log in With button on the login page. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_enable_sp_initiated Saml2Integration#saml2_enable_sp_initiated}

---

##### `saml2_force_authn`<sup>Optional</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2ForceAuthn"></a>

```python
saml2_force_authn: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake.

When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_force_authn Saml2Integration#saml2_force_authn}

---

##### `saml2_post_logout_redirect_url`<sup>Optional</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2PostLogoutRedirectUrl"></a>

```python
saml2_post_logout_redirect_url: str
```

- *Type:* str

The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface.

Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_post_logout_redirect_url Saml2Integration#saml2_post_logout_redirect_url}

---

##### `saml2_requested_nameid_format`<sup>Optional</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2RequestedNameidFormat"></a>

```python
saml2_requested_nameid_format: str
```

- *Type:* str

The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` | `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` | `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` | `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` | `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_requested_nameid_format Saml2Integration#saml2_requested_nameid_format}

---

##### `saml2_sign_request`<sup>Optional</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SignRequest"></a>

```python
saml2_sign_request: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed.

TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_sign_request Saml2Integration#saml2_sign_request}

---

##### `saml2_snowflake_acs_url`<sup>Optional</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeAcsUrl"></a>

```python
saml2_snowflake_acs_url: str
```

- *Type:* str

The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake.

This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_snowflake_acs_url Saml2Integration#saml2_snowflake_acs_url}

---

##### `saml2_snowflake_issuer_url`<sup>Optional</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SnowflakeIssuerUrl"></a>

```python
saml2_snowflake_issuer_url: str
```

- *Type:* str

The string containing the EntityID / Issuer for the Snowflake service provider.

If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_snowflake_issuer_url Saml2Integration#saml2_snowflake_issuer_url}

---

##### `saml2_sp_initiated_login_page_label`<sup>Optional</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.saml2SpInitiatedLoginPageLabel"></a>

```python
saml2_sp_initiated_login_page_label: str
```

- *Type:* str

The string containing the label to display after the Log In With button on the login page.

If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#saml2_sp_initiated_login_page_label Saml2Integration#saml2_sp_initiated_login_page_label}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationConfig.property.timeouts"></a>

```python
timeouts: Saml2IntegrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#timeouts Saml2Integration#timeouts}

---

### Saml2IntegrationDescribeOutput <a name="Saml2IntegrationDescribeOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutput()
```


### Saml2IntegrationDescribeOutputAllowedEmailPatterns <a name="Saml2IntegrationDescribeOutputAllowedEmailPatterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns()
```


### Saml2IntegrationDescribeOutputAllowedUserDomains <a name="Saml2IntegrationDescribeOutputAllowedUserDomains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains()
```


### Saml2IntegrationDescribeOutputComment <a name="Saml2IntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputComment()
```


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed()
```


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiated <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated()
```


### Saml2IntegrationDescribeOutputSaml2ForceAuthn <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn()
```


### Saml2IntegrationDescribeOutputSaml2Issuer <a name="Saml2IntegrationDescribeOutputSaml2Issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer()
```


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl()
```


### Saml2IntegrationDescribeOutputSaml2Provider <a name="Saml2IntegrationDescribeOutputSaml2Provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider()
```


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat()
```


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed()
```


### Saml2IntegrationDescribeOutputSaml2SignRequest <a name="Saml2IntegrationDescribeOutputSaml2SignRequest" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest()
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl()
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl()
```


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata()
```


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel()
```


### Saml2IntegrationDescribeOutputSaml2SsoUrl <a name="Saml2IntegrationDescribeOutputSaml2SsoUrl" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl()
```


### Saml2IntegrationShowOutput <a name="Saml2IntegrationShowOutput" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationShowOutput()
```


### Saml2IntegrationTimeouts <a name="Saml2IntegrationTimeouts" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#create Saml2Integration#create}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#delete Saml2Integration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#read Saml2Integration#read}. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#update Saml2Integration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#create Saml2Integration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#delete Saml2Integration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#read Saml2Integration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/saml2_integration#update Saml2Integration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Saml2IntegrationDescribeOutputAllowedEmailPatternsList <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputAllowedEmailPatterns
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatterns">Saml2IntegrationDescribeOutputAllowedEmailPatterns</a>

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsList <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference <a name="Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputAllowedUserDomains
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomains">Saml2IntegrationDescribeOutputAllowedUserDomains</a>

---


### Saml2IntegrationDescribeOutputCommentList <a name="Saml2IntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputCommentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputCommentOutputReference <a name="Saml2IntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputComment
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputComment">Saml2IntegrationDescribeOutputComment</a>

---


### Saml2IntegrationDescribeOutputList <a name="Saml2IntegrationDescribeOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputOutputReference <a name="Saml2IntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns">allowed_email_patterns</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains">allowed_user_domains</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed">saml2_digest_methods_used</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated">saml2_enable_sp_initiated</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn">saml2_force_authn</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer">saml2_issuer</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl">saml2_post_logout_redirect_url</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider">saml2_provider</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat">saml2_requested_nameid_format</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed">saml2_signature_methods_used</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest">saml2_sign_request</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl">saml2_snowflake_acs_url</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl">saml2_snowflake_issuer_url</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata">saml2_snowflake_metadata</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel">saml2_sp_initiated_login_page_label</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl">saml2_sso_url</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_email_patterns`<sup>Required</sup> <a name="allowed_email_patterns" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedEmailPatterns"></a>

```python
allowed_email_patterns: Saml2IntegrationDescribeOutputAllowedEmailPatternsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedEmailPatternsList">Saml2IntegrationDescribeOutputAllowedEmailPatternsList</a>

---

##### `allowed_user_domains`<sup>Required</sup> <a name="allowed_user_domains" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.allowedUserDomains"></a>

```python
allowed_user_domains: Saml2IntegrationDescribeOutputAllowedUserDomainsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputAllowedUserDomainsList">Saml2IntegrationDescribeOutputAllowedUserDomainsList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.comment"></a>

```python
comment: Saml2IntegrationDescribeOutputCommentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputCommentList">Saml2IntegrationDescribeOutputCommentList</a>

---

##### `saml2_digest_methods_used`<sup>Required</sup> <a name="saml2_digest_methods_used" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2DigestMethodsUsed"></a>

```python
saml2_digest_methods_used: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList</a>

---

##### `saml2_enable_sp_initiated`<sup>Required</sup> <a name="saml2_enable_sp_initiated" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2EnableSpInitiated"></a>

```python
saml2_enable_sp_initiated: Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList">Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList</a>

---

##### `saml2_force_authn`<sup>Required</sup> <a name="saml2_force_authn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2ForceAuthn"></a>

```python
saml2_force_authn: Saml2IntegrationDescribeOutputSaml2ForceAuthnList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList">Saml2IntegrationDescribeOutputSaml2ForceAuthnList</a>

---

##### `saml2_issuer`<sup>Required</sup> <a name="saml2_issuer" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Issuer"></a>

```python
saml2_issuer: Saml2IntegrationDescribeOutputSaml2IssuerList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList">Saml2IntegrationDescribeOutputSaml2IssuerList</a>

---

##### `saml2_post_logout_redirect_url`<sup>Required</sup> <a name="saml2_post_logout_redirect_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2PostLogoutRedirectUrl"></a>

```python
saml2_post_logout_redirect_url: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList</a>

---

##### `saml2_provider`<sup>Required</sup> <a name="saml2_provider" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2Provider"></a>

```python
saml2_provider: Saml2IntegrationDescribeOutputSaml2ProviderList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList">Saml2IntegrationDescribeOutputSaml2ProviderList</a>

---

##### `saml2_requested_nameid_format`<sup>Required</sup> <a name="saml2_requested_nameid_format" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2RequestedNameidFormat"></a>

```python
saml2_requested_nameid_format: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList</a>

---

##### `saml2_signature_methods_used`<sup>Required</sup> <a name="saml2_signature_methods_used" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignatureMethodsUsed"></a>

```python
saml2_signature_methods_used: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList</a>

---

##### `saml2_sign_request`<sup>Required</sup> <a name="saml2_sign_request" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SignRequest"></a>

```python
saml2_sign_request: Saml2IntegrationDescribeOutputSaml2SignRequestList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList">Saml2IntegrationDescribeOutputSaml2SignRequestList</a>

---

##### `saml2_snowflake_acs_url`<sup>Required</sup> <a name="saml2_snowflake_acs_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeAcsUrl"></a>

```python
saml2_snowflake_acs_url: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList</a>

---

##### `saml2_snowflake_issuer_url`<sup>Required</sup> <a name="saml2_snowflake_issuer_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeIssuerUrl"></a>

```python
saml2_snowflake_issuer_url: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList</a>

---

##### `saml2_snowflake_metadata`<sup>Required</sup> <a name="saml2_snowflake_metadata" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SnowflakeMetadata"></a>

```python
saml2_snowflake_metadata: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList</a>

---

##### `saml2_sp_initiated_login_page_label`<sup>Required</sup> <a name="saml2_sp_initiated_login_page_label" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SpInitiatedLoginPageLabel"></a>

```python
saml2_sp_initiated_login_page_label: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList</a>

---

##### `saml2_sso_url`<sup>Required</sup> <a name="saml2_sso_url" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.saml2SsoUrl"></a>

```python
saml2_sso_url: Saml2IntegrationDescribeOutputSaml2SsoUrlList
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList">Saml2IntegrationDescribeOutputSaml2SsoUrlList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutput">Saml2IntegrationDescribeOutput</a>

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed">Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2EnableSpInitiated
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2EnableSpInitiated">Saml2IntegrationDescribeOutputSaml2EnableSpInitiated</a>

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnList <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2ForceAuthn
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ForceAuthn">Saml2IntegrationDescribeOutputSaml2ForceAuthn</a>

---


### Saml2IntegrationDescribeOutputSaml2IssuerList <a name="Saml2IntegrationDescribeOutputSaml2IssuerList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2IssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2IssuerOutputReference <a name="Saml2IntegrationDescribeOutputSaml2IssuerOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2IssuerOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2Issuer
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Issuer">Saml2IntegrationDescribeOutputSaml2Issuer</a>

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl">Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2ProviderList <a name="Saml2IntegrationDescribeOutputSaml2ProviderList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2ProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2ProviderOutputReference <a name="Saml2IntegrationDescribeOutputSaml2ProviderOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2ProviderOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2Provider
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2Provider">Saml2IntegrationDescribeOutputSaml2Provider</a>

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference <a name="Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat">Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat</a>

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed">Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed</a>

---


### Saml2IntegrationDescribeOutputSaml2SignRequestList <a name="Saml2IntegrationDescribeOutputSaml2SignRequestList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SignRequest
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SignRequest">Saml2IntegrationDescribeOutputSaml2SignRequest</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl">Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl</a>

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata">Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata</a>

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel">Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel</a>

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlList <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference <a name="Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationDescribeOutputSaml2SsoUrl
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationDescribeOutputSaml2SsoUrl">Saml2IntegrationDescribeOutputSaml2SsoUrl</a>

---


### Saml2IntegrationShowOutputList <a name="Saml2IntegrationShowOutputList" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Saml2IntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### Saml2IntegrationShowOutputOutputReference <a name="Saml2IntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: Saml2IntegrationShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationShowOutput">Saml2IntegrationShowOutput</a>

---


### Saml2IntegrationTimeoutsOutputReference <a name="Saml2IntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import saml2_integration

saml2Integration.Saml2IntegrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Saml2IntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.saml2Integration.Saml2IntegrationTimeouts">Saml2IntegrationTimeouts</a>]

---



