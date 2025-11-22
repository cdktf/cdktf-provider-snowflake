# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProvider(
  scope: Construct,
  id: str,
  account_name: str = None,
  alias: str = None,
  authenticator: str = None,
  client_ip: str = None,
  client_request_mfa_token: str = None,
  client_store_temporary_credential: str = None,
  client_timeout: typing.Union[int, float] = None,
  disable_console_login: str = None,
  disable_query_context_cache: bool | IResolvable = None,
  disable_telemetry: bool | IResolvable = None,
  driver_tracing: str = None,
  enable_single_use_refresh_tokens: bool | IResolvable = None,
  experimental_features_enabled: typing.List[str] = None,
  external_browser_timeout: typing.Union[int, float] = None,
  host: str = None,
  include_retry_reason: str = None,
  insecure_mode: bool | IResolvable = None,
  jwt_client_timeout: typing.Union[int, float] = None,
  jwt_expire_timeout: typing.Union[int, float] = None,
  keep_session_alive: bool | IResolvable = None,
  login_timeout: typing.Union[int, float] = None,
  log_query_parameters: bool | IResolvable = None,
  log_query_text: bool | IResolvable = None,
  max_retry_count: typing.Union[int, float] = None,
  oauth_authorization_url: str = None,
  oauth_client_id: str = None,
  oauth_client_secret: str = None,
  oauth_redirect_uri: str = None,
  oauth_scope: str = None,
  oauth_token_request_url: str = None,
  ocsp_fail_open: str = None,
  okta_url: str = None,
  organization_name: str = None,
  params: typing.Mapping[str] = None,
  passcode: str = None,
  passcode_in_password: bool | IResolvable = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  preview_features_enabled: typing.List[str] = None,
  private_key: str = None,
  private_key_passphrase: str = None,
  profile: str = None,
  protocol: str = None,
  request_timeout: typing.Union[int, float] = None,
  role: str = None,
  skip_toml_file_permission_verification: bool | IResolvable = None,
  tmp_directory_path: str = None,
  token: str = None,
  token_accessor: SnowflakeProviderTokenAccessor = None,
  use_legacy_toml_file: bool | IResolvable = None,
  user: str = None,
  validate_default_parameters: str = None,
  warehouse: str = None,
  workload_identity_entra_resource: str = None,
  workload_identity_provider: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.authenticator">authenticator</a></code> | <code>str</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA` \| `PROGRAMMATIC_ACCESS_TOKEN` \| `OAUTH_CLIENT_CREDENTIALS` \| `OAUTH_AUTHORIZATION_CODE` \| `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientIp">client_ip</a></code> | <code>str</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientRequestMfaToken">client_request_mfa_token</a></code> | <code>str</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientStoreTemporaryCredential">client_store_temporary_credential</a></code> | <code>str</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableConsoleLogin">disable_console_login</a></code> | <code>str</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableQueryContextCache">disable_query_context_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableTelemetry">disable_telemetry</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.driverTracing">driver_tracing</a></code> | <code>str</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.enableSingleUseRefreshTokens">enable_single_use_refresh_tokens</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.experimentalFeaturesEnabled">experimental_features_enabled</a></code> | <code>typing.List[str]</code> | A list of experimental features. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.externalBrowserTimeout">external_browser_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.includeRetryReason">include_retry_reason</a></code> | <code>str</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.insecureMode">insecure_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtClientTimeout">jwt_client_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtExpireTimeout">jwt_expire_timeout</a></code> | <code>typing.Union[int, float]</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.keepSessionAlive">keep_session_alive</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.loginTimeout">login_timeout</a></code> | <code>typing.Union[int, float]</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.logQueryParameters">log_query_parameters</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, the parameters will be logged. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.logQueryText">log_query_text</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, the full query text will be logged. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthAuthorizationUrl">oauth_authorization_url</a></code> | <code>str</code> | Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthRedirectUri">oauth_redirect_uri</a></code> | <code>str</code> | Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthScope">oauth_scope</a></code> | <code>str</code> | Comma separated list of scopes. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthTokenRequestUrl">oauth_token_request_url</a></code> | <code>str</code> | Token request URL of OAuth2 external IdP. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.ocspFailOpen">ocsp_fail_open</a></code> | <code>str</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oktaUrl">okta_url</a></code> | <code>str</code> | The URL of the Okta server. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.organizationName">organization_name</a></code> | <code>str</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.params">params</a></code> | <code>typing.Mapping[str]</code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcode">passcode</a></code> | <code>str</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcodeInPassword">passcode_in_password</a></code> | <code>bool \| cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.previewFeaturesEnabled">preview_features_enabled</a></code> | <code>typing.List[str]</code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | A protocol used in the connection. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.role">role</a></code> | <code>str</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.skipTomlFilePermissionVerification">skip_toml_file_permission_verification</a></code> | <code>bool \| cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tmpDirectoryPath">tmp_directory_path</a></code> | <code>str</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tokenAccessor">token_accessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.useLegacyTomlFile">use_legacy_toml_file</a></code> | <code>bool \| cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.user">user</a></code> | <code>str</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.validateDefaultParameters">validate_default_parameters</a></code> | <code>str</code> | True by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.warehouse">warehouse</a></code> | <code>str</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.workloadIdentityEntraResource">workload_identity_entra_resource</a></code> | <code>str</code> | The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.workloadIdentityProvider">workload_identity_provider</a></code> | <code>str</code> | The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable. |

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

##### `account_name`<sup>Optional</sup> <a name="account_name" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.accountName"></a>

- *Type:* str

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#account_name SnowflakeProvider#account_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#alias SnowflakeProvider#alias}

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.authenticator"></a>

- *Type:* str

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN` | `OAUTH_CLIENT_CREDENTIALS` | `OAUTH_AUTHORIZATION_CODE` | `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientIp"></a>

- *Type:* str

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `client_request_mfa_token`<sup>Optional</sup> <a name="client_request_mfa_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientRequestMfaToken"></a>

- *Type:* str

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `client_store_temporary_credential`<sup>Optional</sup> <a name="client_store_temporary_credential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientStoreTemporaryCredential"></a>

- *Type:* str

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `disable_console_login`<sup>Optional</sup> <a name="disable_console_login" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableConsoleLogin"></a>

- *Type:* str

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `disable_query_context_cache`<sup>Optional</sup> <a name="disable_query_context_cache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableQueryContextCache"></a>

- *Type:* bool | cdktf.IResolvable

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `disable_telemetry`<sup>Optional</sup> <a name="disable_telemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableTelemetry"></a>

- *Type:* bool | cdktf.IResolvable

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `driver_tracing`<sup>Optional</sup> <a name="driver_tracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.driverTracing"></a>

- *Type:* str

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `enable_single_use_refresh_tokens`<sup>Optional</sup> <a name="enable_single_use_refresh_tokens" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.enableSingleUseRefreshTokens"></a>

- *Type:* bool | cdktf.IResolvable

Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#enable_single_use_refresh_tokens SnowflakeProvider#enable_single_use_refresh_tokens}

---

##### `experimental_features_enabled`<sup>Optional</sup> <a name="experimental_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.experimentalFeaturesEnabled"></a>

- *Type:* typing.List[str]

A list of experimental features.

Similarly to preview features, they are not yet stable features of the provider. Enabling given experiment is still considered a preview feature, even when applied to the stable resource. These switches offer experiments altering the provider behavior. If the given experiment is successful, it can be considered an addition in the future provider versions. This field can not be set with environmental variables. Valid options are: `PARAMETERS_IGNORE_VALUE_CHANGES_IF_NOT_ON_OBJECT_LEVEL` | `WAREHOUSE_SHOW_IMPROVED_PERFORMANCE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#experimental_features_enabled SnowflakeProvider#experimental_features_enabled}

---

##### `external_browser_timeout`<sup>Optional</sup> <a name="external_browser_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.externalBrowserTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.host"></a>

- *Type:* str

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#host SnowflakeProvider#host}

---

##### `include_retry_reason`<sup>Optional</sup> <a name="include_retry_reason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.includeRetryReason"></a>

- *Type:* str

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `insecure_mode`<sup>Optional</sup> <a name="insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.insecureMode"></a>

- *Type:* bool | cdktf.IResolvable

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `jwt_client_timeout`<sup>Optional</sup> <a name="jwt_client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtClientTimeout"></a>

- *Type:* typing.Union[int, float]

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `jwt_expire_timeout`<sup>Optional</sup> <a name="jwt_expire_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtExpireTimeout"></a>

- *Type:* typing.Union[int, float]

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `keep_session_alive`<sup>Optional</sup> <a name="keep_session_alive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.keepSessionAlive"></a>

- *Type:* bool | cdktf.IResolvable

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `login_timeout`<sup>Optional</sup> <a name="login_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.loginTimeout"></a>

- *Type:* typing.Union[int, float]

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `log_query_parameters`<sup>Optional</sup> <a name="log_query_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.logQueryParameters"></a>

- *Type:* bool | cdktf.IResolvable

When set to true, the parameters will be logged.

Requires logQueryText to be enabled first. Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#log_query_parameters SnowflakeProvider#log_query_parameters}

---

##### `log_query_text`<sup>Optional</sup> <a name="log_query_text" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.logQueryText"></a>

- *Type:* bool | cdktf.IResolvable

When set to true, the full query text will be logged.

Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_TEXT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#log_query_text SnowflakeProvider#log_query_text}

---

##### `max_retry_count`<sup>Optional</sup> <a name="max_retry_count" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.maxRetryCount"></a>

- *Type:* typing.Union[int, float]

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `oauth_authorization_url`<sup>Optional</sup> <a name="oauth_authorization_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthAuthorizationUrl"></a>

- *Type:* str

Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_authorization_url SnowflakeProvider#oauth_authorization_url}

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientId"></a>

- *Type:* str

Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `oauth_client_secret`<sup>Optional</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthClientSecret"></a>

- *Type:* str

Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `oauth_redirect_uri`<sup>Optional</sup> <a name="oauth_redirect_uri" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthRedirectUri"></a>

- *Type:* str

Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_redirect_uri SnowflakeProvider#oauth_redirect_uri}

---

##### `oauth_scope`<sup>Optional</sup> <a name="oauth_scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthScope"></a>

- *Type:* str

Comma separated list of scopes.

If empty it is derived from role. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_SCOPE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_scope SnowflakeProvider#oauth_scope}

---

##### `oauth_token_request_url`<sup>Optional</sup> <a name="oauth_token_request_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oauthTokenRequestUrl"></a>

- *Type:* str

Token request URL of OAuth2 external IdP.

See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_TOKEN_REQUEST_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_token_request_url SnowflakeProvider#oauth_token_request_url}

---

##### `ocsp_fail_open`<sup>Optional</sup> <a name="ocsp_fail_open" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.ocspFailOpen"></a>

- *Type:* str

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `okta_url`<sup>Optional</sup> <a name="okta_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oktaUrl"></a>

- *Type:* str

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.organizationName"></a>

- *Type:* str

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#organization_name SnowflakeProvider#organization_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.params"></a>

- *Type:* typing.Mapping[str]

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#params SnowflakeProvider#params}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcode"></a>

- *Type:* str

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#passcode SnowflakeProvider#passcode}

---

##### `passcode_in_password`<sup>Optional</sup> <a name="passcode_in_password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcodeInPassword"></a>

- *Type:* bool | cdktf.IResolvable

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.password"></a>

- *Type:* str

Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#port SnowflakeProvider#port}

---

##### `preview_features_enabled`<sup>Optional</sup> <a name="preview_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.previewFeaturesEnabled"></a>

- *Type:* typing.List[str]

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Preview features that can be enabled are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_authentication_policies_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_job_service_resource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_notebook_resource` | `snowflake_notebooks_datasource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_semantic_view_resource` | `snowflake_semantic_views_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource`. Promoted features that are stable and are enabled by default are: `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_listing_resource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource`. Promoted features can be safely removed from this field. They will be removed in the next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKey"></a>

- *Type:* str

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#private_key SnowflakeProvider#private_key}

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPassphrase"></a>

- *Type:* str

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.profile"></a>

- *Type:* str

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.protocol"></a>

- *Type:* str

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#protocol SnowflakeProvider#protocol}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* typing.Union[int, float]

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.role"></a>

- *Type:* str

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#role SnowflakeProvider#role}

---

##### `skip_toml_file_permission_verification`<sup>Optional</sup> <a name="skip_toml_file_permission_verification" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.skipTomlFilePermissionVerification"></a>

- *Type:* bool | cdktf.IResolvable

False by default.

Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}

---

##### `tmp_directory_path`<sup>Optional</sup> <a name="tmp_directory_path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tmpDirectoryPath"></a>

- *Type:* str

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.token"></a>

- *Type:* str

Token to use for OAuth and other forms of token based auth.

When this field is set here, or in the TOML file, the provider sets the `authenticator` to `OAUTH`. Optionally, set the `authenticator` field to the authenticator you want to use. Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#token SnowflakeProvider#token}

---

##### `token_accessor`<sup>Optional</sup> <a name="token_accessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tokenAccessor"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `use_legacy_toml_file`<sup>Optional</sup> <a name="use_legacy_toml_file" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.useLegacyTomlFile"></a>

- *Type:* bool | cdktf.IResolvable

False by default.

When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.user"></a>

- *Type:* str

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#user SnowflakeProvider#user}

---

##### `validate_default_parameters`<sup>Optional</sup> <a name="validate_default_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.validateDefaultParameters"></a>

- *Type:* str

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.warehouse"></a>

- *Type:* str

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#warehouse SnowflakeProvider#warehouse}

---

##### `workload_identity_entra_resource`<sup>Optional</sup> <a name="workload_identity_entra_resource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.workloadIdentityEntraResource"></a>

- *Type:* str

The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#workload_identity_entra_resource SnowflakeProvider#workload_identity_entra_resource}

---

##### `workload_identity_provider`<sup>Optional</sup> <a name="workload_identity_provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.workloadIdentityProvider"></a>

- *Type:* str

The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#workload_identity_provider SnowflakeProvider#workload_identity_provider}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccountName">reset_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator">reset_authenticator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp">reset_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken">reset_client_request_mfa_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential">reset_client_store_temporary_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout">reset_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin">reset_disable_console_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache">reset_disable_query_context_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry">reset_disable_telemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing">reset_driver_tracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetEnableSingleUseRefreshTokens">reset_enable_single_use_refresh_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExperimentalFeaturesEnabled">reset_experimental_features_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout">reset_external_browser_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason">reset_include_retry_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">reset_insecure_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout">reset_jwt_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout">reset_jwt_expire_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive">reset_keep_session_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout">reset_login_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLogQueryParameters">reset_log_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLogQueryText">reset_log_query_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount">reset_max_retry_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAuthorizationUrl">reset_oauth_authorization_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">reset_oauth_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">reset_oauth_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUri">reset_oauth_redirect_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthScope">reset_oauth_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthTokenRequestUrl">reset_oauth_token_request_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen">reset_ocsp_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl">reset_okta_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName">reset_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode">reset_passcode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword">reset_passcode_in_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled">reset_preview_features_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">reset_private_key_passphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification">reset_skip_toml_file_permission_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath">reset_tmp_directory_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor">reset_token_accessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile">reset_use_legacy_toml_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser">reset_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters">reset_validate_default_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">reset_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityEntraResource">reset_workload_identity_entra_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityProvider">reset_workload_identity_provider</a></code> | *No description.* |

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

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_account_name` <a name="reset_account_name" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccountName"></a>

```python
def reset_account_name() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_authenticator` <a name="reset_authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator"></a>

```python
def reset_authenticator() -> None
```

##### `reset_client_ip` <a name="reset_client_ip" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp"></a>

```python
def reset_client_ip() -> None
```

##### `reset_client_request_mfa_token` <a name="reset_client_request_mfa_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken"></a>

```python
def reset_client_request_mfa_token() -> None
```

##### `reset_client_store_temporary_credential` <a name="reset_client_store_temporary_credential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential"></a>

```python
def reset_client_store_temporary_credential() -> None
```

##### `reset_client_timeout` <a name="reset_client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout"></a>

```python
def reset_client_timeout() -> None
```

##### `reset_disable_console_login` <a name="reset_disable_console_login" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin"></a>

```python
def reset_disable_console_login() -> None
```

##### `reset_disable_query_context_cache` <a name="reset_disable_query_context_cache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache"></a>

```python
def reset_disable_query_context_cache() -> None
```

##### `reset_disable_telemetry` <a name="reset_disable_telemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry"></a>

```python
def reset_disable_telemetry() -> None
```

##### `reset_driver_tracing` <a name="reset_driver_tracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing"></a>

```python
def reset_driver_tracing() -> None
```

##### `reset_enable_single_use_refresh_tokens` <a name="reset_enable_single_use_refresh_tokens" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetEnableSingleUseRefreshTokens"></a>

```python
def reset_enable_single_use_refresh_tokens() -> None
```

##### `reset_experimental_features_enabled` <a name="reset_experimental_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExperimentalFeaturesEnabled"></a>

```python
def reset_experimental_features_enabled() -> None
```

##### `reset_external_browser_timeout` <a name="reset_external_browser_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout"></a>

```python
def reset_external_browser_timeout() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_include_retry_reason` <a name="reset_include_retry_reason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason"></a>

```python
def reset_include_retry_reason() -> None
```

##### `reset_insecure_mode` <a name="reset_insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```python
def reset_insecure_mode() -> None
```

##### `reset_jwt_client_timeout` <a name="reset_jwt_client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout"></a>

```python
def reset_jwt_client_timeout() -> None
```

##### `reset_jwt_expire_timeout` <a name="reset_jwt_expire_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout"></a>

```python
def reset_jwt_expire_timeout() -> None
```

##### `reset_keep_session_alive` <a name="reset_keep_session_alive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive"></a>

```python
def reset_keep_session_alive() -> None
```

##### `reset_login_timeout` <a name="reset_login_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout"></a>

```python
def reset_login_timeout() -> None
```

##### `reset_log_query_parameters` <a name="reset_log_query_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLogQueryParameters"></a>

```python
def reset_log_query_parameters() -> None
```

##### `reset_log_query_text` <a name="reset_log_query_text" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLogQueryText"></a>

```python
def reset_log_query_text() -> None
```

##### `reset_max_retry_count` <a name="reset_max_retry_count" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount"></a>

```python
def reset_max_retry_count() -> None
```

##### `reset_oauth_authorization_url` <a name="reset_oauth_authorization_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAuthorizationUrl"></a>

```python
def reset_oauth_authorization_url() -> None
```

##### `reset_oauth_client_id` <a name="reset_oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```python
def reset_oauth_client_id() -> None
```

##### `reset_oauth_client_secret` <a name="reset_oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```python
def reset_oauth_client_secret() -> None
```

##### `reset_oauth_redirect_uri` <a name="reset_oauth_redirect_uri" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUri"></a>

```python
def reset_oauth_redirect_uri() -> None
```

##### `reset_oauth_scope` <a name="reset_oauth_scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthScope"></a>

```python
def reset_oauth_scope() -> None
```

##### `reset_oauth_token_request_url` <a name="reset_oauth_token_request_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthTokenRequestUrl"></a>

```python
def reset_oauth_token_request_url() -> None
```

##### `reset_ocsp_fail_open` <a name="reset_ocsp_fail_open" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen"></a>

```python
def reset_ocsp_fail_open() -> None
```

##### `reset_okta_url` <a name="reset_okta_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl"></a>

```python
def reset_okta_url() -> None
```

##### `reset_organization_name` <a name="reset_organization_name" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName"></a>

```python
def reset_organization_name() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_passcode` <a name="reset_passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode"></a>

```python
def reset_passcode() -> None
```

##### `reset_passcode_in_password` <a name="reset_passcode_in_password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword"></a>

```python
def reset_passcode_in_password() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preview_features_enabled` <a name="reset_preview_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled"></a>

```python
def reset_preview_features_enabled() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_private_key_passphrase` <a name="reset_private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```python
def reset_private_key_passphrase() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_skip_toml_file_permission_verification` <a name="reset_skip_toml_file_permission_verification" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification"></a>

```python
def reset_skip_toml_file_permission_verification() -> None
```

##### `reset_tmp_directory_path` <a name="reset_tmp_directory_path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath"></a>

```python
def reset_tmp_directory_path() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_token_accessor` <a name="reset_token_accessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor"></a>

```python
def reset_token_accessor() -> None
```

##### `reset_use_legacy_toml_file` <a name="reset_use_legacy_toml_file" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile"></a>

```python
def reset_use_legacy_toml_file() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser"></a>

```python
def reset_user() -> None
```

##### `reset_validate_default_parameters` <a name="reset_validate_default_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters"></a>

```python
def reset_validate_default_parameters() -> None
```

##### `reset_warehouse` <a name="reset_warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```python
def reset_warehouse() -> None
```

##### `reset_workload_identity_entra_resource` <a name="reset_workload_identity_entra_resource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityEntraResource"></a>

```python
def reset_workload_identity_entra_resource() -> None
```

##### `reset_workload_identity_provider` <a name="reset_workload_identity_provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityProvider"></a>

```python
def reset_workload_identity_provider() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>". |

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

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SnowflakeProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SnowflakeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SnowflakeProvider to import is found.

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
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput">authenticator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput">client_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput">client_request_mfa_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput">client_store_temporary_credential_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput">client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput">disable_console_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput">disable_query_context_cache_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput">disable_telemetry_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput">driver_tracing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokensInput">enable_single_use_refresh_tokens_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabledInput">experimental_features_enabled_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput">external_browser_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput">include_retry_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">insecure_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput">jwt_client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput">jwt_expire_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput">keep_session_alive_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput">login_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryParametersInput">log_query_parameters_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryTextInput">log_query_text_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput">max_retry_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrlInput">oauth_authorization_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">oauth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUriInput">oauth_redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthScopeInput">oauth_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrlInput">oauth_token_request_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput">ocsp_fail_open_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput">okta_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput">organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput">params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput">passcode_in_password_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput">passcode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput">preview_features_enabled_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">private_key_passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput">request_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput">skip_toml_file_permission_verification_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput">tmp_directory_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput">token_accessor_input</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput">use_legacy_toml_file_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput">validate_default_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResourceInput">workload_identity_entra_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProviderInput">workload_identity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator">authenticator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp">client_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken">client_request_mfa_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential">client_store_temporary_credential</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin">disable_console_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache">disable_query_context_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry">disable_telemetry</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracing">driver_tracing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokens">enable_single_use_refresh_tokens</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabled">experimental_features_enabled</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout">external_browser_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason">include_retry_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">insecure_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout">jwt_client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout">jwt_expire_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive">keep_session_alive</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout">login_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryParameters">log_query_parameters</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryText">log_query_text</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrl">oauth_authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUri">oauth_redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthScope">oauth_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrl">oauth_token_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen">ocsp_fail_open</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl">okta_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params">params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode">passcode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword">passcode_in_password</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled">preview_features_enabled</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification">skip_toml_file_permission_verification</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath">tmp_directory_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor">token_accessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile">use_legacy_toml_file</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters">validate_default_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResource">workload_identity_entra_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProvider">workload_identity_provider</a></code> | <code>str</code> | *No description.* |

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

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `authenticator_input`<sup>Optional</sup> <a name="authenticator_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput"></a>

```python
authenticator_input: str
```

- *Type:* str

---

##### `client_ip_input`<sup>Optional</sup> <a name="client_ip_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput"></a>

```python
client_ip_input: str
```

- *Type:* str

---

##### `client_request_mfa_token_input`<sup>Optional</sup> <a name="client_request_mfa_token_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput"></a>

```python
client_request_mfa_token_input: str
```

- *Type:* str

---

##### `client_store_temporary_credential_input`<sup>Optional</sup> <a name="client_store_temporary_credential_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput"></a>

```python
client_store_temporary_credential_input: str
```

- *Type:* str

---

##### `client_timeout_input`<sup>Optional</sup> <a name="client_timeout_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput"></a>

```python
client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_console_login_input`<sup>Optional</sup> <a name="disable_console_login_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput"></a>

```python
disable_console_login_input: str
```

- *Type:* str

---

##### `disable_query_context_cache_input`<sup>Optional</sup> <a name="disable_query_context_cache_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput"></a>

```python
disable_query_context_cache_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_telemetry_input`<sup>Optional</sup> <a name="disable_telemetry_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput"></a>

```python
disable_telemetry_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `driver_tracing_input`<sup>Optional</sup> <a name="driver_tracing_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput"></a>

```python
driver_tracing_input: str
```

- *Type:* str

---

##### `enable_single_use_refresh_tokens_input`<sup>Optional</sup> <a name="enable_single_use_refresh_tokens_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokensInput"></a>

```python
enable_single_use_refresh_tokens_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `experimental_features_enabled_input`<sup>Optional</sup> <a name="experimental_features_enabled_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabledInput"></a>

```python
experimental_features_enabled_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_browser_timeout_input`<sup>Optional</sup> <a name="external_browser_timeout_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput"></a>

```python
external_browser_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `include_retry_reason_input`<sup>Optional</sup> <a name="include_retry_reason_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput"></a>

```python
include_retry_reason_input: str
```

- *Type:* str

---

##### `insecure_mode_input`<sup>Optional</sup> <a name="insecure_mode_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```python
insecure_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `jwt_client_timeout_input`<sup>Optional</sup> <a name="jwt_client_timeout_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput"></a>

```python
jwt_client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jwt_expire_timeout_input`<sup>Optional</sup> <a name="jwt_expire_timeout_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput"></a>

```python
jwt_expire_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_session_alive_input`<sup>Optional</sup> <a name="keep_session_alive_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput"></a>

```python
keep_session_alive_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `login_timeout_input`<sup>Optional</sup> <a name="login_timeout_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput"></a>

```python
login_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_query_parameters_input`<sup>Optional</sup> <a name="log_query_parameters_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryParametersInput"></a>

```python
log_query_parameters_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `log_query_text_input`<sup>Optional</sup> <a name="log_query_text_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryTextInput"></a>

```python
log_query_text_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_retry_count_input`<sup>Optional</sup> <a name="max_retry_count_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput"></a>

```python
max_retry_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_authorization_url_input`<sup>Optional</sup> <a name="oauth_authorization_url_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrlInput"></a>

```python
oauth_authorization_url_input: str
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

##### `oauth_redirect_uri_input`<sup>Optional</sup> <a name="oauth_redirect_uri_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUriInput"></a>

```python
oauth_redirect_uri_input: str
```

- *Type:* str

---

##### `oauth_scope_input`<sup>Optional</sup> <a name="oauth_scope_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthScopeInput"></a>

```python
oauth_scope_input: str
```

- *Type:* str

---

##### `oauth_token_request_url_input`<sup>Optional</sup> <a name="oauth_token_request_url_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrlInput"></a>

```python
oauth_token_request_url_input: str
```

- *Type:* str

---

##### `ocsp_fail_open_input`<sup>Optional</sup> <a name="ocsp_fail_open_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput"></a>

```python
ocsp_fail_open_input: str
```

- *Type:* str

---

##### `okta_url_input`<sup>Optional</sup> <a name="okta_url_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput"></a>

```python
okta_url_input: str
```

- *Type:* str

---

##### `organization_name_input`<sup>Optional</sup> <a name="organization_name_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput"></a>

```python
organization_name_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput"></a>

```python
params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passcode_in_password_input`<sup>Optional</sup> <a name="passcode_in_password_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput"></a>

```python
passcode_in_password_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `passcode_input`<sup>Optional</sup> <a name="passcode_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput"></a>

```python
passcode_input: str
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

##### `preview_features_enabled_input`<sup>Optional</sup> <a name="preview_features_enabled_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput"></a>

```python
preview_features_enabled_input: typing.List[str]
```

- *Type:* typing.List[str]

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

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput"></a>

```python
request_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `skip_toml_file_permission_verification_input`<sup>Optional</sup> <a name="skip_toml_file_permission_verification_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput"></a>

```python
skip_toml_file_permission_verification_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tmp_directory_path_input`<sup>Optional</sup> <a name="tmp_directory_path_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput"></a>

```python
tmp_directory_path_input: str
```

- *Type:* str

---

##### `token_accessor_input`<sup>Optional</sup> <a name="token_accessor_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput"></a>

```python
token_accessor_input: SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `use_legacy_toml_file_input`<sup>Optional</sup> <a name="use_legacy_toml_file_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput"></a>

```python
use_legacy_toml_file_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `validate_default_parameters_input`<sup>Optional</sup> <a name="validate_default_parameters_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput"></a>

```python
validate_default_parameters_input: str
```

- *Type:* str

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `workload_identity_entra_resource_input`<sup>Optional</sup> <a name="workload_identity_entra_resource_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResourceInput"></a>

```python
workload_identity_entra_resource_input: str
```

- *Type:* str

---

##### `workload_identity_provider_input`<sup>Optional</sup> <a name="workload_identity_provider_input" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProviderInput"></a>

```python
workload_identity_provider_input: str
```

- *Type:* str

---

##### `account_name`<sup>Optional</sup> <a name="account_name" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator"></a>

```python
authenticator: str
```

- *Type:* str

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp"></a>

```python
client_ip: str
```

- *Type:* str

---

##### `client_request_mfa_token`<sup>Optional</sup> <a name="client_request_mfa_token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken"></a>

```python
client_request_mfa_token: str
```

- *Type:* str

---

##### `client_store_temporary_credential`<sup>Optional</sup> <a name="client_store_temporary_credential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential"></a>

```python
client_store_temporary_credential: str
```

- *Type:* str

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_console_login`<sup>Optional</sup> <a name="disable_console_login" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin"></a>

```python
disable_console_login: str
```

- *Type:* str

---

##### `disable_query_context_cache`<sup>Optional</sup> <a name="disable_query_context_cache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache"></a>

```python
disable_query_context_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `disable_telemetry`<sup>Optional</sup> <a name="disable_telemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry"></a>

```python
disable_telemetry: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `driver_tracing`<sup>Optional</sup> <a name="driver_tracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracing"></a>

```python
driver_tracing: str
```

- *Type:* str

---

##### `enable_single_use_refresh_tokens`<sup>Optional</sup> <a name="enable_single_use_refresh_tokens" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokens"></a>

```python
enable_single_use_refresh_tokens: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `experimental_features_enabled`<sup>Optional</sup> <a name="experimental_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabled"></a>

```python
experimental_features_enabled: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_browser_timeout`<sup>Optional</sup> <a name="external_browser_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout"></a>

```python
external_browser_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `include_retry_reason`<sup>Optional</sup> <a name="include_retry_reason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason"></a>

```python
include_retry_reason: str
```

- *Type:* str

---

##### `insecure_mode`<sup>Optional</sup> <a name="insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```python
insecure_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `jwt_client_timeout`<sup>Optional</sup> <a name="jwt_client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout"></a>

```python
jwt_client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `jwt_expire_timeout`<sup>Optional</sup> <a name="jwt_expire_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout"></a>

```python
jwt_expire_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_session_alive`<sup>Optional</sup> <a name="keep_session_alive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive"></a>

```python
keep_session_alive: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `login_timeout`<sup>Optional</sup> <a name="login_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout"></a>

```python
login_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_query_parameters`<sup>Optional</sup> <a name="log_query_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryParameters"></a>

```python
log_query_parameters: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `log_query_text`<sup>Optional</sup> <a name="log_query_text" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.logQueryText"></a>

```python
log_query_text: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_retry_count`<sup>Optional</sup> <a name="max_retry_count" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount"></a>

```python
max_retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oauth_authorization_url`<sup>Optional</sup> <a name="oauth_authorization_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrl"></a>

```python
oauth_authorization_url: str
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

##### `oauth_redirect_uri`<sup>Optional</sup> <a name="oauth_redirect_uri" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUri"></a>

```python
oauth_redirect_uri: str
```

- *Type:* str

---

##### `oauth_scope`<sup>Optional</sup> <a name="oauth_scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthScope"></a>

```python
oauth_scope: str
```

- *Type:* str

---

##### `oauth_token_request_url`<sup>Optional</sup> <a name="oauth_token_request_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrl"></a>

```python
oauth_token_request_url: str
```

- *Type:* str

---

##### `ocsp_fail_open`<sup>Optional</sup> <a name="ocsp_fail_open" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen"></a>

```python
ocsp_fail_open: str
```

- *Type:* str

---

##### `okta_url`<sup>Optional</sup> <a name="okta_url" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl"></a>

```python
okta_url: str
```

- *Type:* str

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode"></a>

```python
passcode: str
```

- *Type:* str

---

##### `passcode_in_password`<sup>Optional</sup> <a name="passcode_in_password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword"></a>

```python
passcode_in_password: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

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

##### `preview_features_enabled`<sup>Optional</sup> <a name="preview_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled"></a>

```python
preview_features_enabled: typing.List[str]
```

- *Type:* typing.List[str]

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

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `skip_toml_file_permission_verification`<sup>Optional</sup> <a name="skip_toml_file_permission_verification" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification"></a>

```python
skip_toml_file_permission_verification: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tmp_directory_path`<sup>Optional</sup> <a name="tmp_directory_path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath"></a>

```python
tmp_directory_path: str
```

- *Type:* str

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `token_accessor`<sup>Optional</sup> <a name="token_accessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor"></a>

```python
token_accessor: SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `use_legacy_toml_file`<sup>Optional</sup> <a name="use_legacy_toml_file" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile"></a>

```python
use_legacy_toml_file: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `validate_default_parameters`<sup>Optional</sup> <a name="validate_default_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters"></a>

```python
validate_default_parameters: str
```

- *Type:* str

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

##### `workload_identity_entra_resource`<sup>Optional</sup> <a name="workload_identity_entra_resource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResource"></a>

```python
workload_identity_entra_resource: str
```

- *Type:* str

---

##### `workload_identity_provider`<sup>Optional</sup> <a name="workload_identity_provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProvider"></a>

```python
workload_identity_provider: str
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
  account_name: str = None,
  alias: str = None,
  authenticator: str = None,
  client_ip: str = None,
  client_request_mfa_token: str = None,
  client_store_temporary_credential: str = None,
  client_timeout: typing.Union[int, float] = None,
  disable_console_login: str = None,
  disable_query_context_cache: bool | IResolvable = None,
  disable_telemetry: bool | IResolvable = None,
  driver_tracing: str = None,
  enable_single_use_refresh_tokens: bool | IResolvable = None,
  experimental_features_enabled: typing.List[str] = None,
  external_browser_timeout: typing.Union[int, float] = None,
  host: str = None,
  include_retry_reason: str = None,
  insecure_mode: bool | IResolvable = None,
  jwt_client_timeout: typing.Union[int, float] = None,
  jwt_expire_timeout: typing.Union[int, float] = None,
  keep_session_alive: bool | IResolvable = None,
  login_timeout: typing.Union[int, float] = None,
  log_query_parameters: bool | IResolvable = None,
  log_query_text: bool | IResolvable = None,
  max_retry_count: typing.Union[int, float] = None,
  oauth_authorization_url: str = None,
  oauth_client_id: str = None,
  oauth_client_secret: str = None,
  oauth_redirect_uri: str = None,
  oauth_scope: str = None,
  oauth_token_request_url: str = None,
  ocsp_fail_open: str = None,
  okta_url: str = None,
  organization_name: str = None,
  params: typing.Mapping[str] = None,
  passcode: str = None,
  passcode_in_password: bool | IResolvable = None,
  password: str = None,
  port: typing.Union[int, float] = None,
  preview_features_enabled: typing.List[str] = None,
  private_key: str = None,
  private_key_passphrase: str = None,
  profile: str = None,
  protocol: str = None,
  request_timeout: typing.Union[int, float] = None,
  role: str = None,
  skip_toml_file_permission_verification: bool | IResolvable = None,
  tmp_directory_path: str = None,
  token: str = None,
  token_accessor: SnowflakeProviderTokenAccessor = None,
  use_legacy_toml_file: bool | IResolvable = None,
  user: str = None,
  validate_default_parameters: str = None,
  warehouse: str = None,
  workload_identity_entra_resource: str = None,
  workload_identity_provider: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName">account_name</a></code> | <code>str</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator">authenticator</a></code> | <code>str</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA` \| `PROGRAMMATIC_ACCESS_TOKEN` \| `OAUTH_CLIENT_CREDENTIALS` \| `OAUTH_AUTHORIZATION_CODE` \| `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp">client_ip</a></code> | <code>str</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken">client_request_mfa_token</a></code> | <code>str</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential">client_store_temporary_credential</a></code> | <code>str</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin">disable_console_login</a></code> | <code>str</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache">disable_query_context_cache</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry">disable_telemetry</a></code> | <code>bool \| cdktf.IResolvable</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing">driver_tracing</a></code> | <code>str</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.enableSingleUseRefreshTokens">enable_single_use_refresh_tokens</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.experimentalFeaturesEnabled">experimental_features_enabled</a></code> | <code>typing.List[str]</code> | A list of experimental features. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout">external_browser_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">host</a></code> | <code>str</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason">include_retry_reason</a></code> | <code>str</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">insecure_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout">jwt_client_timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout">jwt_expire_timeout</a></code> | <code>typing.Union[int, float]</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive">keep_session_alive</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout">login_timeout</a></code> | <code>typing.Union[int, float]</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryParameters">log_query_parameters</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, the parameters will be logged. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryText">log_query_text</a></code> | <code>bool \| cdktf.IResolvable</code> | When set to true, the full query text will be logged. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount">max_retry_count</a></code> | <code>typing.Union[int, float]</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAuthorizationUrl">oauth_authorization_url</a></code> | <code>str</code> | Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUri">oauth_redirect_uri</a></code> | <code>str</code> | Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthScope">oauth_scope</a></code> | <code>str</code> | Comma separated list of scopes. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthTokenRequestUrl">oauth_token_request_url</a></code> | <code>str</code> | Token request URL of OAuth2 external IdP. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen">ocsp_fail_open</a></code> | <code>str</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl">okta_url</a></code> | <code>str</code> | The URL of the Okta server. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName">organization_name</a></code> | <code>str</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params">params</a></code> | <code>typing.Mapping[str]</code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode">passcode</a></code> | <code>str</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword">passcode_in_password</a></code> | <code>bool \| cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">password</a></code> | <code>str</code> | Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled">preview_features_enabled</a></code> | <code>typing.List[str]</code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">private_key</a></code> | <code>str</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">private_key_passphrase</a></code> | <code>str</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">profile</a></code> | <code>str</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">protocol</a></code> | <code>str</code> | A protocol used in the connection. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout">request_timeout</a></code> | <code>typing.Union[int, float]</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">role</a></code> | <code>str</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification">skip_toml_file_permission_verification</a></code> | <code>bool \| cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath">tmp_directory_path</a></code> | <code>str</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token">token</a></code> | <code>str</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor">token_accessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile">use_legacy_toml_file</a></code> | <code>bool \| cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user">user</a></code> | <code>str</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters">validate_default_parameters</a></code> | <code>str</code> | True by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">warehouse</a></code> | <code>str</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityEntraResource">workload_identity_entra_resource</a></code> | <code>str</code> | The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityProvider">workload_identity_provider</a></code> | <code>str</code> | The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable. |

---

##### `account_name`<sup>Optional</sup> <a name="account_name" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#account_name SnowflakeProvider#account_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#alias SnowflakeProvider#alias}

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator"></a>

```python
authenticator: str
```

- *Type:* str

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN` | `OAUTH_CLIENT_CREDENTIALS` | `OAUTH_AUTHORIZATION_CODE` | `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `client_ip`<sup>Optional</sup> <a name="client_ip" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp"></a>

```python
client_ip: str
```

- *Type:* str

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `client_request_mfa_token`<sup>Optional</sup> <a name="client_request_mfa_token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken"></a>

```python
client_request_mfa_token: str
```

- *Type:* str

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `client_store_temporary_credential`<sup>Optional</sup> <a name="client_store_temporary_credential" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential"></a>

```python
client_store_temporary_credential: str
```

- *Type:* str

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `disable_console_login`<sup>Optional</sup> <a name="disable_console_login" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin"></a>

```python
disable_console_login: str
```

- *Type:* str

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `disable_query_context_cache`<sup>Optional</sup> <a name="disable_query_context_cache" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache"></a>

```python
disable_query_context_cache: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `disable_telemetry`<sup>Optional</sup> <a name="disable_telemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry"></a>

```python
disable_telemetry: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `driver_tracing`<sup>Optional</sup> <a name="driver_tracing" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing"></a>

```python
driver_tracing: str
```

- *Type:* str

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `enable_single_use_refresh_tokens`<sup>Optional</sup> <a name="enable_single_use_refresh_tokens" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.enableSingleUseRefreshTokens"></a>

```python
enable_single_use_refresh_tokens: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#enable_single_use_refresh_tokens SnowflakeProvider#enable_single_use_refresh_tokens}

---

##### `experimental_features_enabled`<sup>Optional</sup> <a name="experimental_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.experimentalFeaturesEnabled"></a>

```python
experimental_features_enabled: typing.List[str]
```

- *Type:* typing.List[str]

A list of experimental features.

Similarly to preview features, they are not yet stable features of the provider. Enabling given experiment is still considered a preview feature, even when applied to the stable resource. These switches offer experiments altering the provider behavior. If the given experiment is successful, it can be considered an addition in the future provider versions. This field can not be set with environmental variables. Valid options are: `PARAMETERS_IGNORE_VALUE_CHANGES_IF_NOT_ON_OBJECT_LEVEL` | `WAREHOUSE_SHOW_IMPROVED_PERFORMANCE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#experimental_features_enabled SnowflakeProvider#experimental_features_enabled}

---

##### `external_browser_timeout`<sup>Optional</sup> <a name="external_browser_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout"></a>

```python
external_browser_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#host SnowflakeProvider#host}

---

##### `include_retry_reason`<sup>Optional</sup> <a name="include_retry_reason" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason"></a>

```python
include_retry_reason: str
```

- *Type:* str

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `insecure_mode`<sup>Optional</sup> <a name="insecure_mode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```python
insecure_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `jwt_client_timeout`<sup>Optional</sup> <a name="jwt_client_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout"></a>

```python
jwt_client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `jwt_expire_timeout`<sup>Optional</sup> <a name="jwt_expire_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout"></a>

```python
jwt_expire_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `keep_session_alive`<sup>Optional</sup> <a name="keep_session_alive" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive"></a>

```python
keep_session_alive: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `login_timeout`<sup>Optional</sup> <a name="login_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout"></a>

```python
login_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `log_query_parameters`<sup>Optional</sup> <a name="log_query_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryParameters"></a>

```python
log_query_parameters: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When set to true, the parameters will be logged.

Requires logQueryText to be enabled first. Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#log_query_parameters SnowflakeProvider#log_query_parameters}

---

##### `log_query_text`<sup>Optional</sup> <a name="log_query_text" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryText"></a>

```python
log_query_text: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When set to true, the full query text will be logged.

Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_TEXT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#log_query_text SnowflakeProvider#log_query_text}

---

##### `max_retry_count`<sup>Optional</sup> <a name="max_retry_count" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount"></a>

```python
max_retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `oauth_authorization_url`<sup>Optional</sup> <a name="oauth_authorization_url" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAuthorizationUrl"></a>

```python
oauth_authorization_url: str
```

- *Type:* str

Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_authorization_url SnowflakeProvider#oauth_authorization_url}

---

##### `oauth_client_id`<sup>Optional</sup> <a name="oauth_client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `oauth_client_secret`<sup>Optional</sup> <a name="oauth_client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `oauth_redirect_uri`<sup>Optional</sup> <a name="oauth_redirect_uri" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUri"></a>

```python
oauth_redirect_uri: str
```

- *Type:* str

Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_redirect_uri SnowflakeProvider#oauth_redirect_uri}

---

##### `oauth_scope`<sup>Optional</sup> <a name="oauth_scope" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthScope"></a>

```python
oauth_scope: str
```

- *Type:* str

Comma separated list of scopes.

If empty it is derived from role. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_SCOPE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_scope SnowflakeProvider#oauth_scope}

---

##### `oauth_token_request_url`<sup>Optional</sup> <a name="oauth_token_request_url" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthTokenRequestUrl"></a>

```python
oauth_token_request_url: str
```

- *Type:* str

Token request URL of OAuth2 external IdP.

See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_TOKEN_REQUEST_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#oauth_token_request_url SnowflakeProvider#oauth_token_request_url}

---

##### `ocsp_fail_open`<sup>Optional</sup> <a name="ocsp_fail_open" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen"></a>

```python
ocsp_fail_open: str
```

- *Type:* str

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `okta_url`<sup>Optional</sup> <a name="okta_url" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl"></a>

```python
okta_url: str
```

- *Type:* str

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `organization_name`<sup>Optional</sup> <a name="organization_name" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#organization_name SnowflakeProvider#organization_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#params SnowflakeProvider#params}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode"></a>

```python
passcode: str
```

- *Type:* str

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#passcode SnowflakeProvider#passcode}

---

##### `passcode_in_password`<sup>Optional</sup> <a name="passcode_in_password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword"></a>

```python
passcode_in_password: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#port SnowflakeProvider#port}

---

##### `preview_features_enabled`<sup>Optional</sup> <a name="preview_features_enabled" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled"></a>

```python
preview_features_enabled: typing.List[str]
```

- *Type:* typing.List[str]

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Preview features that can be enabled are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_authentication_policies_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_job_service_resource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_notebook_resource` | `snowflake_notebooks_datasource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_semantic_view_resource` | `snowflake_semantic_views_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource`. Promoted features that are stable and are enabled by default are: `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_listing_resource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource`. Promoted features can be safely removed from this field. They will be removed in the next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#private_key SnowflakeProvider#private_key}

---

##### `private_key_passphrase`<sup>Optional</sup> <a name="private_key_passphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```python
private_key_passphrase: str
```

- *Type:* str

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#protocol SnowflakeProvider#protocol}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout"></a>

```python
request_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#role SnowflakeProvider#role}

---

##### `skip_toml_file_permission_verification`<sup>Optional</sup> <a name="skip_toml_file_permission_verification" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification"></a>

```python
skip_toml_file_permission_verification: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

False by default.

Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}

---

##### `tmp_directory_path`<sup>Optional</sup> <a name="tmp_directory_path" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath"></a>

```python
tmp_directory_path: str
```

- *Type:* str

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Token to use for OAuth and other forms of token based auth.

When this field is set here, or in the TOML file, the provider sets the `authenticator` to `OAUTH`. Optionally, set the `authenticator` field to the authenticator you want to use. Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#token SnowflakeProvider#token}

---

##### `token_accessor`<sup>Optional</sup> <a name="token_accessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor"></a>

```python
token_accessor: SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `use_legacy_toml_file`<sup>Optional</sup> <a name="use_legacy_toml_file" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile"></a>

```python
use_legacy_toml_file: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

False by default.

When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user"></a>

```python
user: str
```

- *Type:* str

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#user SnowflakeProvider#user}

---

##### `validate_default_parameters`<sup>Optional</sup> <a name="validate_default_parameters" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters"></a>

```python
validate_default_parameters: str
```

- *Type:* str

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#warehouse SnowflakeProvider#warehouse}

---

##### `workload_identity_entra_resource`<sup>Optional</sup> <a name="workload_identity_entra_resource" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityEntraResource"></a>

```python
workload_identity_entra_resource: str
```

- *Type:* str

The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#workload_identity_entra_resource SnowflakeProvider#workload_identity_entra_resource}

---

##### `workload_identity_provider`<sup>Optional</sup> <a name="workload_identity_provider" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityProvider"></a>

```python
workload_identity_provider: str
```

- *Type:* str

The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#workload_identity_provider SnowflakeProvider#workload_identity_provider}

---

### SnowflakeProviderTokenAccessor <a name="SnowflakeProviderTokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import provider

provider.SnowflakeProviderTokenAccessor(
  client_id: str,
  client_secret: str,
  redirect_uri: str,
  refresh_token: str,
  token_endpoint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId">client_id</a></code> | <code>str</code> | The client ID for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri">redirect_uri</a></code> | <code>str</code> | The redirect URI for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken">refresh_token</a></code> | <code>str</code> | The refresh token for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_id SnowflakeProvider#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#client_secret SnowflakeProvider#client_secret}

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

The redirect URI for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#redirect_uri SnowflakeProvider#redirect_uri}

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

The refresh token for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#refresh_token SnowflakeProvider#refresh_token}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs#token_endpoint SnowflakeProvider#token_endpoint}

---



