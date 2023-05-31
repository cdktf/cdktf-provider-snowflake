# `provider`

Refer to the Terraform Registory for docs: [`snowflake`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProvider(
  scope: Construct,
  id: str,
  account: str = None,
  alias: str = None,
  browser_auth: typing.Union[bool, IResolvable] = None,
  host: str = None,
  insecure_mode: typing.Union[bool, IResolvable] = None,
  oauth_access_token: str = None,
  oauth_client_id: str = None,
  oauth_client_secret: str = None,
  oauth_endpoint: str = None,
  oauth_redirect_url: str = None,
  oauth_refresh_token: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None,
  private_key_passphrase: str = None,
  private_key_path: str = None,
  profile: str = None,
  protocol: str = None,
  region: str = None,
  role: str = None,
  username: str = None,
  warehouse: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.account">account</a></code> | <code>str</code> | The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using profile. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.browserAuth">browser_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | Supports passing in a custom host value to the snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.insecureMode">insecure_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthAccessToken">oauth_access_token</a></code> | <code>str</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthEndpoint">oauth_endpoint</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthRedirectUrl">oauth_redirect_url</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthRefreshToken">oauth_refresh_token</a></code> | <code>str</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPath">private_key_path</a></code> | <code>str</code> | Path to a private key for using keypair authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Sets the profile to read from ~/.snowflake/config file. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.role">role</a></code> | <code>str</code> | Snowflake role to use for operations. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. Required unless using profile. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.warehouse">warehouse</a></code> | <code>str</code> | Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.account"></a>

- *Type:* str

The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#account SnowflakeProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#alias SnowflakeProvider#alias}

---

##### `browser_auth`<sup>Optional</sup> <a name="browser_auth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.browserAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#browser_auth SnowflakeProvider#browser_auth}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.host"></a>

- *Type:* str

Supports passing in a custom host value to the snowflake go driver for use with privatelink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#host SnowflakeProvider#host}

---

##### `insecure_mode`<sup>Optional</sup> <a name="insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.insecureMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `oauth_access_token`<sup>Optional</sup> <a name="oauth_access_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthAccessToken"></a>

- *Type:* str

Token for use with OAuth.

Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_access_token SnowflakeProvider#oauth_access_token}

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientId"></a>

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `oauth_client_secret`<sup>Optional</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientSecret"></a>

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `oauth_endpoint`<sup>Optional</sup> <a name="oauth_endpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthEndpoint"></a>

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_endpoint SnowflakeProvider#oauth_endpoint}

---

##### `oauth_redirect_url`<sup>Optional</sup> <a name="oauth_redirect_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthRedirectUrl"></a>

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}

---

##### `oauth_refresh_token`<sup>Optional</sup> <a name="oauth_refresh_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthRefreshToken"></a>

- *Type:* str

Token for use with OAuth.

Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.password"></a>

- *Type:* str

Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#port SnowflakeProvider#port}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKey"></a>

- *Type:* str

Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#private_key SnowflakeProvider#private_key}

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPassphrase"></a>

- *Type:* str

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `private_key_path`<sup>Optional</sup> <a name="private_key_path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPath"></a>

- *Type:* str

Path to a private key for using keypair authentication.

Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#private_key_path SnowflakeProvider#private_key_path}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.profile"></a>

- *Type:* str

Sets the profile to read from ~/.snowflake/config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.protocol"></a>

- *Type:* str

Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#protocol SnowflakeProvider#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.region"></a>

- *Type:* str

[Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#region SnowflakeProvider#region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.role"></a>

- *Type:* str

Snowflake role to use for operations.

If left unset, default role for user will be used. Can be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#role SnowflakeProvider#role}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.username"></a>

- *Type:* str

Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. Required unless using profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#username SnowflakeProvider#username}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.warehouse"></a>

- *Type:* str

Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#warehouse SnowflakeProvider#warehouse}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth">reset_browser_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">reset_insecure_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken">reset_oauth_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">reset_oauth_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">reset_oauth_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint">reset_oauth_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl">reset_oauth_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken">reset_oauth_refresh_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">reset_private_key_passphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath">reset_private_key_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">reset_warehouse</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_browser_auth` <a name="reset_browser_auth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth"></a>

```python
def reset_browser_auth() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_insecure_mode` <a name="reset_insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```python
def reset_insecure_mode() -> None
```

##### `reset_oauth_access_token` <a name="reset_oauth_access_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken"></a>

```python
def reset_oauth_access_token() -> None
```

##### `reset_oauth_client_id` <a name="reset_oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```python
def reset_oauth_client_id() -> None
```

##### `reset_oauth_client_secret` <a name="reset_oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```python
def reset_oauth_client_secret() -> None
```

##### `reset_oauth_endpoint` <a name="reset_oauth_endpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint"></a>

```python
def reset_oauth_endpoint() -> None
```

##### `reset_oauth_redirect_url` <a name="reset_oauth_redirect_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl"></a>

```python
def reset_oauth_redirect_url() -> None
```

##### `reset_oauth_refresh_token` <a name="reset_oauth_refresh_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken"></a>

```python
def reset_oauth_refresh_token() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_private_key_passphrase` <a name="reset_private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```python
def reset_private_key_passphrase() -> None
```

##### `reset_private_key_path` <a name="reset_private_key_path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath"></a>

```python
def reset_private_key_path() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_warehouse` <a name="reset_warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```python
def reset_warehouse() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput">browser_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">insecure_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput">oauth_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">oauth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput">oauth_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput">oauth_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput">oauth_refresh_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">private_key_passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput">private_key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth">browser_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">insecure_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken">oauth_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint">oauth_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl">oauth_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken">oauth_refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath">private_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `browser_auth_input`<sup>Optional</sup> <a name="browser_auth_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput"></a>

```python
browser_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `insecure_mode_input`<sup>Optional</sup> <a name="insecure_mode_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```python
insecure_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_access_token_input`<sup>Optional</sup> <a name="oauth_access_token_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput"></a>

```python
oauth_access_token_input: str
```

- *Type:* str

---

##### `oauth_client_id_input`<sup>Optional</sup> <a name="oauth_client_id_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput"></a>

```python
oauth_client_id_input: str
```

- *Type:* str

---

##### `oauth_client_secret_input`<sup>Optional</sup> <a name="oauth_client_secret_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput"></a>

```python
oauth_client_secret_input: str
```

- *Type:* str

---

##### `oauth_endpoint_input`<sup>Optional</sup> <a name="oauth_endpoint_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput"></a>

```python
oauth_endpoint_input: str
```

- *Type:* str

---

##### `oauth_redirect_url_input`<sup>Optional</sup> <a name="oauth_redirect_url_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput"></a>

```python
oauth_redirect_url_input: str
```

- *Type:* str

---

##### `oauth_refresh_token_input`<sup>Optional</sup> <a name="oauth_refresh_token_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput"></a>

```python
oauth_refresh_token_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `private_key_passphrase_input`<sup>Optional</sup> <a name="private_key_passphrase_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```python
private_key_passphrase_input: str
```

- *Type:* str

---

##### `private_key_path_input`<sup>Optional</sup> <a name="private_key_path_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput"></a>

```python
private_key_path_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `browser_auth`<sup>Optional</sup> <a name="browser_auth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth"></a>

```python
browser_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `insecure_mode`<sup>Optional</sup> <a name="insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```python
insecure_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_access_token`<sup>Optional</sup> <a name="oauth_access_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken"></a>

```python
oauth_access_token: str
```

- *Type:* str

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_client_secret`<sup>Optional</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

---

##### `oauth_endpoint`<sup>Optional</sup> <a name="oauth_endpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint"></a>

```python
oauth_endpoint: str
```

- *Type:* str

---

##### `oauth_redirect_url`<sup>Optional</sup> <a name="oauth_redirect_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl"></a>

```python
oauth_redirect_url: str
```

- *Type:* str

---

##### `oauth_refresh_token`<sup>Optional</sup> <a name="oauth_refresh_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken"></a>

```python
oauth_refresh_token: str
```

- *Type:* str

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```python
private_key_passphrase: str
```

- *Type:* str

---

##### `private_key_path`<sup>Optional</sup> <a name="private_key_path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath"></a>

```python
private_key_path: str
```

- *Type:* str

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProviderConfig(
  account: str = None,
  alias: str = None,
  browser_auth: typing.Union[bool, IResolvable] = None,
  host: str = None,
  insecure_mode: typing.Union[bool, IResolvable] = None,
  oauth_access_token: str = None,
  oauth_client_id: str = None,
  oauth_client_secret: str = None,
  oauth_endpoint: str = None,
  oauth_redirect_url: str = None,
  oauth_refresh_token: str = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None,
  private_key_passphrase: str = None,
  private_key_path: str = None,
  profile: str = None,
  protocol: str = None,
  region: str = None,
  role: str = None,
  username: str = None,
  warehouse: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account">account</a></code> | <code>str</code> | The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using profile. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth">browser_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">host</a></code> | <code>str</code> | Supports passing in a custom host value to the snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">insecure_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken">oauth_access_token</a></code> | <code>str</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint">oauth_endpoint</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl">oauth_redirect_url</a></code> | <code>str</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken">oauth_refresh_token</a></code> | <code>str</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">password</a></code> | <code>str</code> | Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">private_key</a></code> | <code>str</code> | Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath">private_key_path</a></code> | <code>str</code> | Path to a private key for using keypair authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">profile</a></code> | <code>str</code> | Sets the profile to read from ~/.snowflake/config file. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">protocol</a></code> | <code>str</code> | Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region">region</a></code> | <code>str</code> | [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">role</a></code> | <code>str</code> | Snowflake role to use for operations. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username">username</a></code> | <code>str</code> | Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. Required unless using profile. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">warehouse</a></code> | <code>str</code> | Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account"></a>

```python
account: str
```

- *Type:* str

The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#account SnowflakeProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#alias SnowflakeProvider#alias}

---

##### `browser_auth`<sup>Optional</sup> <a name="browser_auth" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth"></a>

```python
browser_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#browser_auth SnowflakeProvider#browser_auth}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Supports passing in a custom host value to the snowflake go driver for use with privatelink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#host SnowflakeProvider#host}

---

##### `insecure_mode`<sup>Optional</sup> <a name="insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```python
insecure_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `oauth_access_token`<sup>Optional</sup> <a name="oauth_access_token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken"></a>

```python
oauth_access_token: str
```

- *Type:* str

Token for use with OAuth.

Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_access_token SnowflakeProvider#oauth_access_token}

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `oauth_client_secret`<sup>Optional</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `oauth_endpoint`<sup>Optional</sup> <a name="oauth_endpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint"></a>

```python
oauth_endpoint: str
```

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_endpoint SnowflakeProvider#oauth_endpoint}

---

##### `oauth_redirect_url`<sup>Optional</sup> <a name="oauth_redirect_url" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl"></a>

```python
oauth_redirect_url: str
```

- *Type:* str

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}

---

##### `oauth_refresh_token`<sup>Optional</sup> <a name="oauth_refresh_token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken"></a>

```python
oauth_refresh_token: str
```

- *Type:* str

Token for use with OAuth.

Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#port SnowflakeProvider#port}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#private_key SnowflakeProvider#private_key}

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```python
private_key_passphrase: str
```

- *Type:* str

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `private_key_path`<sup>Optional</sup> <a name="private_key_path" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath"></a>

```python
private_key_path: str
```

- *Type:* str

Path to a private key for using keypair authentication.

Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#private_key_path SnowflakeProvider#private_key_path}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Sets the profile to read from ~/.snowflake/config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#protocol SnowflakeProvider#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

[Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#region SnowflakeProvider#region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Snowflake role to use for operations.

If left unset, default role for user will be used. Can be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#role SnowflakeProvider#role}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. Required unless using profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#username SnowflakeProvider#username}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs#warehouse SnowflakeProvider#warehouse}

---



