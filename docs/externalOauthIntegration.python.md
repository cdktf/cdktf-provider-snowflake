# `snowflake_external_oauth_integration`

Refer to the Terraform Registory for docs: [`snowflake_external_oauth_integration`](https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration).

# `externalOauthIntegration` Submodule <a name="`externalOauthIntegration` Submodule" id="@cdktf/provider-snowflake.externalOauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalOauthIntegration <a name="ExternalOauthIntegration" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration snowflake_external_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_oauth_integration

externalOauthIntegration.ExternalOauthIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  issuer: str,
  name: str,
  snowflake_user_mapping_attribute: str,
  token_user_mapping_claims: typing.List[str],
  type: str,
  allowed_roles: typing.List[str] = None,
  any_role_mode: str = None,
  audience_urls: typing.List[str] = None,
  blocked_roles: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  jws_keys_urls: typing.List[str] = None,
  rsa_public_key: str = None,
  rsa_public_key2: str = None,
  scope_delimiter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to initiate operation of the integration or suspend it. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.snowflakeUserMappingAttribute">snowflake_user_mapping_attribute</a></code> | <code>str</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.tokenUserMappingClaims">token_user_mapping_claims</a></code> | <code>typing.List[str]</code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.anyRoleMode">any_role_mode</a></code> | <code>str</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.audienceUrls">audience_urls</a></code> | <code>typing.List[str]</code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.blockedRoles">blocked_roles</a></code> | <code>typing.List[str]</code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.jwsKeysUrls">jws_keys_urls</a></code> | <code>typing.List[str]</code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey2">rsa_public_key2</a></code> | <code>str</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scopeDelimiter">scope_delimiter</a></code> | <code>str</code> | Specifies the scope delimiter in the authorization token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to initiate operation of the integration or suspend it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.issuer"></a>

- *Type:* str

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#issuer ExternalOauthIntegration#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `snowflake_user_mapping_attribute`<sup>Required</sup> <a name="snowflake_user_mapping_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.snowflakeUserMappingAttribute"></a>

- *Type:* str

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#snowflake_user_mapping_attribute ExternalOauthIntegration#snowflake_user_mapping_attribute}

---

##### `token_user_mapping_claims`<sup>Required</sup> <a name="token_user_mapping_claims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.tokenUserMappingClaims"></a>

- *Type:* typing.List[str]

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#token_user_mapping_claims ExternalOauthIntegration#token_user_mapping_claims}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.type"></a>

- *Type:* str

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#type ExternalOauthIntegration#type}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

Specifies the list of roles that the client can set as the primary role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#allowed_roles ExternalOauthIntegration#allowed_roles}

---

##### `any_role_mode`<sup>Optional</sup> <a name="any_role_mode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.anyRoleMode"></a>

- *Type:* str

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#any_role_mode ExternalOauthIntegration#any_role_mode}

---

##### `audience_urls`<sup>Optional</sup> <a name="audience_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.audienceUrls"></a>

- *Type:* typing.List[str]

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#audience_urls ExternalOauthIntegration#audience_urls}

---

##### `blocked_roles`<sup>Optional</sup> <a name="blocked_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.blockedRoles"></a>

- *Type:* typing.List[str]

Specifies the list of roles that a client cannot set as the primary role.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#blocked_roles ExternalOauthIntegration#blocked_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jws_keys_urls`<sup>Optional</sup> <a name="jws_keys_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.jwsKeysUrls"></a>

- *Type:* typing.List[str]

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#jws_keys_urls ExternalOauthIntegration#jws_keys_urls}

---

##### `rsa_public_key`<sup>Optional</sup> <a name="rsa_public_key" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey"></a>

- *Type:* str

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#rsa_public_key ExternalOauthIntegration#rsa_public_key}

---

##### `rsa_public_key2`<sup>Optional</sup> <a name="rsa_public_key2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey2"></a>

- *Type:* str

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#rsa_public_key_2 ExternalOauthIntegration#rsa_public_key_2}

---

##### `scope_delimiter`<sup>Optional</sup> <a name="scope_delimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scopeDelimiter"></a>

- *Type:* str

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#scope_delimiter ExternalOauthIntegration#scope_delimiter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAnyRoleMode">reset_any_role_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAudienceUrls">reset_audience_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetBlockedRoles">reset_blocked_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetJwsKeysUrls">reset_jws_keys_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey">reset_rsa_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey2">reset_rsa_public_key2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeDelimiter">reset_scope_delimiter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_any_role_mode` <a name="reset_any_role_mode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAnyRoleMode"></a>

```python
def reset_any_role_mode() -> None
```

##### `reset_audience_urls` <a name="reset_audience_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAudienceUrls"></a>

```python
def reset_audience_urls() -> None
```

##### `reset_blocked_roles` <a name="reset_blocked_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetBlockedRoles"></a>

```python
def reset_blocked_roles() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_jws_keys_urls` <a name="reset_jws_keys_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetJwsKeysUrls"></a>

```python
def reset_jws_keys_urls() -> None
```

##### `reset_rsa_public_key` <a name="reset_rsa_public_key" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey"></a>

```python
def reset_rsa_public_key() -> None
```

##### `reset_rsa_public_key2` <a name="reset_rsa_public_key2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey2"></a>

```python
def reset_rsa_public_key2() -> None
```

##### `reset_scope_delimiter` <a name="reset_scope_delimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeDelimiter"></a>

```python
def reset_scope_delimiter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import external_oauth_integration

externalOauthIntegration.ExternalOauthIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import external_oauth_integration

externalOauthIntegration.ExternalOauthIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import external_oauth_integration

externalOauthIntegration.ExternalOauthIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleModeInput">any_role_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrlsInput">audience_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRolesInput">blocked_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrlsInput">jws_keys_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2Input">rsa_public_key2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKeyInput">rsa_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiterInput">scope_delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttributeInput">snowflake_user_mapping_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaimsInput">token_user_mapping_claims_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleMode">any_role_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrls">audience_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRoles">blocked_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrls">jws_keys_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2">rsa_public_key2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiter">scope_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttribute">snowflake_user_mapping_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaims">token_user_mapping_claims</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_role_mode_input`<sup>Optional</sup> <a name="any_role_mode_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleModeInput"></a>

```python
any_role_mode_input: str
```

- *Type:* str

---

##### `audience_urls_input`<sup>Optional</sup> <a name="audience_urls_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrlsInput"></a>

```python
audience_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_roles_input`<sup>Optional</sup> <a name="blocked_roles_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRolesInput"></a>

```python
blocked_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jws_keys_urls_input`<sup>Optional</sup> <a name="jws_keys_urls_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrlsInput"></a>

```python
jws_keys_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rsa_public_key2_input`<sup>Optional</sup> <a name="rsa_public_key2_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2Input"></a>

```python
rsa_public_key2_input: str
```

- *Type:* str

---

##### `rsa_public_key_input`<sup>Optional</sup> <a name="rsa_public_key_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKeyInput"></a>

```python
rsa_public_key_input: str
```

- *Type:* str

---

##### `scope_delimiter_input`<sup>Optional</sup> <a name="scope_delimiter_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiterInput"></a>

```python
scope_delimiter_input: str
```

- *Type:* str

---

##### `snowflake_user_mapping_attribute_input`<sup>Optional</sup> <a name="snowflake_user_mapping_attribute_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttributeInput"></a>

```python
snowflake_user_mapping_attribute_input: str
```

- *Type:* str

---

##### `token_user_mapping_claims_input`<sup>Optional</sup> <a name="token_user_mapping_claims_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaimsInput"></a>

```python
token_user_mapping_claims_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_role_mode`<sup>Required</sup> <a name="any_role_mode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleMode"></a>

```python
any_role_mode: str
```

- *Type:* str

---

##### `audience_urls`<sup>Required</sup> <a name="audience_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrls"></a>

```python
audience_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `blocked_roles`<sup>Required</sup> <a name="blocked_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRoles"></a>

```python
blocked_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jws_keys_urls`<sup>Required</sup> <a name="jws_keys_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrls"></a>

```python
jws_keys_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rsa_public_key`<sup>Required</sup> <a name="rsa_public_key" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey"></a>

```python
rsa_public_key: str
```

- *Type:* str

---

##### `rsa_public_key2`<sup>Required</sup> <a name="rsa_public_key2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2"></a>

```python
rsa_public_key2: str
```

- *Type:* str

---

##### `scope_delimiter`<sup>Required</sup> <a name="scope_delimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiter"></a>

```python
scope_delimiter: str
```

- *Type:* str

---

##### `snowflake_user_mapping_attribute`<sup>Required</sup> <a name="snowflake_user_mapping_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttribute"></a>

```python
snowflake_user_mapping_attribute: str
```

- *Type:* str

---

##### `token_user_mapping_claims`<sup>Required</sup> <a name="token_user_mapping_claims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaims"></a>

```python
token_user_mapping_claims: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalOauthIntegrationConfig <a name="ExternalOauthIntegrationConfig" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_oauth_integration

externalOauthIntegration.ExternalOauthIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  issuer: str,
  name: str,
  snowflake_user_mapping_attribute: str,
  token_user_mapping_claims: typing.List[str],
  type: str,
  allowed_roles: typing.List[str] = None,
  any_role_mode: str = None,
  audience_urls: typing.List[str] = None,
  blocked_roles: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  jws_keys_urls: typing.List[str] = None,
  rsa_public_key: str = None,
  rsa_public_key2: str = None,
  scope_delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to initiate operation of the integration or suspend it. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.issuer">issuer</a></code> | <code>str</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.snowflakeUserMappingAttribute">snowflake_user_mapping_attribute</a></code> | <code>str</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.tokenUserMappingClaims">token_user_mapping_claims</a></code> | <code>typing.List[str]</code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.type">type</a></code> | <code>str</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.anyRoleMode">any_role_mode</a></code> | <code>str</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.audienceUrls">audience_urls</a></code> | <code>typing.List[str]</code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.blockedRoles">blocked_roles</a></code> | <code>typing.List[str]</code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.jwsKeysUrls">jws_keys_urls</a></code> | <code>typing.List[str]</code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey2">rsa_public_key2</a></code> | <code>str</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeDelimiter">scope_delimiter</a></code> | <code>str</code> | Specifies the scope delimiter in the authorization token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to initiate operation of the integration or suspend it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#issuer ExternalOauthIntegration#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `snowflake_user_mapping_attribute`<sup>Required</sup> <a name="snowflake_user_mapping_attribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.snowflakeUserMappingAttribute"></a>

```python
snowflake_user_mapping_attribute: str
```

- *Type:* str

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#snowflake_user_mapping_attribute ExternalOauthIntegration#snowflake_user_mapping_attribute}

---

##### `token_user_mapping_claims`<sup>Required</sup> <a name="token_user_mapping_claims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.tokenUserMappingClaims"></a>

```python
token_user_mapping_claims: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#token_user_mapping_claims ExternalOauthIntegration#token_user_mapping_claims}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#type ExternalOauthIntegration#type}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of roles that the client can set as the primary role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#allowed_roles ExternalOauthIntegration#allowed_roles}

---

##### `any_role_mode`<sup>Optional</sup> <a name="any_role_mode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.anyRoleMode"></a>

```python
any_role_mode: str
```

- *Type:* str

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#any_role_mode ExternalOauthIntegration#any_role_mode}

---

##### `audience_urls`<sup>Optional</sup> <a name="audience_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.audienceUrls"></a>

```python
audience_urls: typing.List[str]
```

- *Type:* typing.List[str]

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#audience_urls ExternalOauthIntegration#audience_urls}

---

##### `blocked_roles`<sup>Optional</sup> <a name="blocked_roles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.blockedRoles"></a>

```python
blocked_roles: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of roles that a client cannot set as the primary role.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#blocked_roles ExternalOauthIntegration#blocked_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jws_keys_urls`<sup>Optional</sup> <a name="jws_keys_urls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.jwsKeysUrls"></a>

```python
jws_keys_urls: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#jws_keys_urls ExternalOauthIntegration#jws_keys_urls}

---

##### `rsa_public_key`<sup>Optional</sup> <a name="rsa_public_key" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey"></a>

```python
rsa_public_key: str
```

- *Type:* str

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#rsa_public_key ExternalOauthIntegration#rsa_public_key}

---

##### `rsa_public_key2`<sup>Optional</sup> <a name="rsa_public_key2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey2"></a>

```python
rsa_public_key2: str
```

- *Type:* str

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#rsa_public_key_2 ExternalOauthIntegration#rsa_public_key_2}

---

##### `scope_delimiter`<sup>Optional</sup> <a name="scope_delimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeDelimiter"></a>

```python
scope_delimiter: str
```

- *Type:* str

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_oauth_integration#scope_delimiter ExternalOauthIntegration#scope_delimiter}

---



