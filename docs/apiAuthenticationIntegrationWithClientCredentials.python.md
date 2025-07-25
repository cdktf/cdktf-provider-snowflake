# `apiAuthenticationIntegrationWithClientCredentials` Submodule <a name="`apiAuthenticationIntegrationWithClientCredentials` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithClientCredentials <a name="ApiAuthenticationIntegrationWithClientCredentials" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials snowflake_api_authentication_integration_with_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  oauth_client_id: str,
  oauth_client_secret: str,
  comment: str = None,
  id: str = None,
  oauth_access_token_validity: typing.Union[int, float] = None,
  oauth_allowed_scopes: typing.List[str] = None,
  oauth_client_auth_method: str = None,
  oauth_refresh_token_validity: typing.Union[int, float] = None,
  oauth_token_endpoint: str = None,
  timeouts: ApiAuthenticationIntegrationWithClientCredentialsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthAccessTokenValidity">oauth_access_token_validity</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#enabled ApiAuthenticationIntegrationWithClientCredentials#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#name ApiAuthenticationIntegrationWithClientCredentials#name}

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthClientId"></a>

- *Type:* str

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_id ApiAuthenticationIntegrationWithClientCredentials#oauth_client_id}

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthClientSecret"></a>

- *Type:* str

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_secret ApiAuthenticationIntegrationWithClientCredentials#oauth_client_secret}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#comment ApiAuthenticationIntegrationWithClientCredentials#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_access_token_validity`<sup>Optional</sup> <a name="oauth_access_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthAccessTokenValidity"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_access_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_access_token_validity}

---

##### `oauth_allowed_scopes`<sup>Optional</sup> <a name="oauth_allowed_scopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthAllowedScopes"></a>

- *Type:* typing.List[str]

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_allowed_scopes ApiAuthenticationIntegrationWithClientCredentials#oauth_allowed_scopes}

---

##### `oauth_client_auth_method`<sup>Optional</sup> <a name="oauth_client_auth_method" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthClientAuthMethod"></a>

- *Type:* str

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_auth_method ApiAuthenticationIntegrationWithClientCredentials#oauth_client_auth_method}

---

##### `oauth_refresh_token_validity`<sup>Optional</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthRefreshTokenValidity"></a>

- *Type:* typing.Union[int, float]

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_refresh_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_refresh_token_validity}

---

##### `oauth_token_endpoint`<sup>Optional</sup> <a name="oauth_token_endpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.oauthTokenEndpoint"></a>

- *Type:* str

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_token_endpoint ApiAuthenticationIntegrationWithClientCredentials#oauth_token_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#timeouts ApiAuthenticationIntegrationWithClientCredentials#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAccessTokenValidity">reset_oauth_access_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAllowedScopes">reset_oauth_allowed_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthClientAuthMethod">reset_oauth_client_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthRefreshTokenValidity">reset_oauth_refresh_token_validity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthTokenEndpoint">reset_oauth_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#create ApiAuthenticationIntegrationWithClientCredentials#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#delete ApiAuthenticationIntegrationWithClientCredentials#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#read ApiAuthenticationIntegrationWithClientCredentials#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#update ApiAuthenticationIntegrationWithClientCredentials#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oauth_access_token_validity` <a name="reset_oauth_access_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAccessTokenValidity"></a>

```python
def reset_oauth_access_token_validity() -> None
```

##### `reset_oauth_allowed_scopes` <a name="reset_oauth_allowed_scopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthAllowedScopes"></a>

```python
def reset_oauth_allowed_scopes() -> None
```

##### `reset_oauth_client_auth_method` <a name="reset_oauth_client_auth_method" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthClientAuthMethod"></a>

```python
def reset_oauth_client_auth_method() -> None
```

##### `reset_oauth_refresh_token_validity` <a name="reset_oauth_refresh_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthRefreshTokenValidity"></a>

```python
def reset_oauth_refresh_token_validity() -> None
```

##### `reset_oauth_token_endpoint` <a name="reset_oauth_token_endpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetOauthTokenEndpoint"></a>

```python
def reset_oauth_token_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiAuthenticationIntegrationWithClientCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiAuthenticationIntegrationWithClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList">ApiAuthenticationIntegrationWithClientCredentialsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference">ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidityInput">oauth_access_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopesInput">oauth_allowed_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethodInput">oauth_client_auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecretInput">oauth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidityInput">oauth_refresh_token_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpointInput">oauth_token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidity">oauth_access_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.describeOutput"></a>

```python
describe_output: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.showOutput"></a>

```python
show_output: ApiAuthenticationIntegrationWithClientCredentialsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList">ApiAuthenticationIntegrationWithClientCredentialsShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeouts"></a>

```python
timeouts: ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference">ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_access_token_validity_input`<sup>Optional</sup> <a name="oauth_access_token_validity_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidityInput"></a>

```python
oauth_access_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_allowed_scopes_input`<sup>Optional</sup> <a name="oauth_allowed_scopes_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopesInput"></a>

```python
oauth_allowed_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_auth_method_input`<sup>Optional</sup> <a name="oauth_client_auth_method_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethodInput"></a>

```python
oauth_client_auth_method_input: str
```

- *Type:* str

---

##### `oauth_client_id_input`<sup>Optional</sup> <a name="oauth_client_id_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientIdInput"></a>

```python
oauth_client_id_input: str
```

- *Type:* str

---

##### `oauth_client_secret_input`<sup>Optional</sup> <a name="oauth_client_secret_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecretInput"></a>

```python
oauth_client_secret_input: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity_input`<sup>Optional</sup> <a name="oauth_refresh_token_validity_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidityInput"></a>

```python
oauth_refresh_token_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token_endpoint_input`<sup>Optional</sup> <a name="oauth_token_endpoint_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpointInput"></a>

```python
oauth_token_endpoint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiAuthenticationIntegrationWithClientCredentialsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_access_token_validity`<sup>Required</sup> <a name="oauth_access_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAccessTokenValidity"></a>

```python
oauth_access_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_auth_method`<sup>Required</sup> <a name="oauth_client_auth_method" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientAuthMethod"></a>

```python
oauth_client_auth_method: str
```

- *Type:* str

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

---

##### `oauth_refresh_token_validity`<sup>Required</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_token_endpoint`<sup>Required</sup> <a name="oauth_token_endpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.oauthTokenEndpoint"></a>

```python
oauth_token_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithClientCredentialsConfig <a name="ApiAuthenticationIntegrationWithClientCredentialsConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  oauth_client_id: str,
  oauth_client_secret: str,
  comment: str = None,
  id: str = None,
  oauth_access_token_validity: typing.Union[int, float] = None,
  oauth_allowed_scopes: typing.List[str] = None,
  oauth_client_auth_method: str = None,
  oauth_refresh_token_validity: typing.Union[int, float] = None,
  oauth_token_endpoint: str = None,
  timeouts: ApiAuthenticationIntegrationWithClientCredentialsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAccessTokenValidity">oauth_access_token_validity</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code>str</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code>str</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#enabled ApiAuthenticationIntegrationWithClientCredentials#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#name ApiAuthenticationIntegrationWithClientCredentials#name}

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_id ApiAuthenticationIntegrationWithClientCredentials#oauth_client_id}

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_secret ApiAuthenticationIntegrationWithClientCredentials#oauth_client_secret}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#comment ApiAuthenticationIntegrationWithClientCredentials#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#id ApiAuthenticationIntegrationWithClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_access_token_validity`<sup>Optional</sup> <a name="oauth_access_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAccessTokenValidity"></a>

```python
oauth_access_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_access_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_access_token_validity}

---

##### `oauth_allowed_scopes`<sup>Optional</sup> <a name="oauth_allowed_scopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_allowed_scopes ApiAuthenticationIntegrationWithClientCredentials#oauth_allowed_scopes}

---

##### `oauth_client_auth_method`<sup>Optional</sup> <a name="oauth_client_auth_method" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthClientAuthMethod"></a>

```python
oauth_client_auth_method: str
```

- *Type:* str

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_client_auth_method ApiAuthenticationIntegrationWithClientCredentials#oauth_client_auth_method}

---

##### `oauth_refresh_token_validity`<sup>Optional</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_refresh_token_validity ApiAuthenticationIntegrationWithClientCredentials#oauth_refresh_token_validity}

---

##### `oauth_token_endpoint`<sup>Optional</sup> <a name="oauth_token_endpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.oauthTokenEndpoint"></a>

```python
oauth_token_endpoint: str
```

- *Type:* str

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#oauth_token_endpoint ApiAuthenticationIntegrationWithClientCredentials#oauth_token_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsConfig.property.timeouts"></a>

```python
timeouts: ApiAuthenticationIntegrationWithClientCredentialsTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#timeouts ApiAuthenticationIntegrationWithClientCredentials#timeouts}

---

### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint()
```


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration()
```


### ApiAuthenticationIntegrationWithClientCredentialsShowOutput <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput()
```


### ApiAuthenticationIntegrationWithClientCredentialsTimeouts <a name="ApiAuthenticationIntegrationWithClientCredentialsTimeouts" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#create ApiAuthenticationIntegrationWithClientCredentials#create}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#delete ApiAuthenticationIntegrationWithClientCredentials#delete}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#read ApiAuthenticationIntegrationWithClientCredentials#read}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#update ApiAuthenticationIntegrationWithClientCredentials#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#create ApiAuthenticationIntegrationWithClientCredentials#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#delete ApiAuthenticationIntegrationWithClientCredentials#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#read ApiAuthenticationIntegrationWithClientCredentials#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_client_credentials#update ApiAuthenticationIntegrationWithClientCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.authType">auth_type</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenValidity">oauth_access_token_validity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauth_authorization_endpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientAuthMethod">oauth_client_auth_method</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthGrant">oauth_grant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauth_refresh_token_validity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthTokenEndpoint">oauth_token_endpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.parentIntegration">parent_integration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.authType"></a>

```python
auth_type: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputAuthTypeList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.comment"></a>

```python
comment: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputEnabledList</a>

---

##### `oauth_access_token_validity`<sup>Required</sup> <a name="oauth_access_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```python
oauth_access_token_validity: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAccessTokenValidityList</a>

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAllowedScopesList</a>

---

##### `oauth_authorization_endpoint`<sup>Required</sup> <a name="oauth_authorization_endpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```python
oauth_authorization_endpoint: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `oauth_client_auth_method`<sup>Required</sup> <a name="oauth_client_auth_method" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```python
oauth_client_auth_method: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthClientAuthMethodList</a>

---

##### `oauth_grant`<sup>Required</sup> <a name="oauth_grant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthGrant"></a>

```python
oauth_grant: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthGrantList</a>

---

##### `oauth_refresh_token_validity`<sup>Required</sup> <a name="oauth_refresh_token_validity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```python
oauth_refresh_token_validity: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `oauth_token_endpoint`<sup>Required</sup> <a name="oauth_token_endpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```python
oauth_token_endpoint: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOauthTokenEndpointList</a>

---

##### `parent_integration`<sup>Required</sup> <a name="parent_integration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.parentIntegration"></a>

```python
parent_integration: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithClientCredentialsDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsShowOutputList <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput">ApiAuthenticationIntegrationWithClientCredentialsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiAuthenticationIntegrationWithClientCredentialsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsShowOutput">ApiAuthenticationIntegrationWithClientCredentialsShowOutput</a>

---


### ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference <a name="ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import api_authentication_integration_with_client_credentials

apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiAuthenticationIntegrationWithClientCredentialsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithClientCredentials.ApiAuthenticationIntegrationWithClientCredentialsTimeouts">ApiAuthenticationIntegrationWithClientCredentialsTimeouts</a>]

---



