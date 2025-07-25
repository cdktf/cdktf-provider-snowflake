# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProvider;

SnowflakeProvider.Builder.create(Construct scope, java.lang.String id)
//  .accountName(java.lang.String)
//  .alias(java.lang.String)
//  .authenticator(java.lang.String)
//  .clientIp(java.lang.String)
//  .clientRequestMfaToken(java.lang.String)
//  .clientStoreTemporaryCredential(java.lang.String)
//  .clientTimeout(java.lang.Number)
//  .disableConsoleLogin(java.lang.String)
//  .disableQueryContextCache(java.lang.Boolean)
//  .disableQueryContextCache(IResolvable)
//  .disableTelemetry(java.lang.Boolean)
//  .disableTelemetry(IResolvable)
//  .driverTracing(java.lang.String)
//  .externalBrowserTimeout(java.lang.Number)
//  .host(java.lang.String)
//  .includeRetryReason(java.lang.String)
//  .insecureMode(java.lang.Boolean)
//  .insecureMode(IResolvable)
//  .jwtClientTimeout(java.lang.Number)
//  .jwtExpireTimeout(java.lang.Number)
//  .keepSessionAlive(java.lang.Boolean)
//  .keepSessionAlive(IResolvable)
//  .loginTimeout(java.lang.Number)
//  .maxRetryCount(java.lang.Number)
//  .ocspFailOpen(java.lang.String)
//  .oktaUrl(java.lang.String)
//  .organizationName(java.lang.String)
//  .params(java.util.Map<java.lang.String, java.lang.String>)
//  .passcode(java.lang.String)
//  .passcodeInPassword(java.lang.Boolean)
//  .passcodeInPassword(IResolvable)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .previewFeaturesEnabled(java.util.List<java.lang.String>)
//  .privateKey(java.lang.String)
//  .privateKeyPassphrase(java.lang.String)
//  .profile(java.lang.String)
//  .protocol(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .role(java.lang.String)
//  .skipTomlFilePermissionVerification(java.lang.Boolean)
//  .skipTomlFilePermissionVerification(IResolvable)
//  .tmpDirectoryPath(java.lang.String)
//  .token(java.lang.String)
//  .tokenAccessor(SnowflakeProviderTokenAccessor)
//  .useLegacyTomlFile(java.lang.Boolean)
//  .useLegacyTomlFile(IResolvable)
//  .user(java.lang.String)
//  .validateDefaultParameters(java.lang.String)
//  .warehouse(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.authenticator">authenticator</a></code> | <code>java.lang.String</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA` \| `PROGRAMMATIC_ACCESS_TOKEN`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientIp">clientIp</a></code> | <code>java.lang.String</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientRequestMfaToken">clientRequestMfaToken</a></code> | <code>java.lang.String</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientStoreTemporaryCredential">clientStoreTemporaryCredential</a></code> | <code>java.lang.String</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableConsoleLogin">disableConsoleLogin</a></code> | <code>java.lang.String</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableQueryContextCache">disableQueryContextCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableTelemetry">disableTelemetry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.driverTracing">driverTracing</a></code> | <code>java.lang.String</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.externalBrowserTimeout">externalBrowserTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.includeRetryReason">includeRetryReason</a></code> | <code>java.lang.String</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.insecureMode">insecureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtClientTimeout">jwtClientTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtExpireTimeout">jwtExpireTimeout</a></code> | <code>java.lang.Number</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.keepSessionAlive">keepSessionAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.loginTimeout">loginTimeout</a></code> | <code>java.lang.Number</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.ocspFailOpen">ocspFailOpen</a></code> | <code>java.lang.String</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oktaUrl">oktaUrl</a></code> | <code>java.lang.String</code> | The URL of the Okta server. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcode">passcode</a></code> | <code>java.lang.String</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcodeInPassword">passcodeInPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.previewFeaturesEnabled">previewFeaturesEnabled</a></code> | <code>java.util.List<java.lang.String></code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | A protocol used in the connection. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.skipTomlFilePermissionVerification">skipTomlFilePermissionVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tmpDirectoryPath">tmpDirectoryPath</a></code> | <code>java.lang.String</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tokenAccessor">tokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.useLegacyTomlFile">useLegacyTomlFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.validateDefaultParameters">validateDefaultParameters</a></code> | <code>java.lang.String</code> | True by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.warehouse">warehouse</a></code> | <code>java.lang.String</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#account_name SnowflakeProvider#account_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#alias SnowflakeProvider#alias}

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.authenticator"></a>

- *Type:* java.lang.String

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientIp"></a>

- *Type:* java.lang.String

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `clientRequestMfaToken`<sup>Optional</sup> <a name="clientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientRequestMfaToken"></a>

- *Type:* java.lang.String

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `clientStoreTemporaryCredential`<sup>Optional</sup> <a name="clientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientStoreTemporaryCredential"></a>

- *Type:* java.lang.String

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.clientTimeout"></a>

- *Type:* java.lang.Number

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `disableConsoleLogin`<sup>Optional</sup> <a name="disableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableConsoleLogin"></a>

- *Type:* java.lang.String

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `disableQueryContextCache`<sup>Optional</sup> <a name="disableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableQueryContextCache"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `disableTelemetry`<sup>Optional</sup> <a name="disableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.disableTelemetry"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `driverTracing`<sup>Optional</sup> <a name="driverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.driverTracing"></a>

- *Type:* java.lang.String

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `externalBrowserTimeout`<sup>Optional</sup> <a name="externalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.externalBrowserTimeout"></a>

- *Type:* java.lang.Number

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#host SnowflakeProvider#host}

---

##### `includeRetryReason`<sup>Optional</sup> <a name="includeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.includeRetryReason"></a>

- *Type:* java.lang.String

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.insecureMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `jwtClientTimeout`<sup>Optional</sup> <a name="jwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtClientTimeout"></a>

- *Type:* java.lang.Number

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `jwtExpireTimeout`<sup>Optional</sup> <a name="jwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.jwtExpireTimeout"></a>

- *Type:* java.lang.Number

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `keepSessionAlive`<sup>Optional</sup> <a name="keepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.keepSessionAlive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `loginTimeout`<sup>Optional</sup> <a name="loginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.loginTimeout"></a>

- *Type:* java.lang.Number

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.maxRetryCount"></a>

- *Type:* java.lang.Number

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.ocspFailOpen"></a>

- *Type:* java.lang.String

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `oktaUrl`<sup>Optional</sup> <a name="oktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.oktaUrl"></a>

- *Type:* java.lang.String

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.organizationName"></a>

- *Type:* java.lang.String

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#organization_name SnowflakeProvider#organization_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.params"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#params SnowflakeProvider#params}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcode"></a>

- *Type:* java.lang.String

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#passcode SnowflakeProvider#passcode}

---

##### `passcodeInPassword`<sup>Optional</sup> <a name="passcodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.passcodeInPassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#port SnowflakeProvider#port}

---

##### `previewFeaturesEnabled`<sup>Optional</sup> <a name="previewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.previewFeaturesEnabled"></a>

- *Type:* java.util.List<java.lang.String>

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Valid options are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_job_service_resource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#private_key SnowflakeProvider#private_key}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.privateKeyPassphrase"></a>

- *Type:* java.lang.String

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#protocol SnowflakeProvider#protocol}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.Number

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#role SnowflakeProvider#role}

---

##### `skipTomlFilePermissionVerification`<sup>Optional</sup> <a name="skipTomlFilePermissionVerification" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.skipTomlFilePermissionVerification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

False by default.

Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}

---

##### `tmpDirectoryPath`<sup>Optional</sup> <a name="tmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tmpDirectoryPath"></a>

- *Type:* java.lang.String

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Token to use for OAuth and other forms of token based auth.

Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#token SnowflakeProvider#token}

---

##### `tokenAccessor`<sup>Optional</sup> <a name="tokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.tokenAccessor"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `useLegacyTomlFile`<sup>Optional</sup> <a name="useLegacyTomlFile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.useLegacyTomlFile"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

False by default.

When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.user"></a>

- *Type:* java.lang.String

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#user SnowflakeProvider#user}

---

##### `validateDefaultParameters`<sup>Optional</sup> <a name="validateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.validateDefaultParameters"></a>

- *Type:* java.lang.String

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.warehouse"></a>

- *Type:* java.lang.String

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#warehouse SnowflakeProvider#warehouse}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccountName">resetAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator">resetAuthenticator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp">resetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken">resetClientRequestMfaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential">resetClientStoreTemporaryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout">resetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin">resetDisableConsoleLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache">resetDisableQueryContextCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry">resetDisableTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing">resetDriverTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout">resetExternalBrowserTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason">resetIncludeRetryReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">resetInsecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout">resetJwtClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout">resetJwtExpireTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive">resetKeepSessionAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout">resetLoginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount">resetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen">resetOcspFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl">resetOktaUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode">resetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword">resetPasscodeInPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled">resetPreviewFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification">resetSkipTomlFilePermissionVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath">resetTmpDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor">resetTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile">resetUseLegacyTomlFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser">resetUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters">resetValidateDefaultParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">resetWarehouse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccountName` <a name="resetAccountName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccountName"></a>

```java
public void resetAccountName()
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthenticator` <a name="resetAuthenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator"></a>

```java
public void resetAuthenticator()
```

##### `resetClientIp` <a name="resetClientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp"></a>

```java
public void resetClientIp()
```

##### `resetClientRequestMfaToken` <a name="resetClientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken"></a>

```java
public void resetClientRequestMfaToken()
```

##### `resetClientStoreTemporaryCredential` <a name="resetClientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential"></a>

```java
public void resetClientStoreTemporaryCredential()
```

##### `resetClientTimeout` <a name="resetClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout"></a>

```java
public void resetClientTimeout()
```

##### `resetDisableConsoleLogin` <a name="resetDisableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin"></a>

```java
public void resetDisableConsoleLogin()
```

##### `resetDisableQueryContextCache` <a name="resetDisableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache"></a>

```java
public void resetDisableQueryContextCache()
```

##### `resetDisableTelemetry` <a name="resetDisableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry"></a>

```java
public void resetDisableTelemetry()
```

##### `resetDriverTracing` <a name="resetDriverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing"></a>

```java
public void resetDriverTracing()
```

##### `resetExternalBrowserTimeout` <a name="resetExternalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout"></a>

```java
public void resetExternalBrowserTimeout()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```java
public void resetHost()
```

##### `resetIncludeRetryReason` <a name="resetIncludeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason"></a>

```java
public void resetIncludeRetryReason()
```

##### `resetInsecureMode` <a name="resetInsecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```java
public void resetInsecureMode()
```

##### `resetJwtClientTimeout` <a name="resetJwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout"></a>

```java
public void resetJwtClientTimeout()
```

##### `resetJwtExpireTimeout` <a name="resetJwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout"></a>

```java
public void resetJwtExpireTimeout()
```

##### `resetKeepSessionAlive` <a name="resetKeepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive"></a>

```java
public void resetKeepSessionAlive()
```

##### `resetLoginTimeout` <a name="resetLoginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout"></a>

```java
public void resetLoginTimeout()
```

##### `resetMaxRetryCount` <a name="resetMaxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount"></a>

```java
public void resetMaxRetryCount()
```

##### `resetOcspFailOpen` <a name="resetOcspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen"></a>

```java
public void resetOcspFailOpen()
```

##### `resetOktaUrl` <a name="resetOktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl"></a>

```java
public void resetOktaUrl()
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName"></a>

```java
public void resetOrganizationName()
```

##### `resetParams` <a name="resetParams" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams"></a>

```java
public void resetParams()
```

##### `resetPasscode` <a name="resetPasscode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode"></a>

```java
public void resetPasscode()
```

##### `resetPasscodeInPassword` <a name="resetPasscodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword"></a>

```java
public void resetPasscodeInPassword()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreviewFeaturesEnabled` <a name="resetPreviewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled"></a>

```java
public void resetPreviewFeaturesEnabled()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```java
public void resetPrivateKeyPassphrase()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```java
public void resetRole()
```

##### `resetSkipTomlFilePermissionVerification` <a name="resetSkipTomlFilePermissionVerification" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification"></a>

```java
public void resetSkipTomlFilePermissionVerification()
```

##### `resetTmpDirectoryPath` <a name="resetTmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath"></a>

```java
public void resetTmpDirectoryPath()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetTokenAccessor` <a name="resetTokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor"></a>

```java
public void resetTokenAccessor()
```

##### `resetUseLegacyTomlFile` <a name="resetUseLegacyTomlFile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile"></a>

```java
public void resetUseLegacyTomlFile()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser"></a>

```java
public void resetUser()
```

##### `resetValidateDefaultParameters` <a name="resetValidateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters"></a>

```java
public void resetValidateDefaultParameters()
```

##### `resetWarehouse` <a name="resetWarehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```java
public void resetWarehouse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProvider;

SnowflakeProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProvider;

SnowflakeProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProvider;

SnowflakeProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProvider;

SnowflakeProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SnowflakeProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SnowflakeProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SnowflakeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SnowflakeProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput">authenticatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput">clientIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput">clientRequestMfaTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput">clientStoreTemporaryCredentialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput">clientTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput">disableConsoleLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput">disableQueryContextCacheInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput">disableTelemetryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput">driverTracingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput">externalBrowserTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput">includeRetryReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">insecureModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput">jwtClientTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput">jwtExpireTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput">keepSessionAliveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput">loginTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput">maxRetryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput">ocspFailOpenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput">oktaUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput">organizationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput">paramsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput">passcodeInPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput">passcodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput">previewFeaturesEnabledInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput">skipTomlFilePermissionVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput">tmpDirectoryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput">tokenAccessorInput</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput">useLegacyTomlFileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput">validateDefaultParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator">authenticator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp">clientIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken">clientRequestMfaToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential">clientStoreTemporaryCredential</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin">disableConsoleLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache">disableQueryContextCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry">disableTelemetry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracing">driverTracing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout">externalBrowserTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason">includeRetryReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">insecureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout">jwtClientTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout">jwtExpireTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive">keepSessionAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout">loginTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen">ocspFailOpen</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl">oktaUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode">passcode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword">passcodeInPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled">previewFeaturesEnabled</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification">skipTomlFilePermissionVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath">tmpDirectoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor">tokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile">useLegacyTomlFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters">validateDefaultParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authenticatorInput`<sup>Optional</sup> <a name="authenticatorInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput"></a>

```java
public java.lang.String getAuthenticatorInput();
```

- *Type:* java.lang.String

---

##### `clientIpInput`<sup>Optional</sup> <a name="clientIpInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput"></a>

```java
public java.lang.String getClientIpInput();
```

- *Type:* java.lang.String

---

##### `clientRequestMfaTokenInput`<sup>Optional</sup> <a name="clientRequestMfaTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput"></a>

```java
public java.lang.String getClientRequestMfaTokenInput();
```

- *Type:* java.lang.String

---

##### `clientStoreTemporaryCredentialInput`<sup>Optional</sup> <a name="clientStoreTemporaryCredentialInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput"></a>

```java
public java.lang.String getClientStoreTemporaryCredentialInput();
```

- *Type:* java.lang.String

---

##### `clientTimeoutInput`<sup>Optional</sup> <a name="clientTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput"></a>

```java
public java.lang.Number getClientTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `disableConsoleLoginInput`<sup>Optional</sup> <a name="disableConsoleLoginInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput"></a>

```java
public java.lang.String getDisableConsoleLoginInput();
```

- *Type:* java.lang.String

---

##### `disableQueryContextCacheInput`<sup>Optional</sup> <a name="disableQueryContextCacheInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput"></a>

```java
public java.lang.Object getDisableQueryContextCacheInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableTelemetryInput`<sup>Optional</sup> <a name="disableTelemetryInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput"></a>

```java
public java.lang.Object getDisableTelemetryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `driverTracingInput`<sup>Optional</sup> <a name="driverTracingInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput"></a>

```java
public java.lang.String getDriverTracingInput();
```

- *Type:* java.lang.String

---

##### `externalBrowserTimeoutInput`<sup>Optional</sup> <a name="externalBrowserTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput"></a>

```java
public java.lang.Number getExternalBrowserTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `includeRetryReasonInput`<sup>Optional</sup> <a name="includeRetryReasonInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput"></a>

```java
public java.lang.String getIncludeRetryReasonInput();
```

- *Type:* java.lang.String

---

##### `insecureModeInput`<sup>Optional</sup> <a name="insecureModeInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```java
public java.lang.Object getInsecureModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jwtClientTimeoutInput`<sup>Optional</sup> <a name="jwtClientTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput"></a>

```java
public java.lang.Number getJwtClientTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `jwtExpireTimeoutInput`<sup>Optional</sup> <a name="jwtExpireTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput"></a>

```java
public java.lang.Number getJwtExpireTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `keepSessionAliveInput`<sup>Optional</sup> <a name="keepSessionAliveInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput"></a>

```java
public java.lang.Object getKeepSessionAliveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginTimeoutInput`<sup>Optional</sup> <a name="loginTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput"></a>

```java
public java.lang.Number getLoginTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryCountInput`<sup>Optional</sup> <a name="maxRetryCountInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput"></a>

```java
public java.lang.Number getMaxRetryCountInput();
```

- *Type:* java.lang.Number

---

##### `ocspFailOpenInput`<sup>Optional</sup> <a name="ocspFailOpenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput"></a>

```java
public java.lang.String getOcspFailOpenInput();
```

- *Type:* java.lang.String

---

##### `oktaUrlInput`<sup>Optional</sup> <a name="oktaUrlInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput"></a>

```java
public java.lang.String getOktaUrlInput();
```

- *Type:* java.lang.String

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput"></a>

```java
public java.lang.String getOrganizationNameInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passcodeInPasswordInput`<sup>Optional</sup> <a name="passcodeInPasswordInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput"></a>

```java
public java.lang.Object getPasscodeInPasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passcodeInput`<sup>Optional</sup> <a name="passcodeInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput"></a>

```java
public java.lang.String getPasscodeInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `previewFeaturesEnabledInput`<sup>Optional</sup> <a name="previewFeaturesEnabledInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput"></a>

```java
public java.util.List<java.lang.String> getPreviewFeaturesEnabledInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```java
public java.lang.String getPrivateKeyPassphraseInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput"></a>

```java
public java.lang.Number getRequestTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `skipTomlFilePermissionVerificationInput`<sup>Optional</sup> <a name="skipTomlFilePermissionVerificationInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput"></a>

```java
public java.lang.Object getSkipTomlFilePermissionVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tmpDirectoryPathInput`<sup>Optional</sup> <a name="tmpDirectoryPathInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput"></a>

```java
public java.lang.String getTmpDirectoryPathInput();
```

- *Type:* java.lang.String

---

##### `tokenAccessorInput`<sup>Optional</sup> <a name="tokenAccessorInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput"></a>

```java
public SnowflakeProviderTokenAccessor getTokenAccessorInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `useLegacyTomlFileInput`<sup>Optional</sup> <a name="useLegacyTomlFileInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput"></a>

```java
public java.lang.Object getUseLegacyTomlFileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `validateDefaultParametersInput`<sup>Optional</sup> <a name="validateDefaultParametersInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput"></a>

```java
public java.lang.String getValidateDefaultParametersInput();
```

- *Type:* java.lang.String

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator"></a>

```java
public java.lang.String getAuthenticator();
```

- *Type:* java.lang.String

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp"></a>

```java
public java.lang.String getClientIp();
```

- *Type:* java.lang.String

---

##### `clientRequestMfaToken`<sup>Optional</sup> <a name="clientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken"></a>

```java
public java.lang.String getClientRequestMfaToken();
```

- *Type:* java.lang.String

---

##### `clientStoreTemporaryCredential`<sup>Optional</sup> <a name="clientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential"></a>

```java
public java.lang.String getClientStoreTemporaryCredential();
```

- *Type:* java.lang.String

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

---

##### `disableConsoleLogin`<sup>Optional</sup> <a name="disableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin"></a>

```java
public java.lang.String getDisableConsoleLogin();
```

- *Type:* java.lang.String

---

##### `disableQueryContextCache`<sup>Optional</sup> <a name="disableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache"></a>

```java
public java.lang.Object getDisableQueryContextCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableTelemetry`<sup>Optional</sup> <a name="disableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry"></a>

```java
public java.lang.Object getDisableTelemetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `driverTracing`<sup>Optional</sup> <a name="driverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracing"></a>

```java
public java.lang.String getDriverTracing();
```

- *Type:* java.lang.String

---

##### `externalBrowserTimeout`<sup>Optional</sup> <a name="externalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout"></a>

```java
public java.lang.Number getExternalBrowserTimeout();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `includeRetryReason`<sup>Optional</sup> <a name="includeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason"></a>

```java
public java.lang.String getIncludeRetryReason();
```

- *Type:* java.lang.String

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```java
public java.lang.Object getInsecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jwtClientTimeout`<sup>Optional</sup> <a name="jwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout"></a>

```java
public java.lang.Number getJwtClientTimeout();
```

- *Type:* java.lang.Number

---

##### `jwtExpireTimeout`<sup>Optional</sup> <a name="jwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout"></a>

```java
public java.lang.Number getJwtExpireTimeout();
```

- *Type:* java.lang.Number

---

##### `keepSessionAlive`<sup>Optional</sup> <a name="keepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive"></a>

```java
public java.lang.Object getKeepSessionAlive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loginTimeout`<sup>Optional</sup> <a name="loginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout"></a>

```java
public java.lang.Number getLoginTimeout();
```

- *Type:* java.lang.Number

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen"></a>

```java
public java.lang.String getOcspFailOpen();
```

- *Type:* java.lang.String

---

##### `oktaUrl`<sup>Optional</sup> <a name="oktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl"></a>

```java
public java.lang.String getOktaUrl();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode"></a>

```java
public java.lang.String getPasscode();
```

- *Type:* java.lang.String

---

##### `passcodeInPassword`<sup>Optional</sup> <a name="passcodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword"></a>

```java
public java.lang.Object getPasscodeInPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `previewFeaturesEnabled`<sup>Optional</sup> <a name="previewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled"></a>

```java
public java.util.List<java.lang.String> getPreviewFeaturesEnabled();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `skipTomlFilePermissionVerification`<sup>Optional</sup> <a name="skipTomlFilePermissionVerification" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification"></a>

```java
public java.lang.Object getSkipTomlFilePermissionVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tmpDirectoryPath`<sup>Optional</sup> <a name="tmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath"></a>

```java
public java.lang.String getTmpDirectoryPath();
```

- *Type:* java.lang.String

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenAccessor`<sup>Optional</sup> <a name="tokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor"></a>

```java
public SnowflakeProviderTokenAccessor getTokenAccessor();
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `useLegacyTomlFile`<sup>Optional</sup> <a name="useLegacyTomlFile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile"></a>

```java
public java.lang.Object getUseLegacyTomlFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `validateDefaultParameters`<sup>Optional</sup> <a name="validateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters"></a>

```java
public java.lang.String getValidateDefaultParameters();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProviderConfig;

SnowflakeProviderConfig.builder()
//  .accountName(java.lang.String)
//  .alias(java.lang.String)
//  .authenticator(java.lang.String)
//  .clientIp(java.lang.String)
//  .clientRequestMfaToken(java.lang.String)
//  .clientStoreTemporaryCredential(java.lang.String)
//  .clientTimeout(java.lang.Number)
//  .disableConsoleLogin(java.lang.String)
//  .disableQueryContextCache(java.lang.Boolean)
//  .disableQueryContextCache(IResolvable)
//  .disableTelemetry(java.lang.Boolean)
//  .disableTelemetry(IResolvable)
//  .driverTracing(java.lang.String)
//  .externalBrowserTimeout(java.lang.Number)
//  .host(java.lang.String)
//  .includeRetryReason(java.lang.String)
//  .insecureMode(java.lang.Boolean)
//  .insecureMode(IResolvable)
//  .jwtClientTimeout(java.lang.Number)
//  .jwtExpireTimeout(java.lang.Number)
//  .keepSessionAlive(java.lang.Boolean)
//  .keepSessionAlive(IResolvable)
//  .loginTimeout(java.lang.Number)
//  .maxRetryCount(java.lang.Number)
//  .ocspFailOpen(java.lang.String)
//  .oktaUrl(java.lang.String)
//  .organizationName(java.lang.String)
//  .params(java.util.Map<java.lang.String, java.lang.String>)
//  .passcode(java.lang.String)
//  .passcodeInPassword(java.lang.Boolean)
//  .passcodeInPassword(IResolvable)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .previewFeaturesEnabled(java.util.List<java.lang.String>)
//  .privateKey(java.lang.String)
//  .privateKeyPassphrase(java.lang.String)
//  .profile(java.lang.String)
//  .protocol(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .role(java.lang.String)
//  .skipTomlFilePermissionVerification(java.lang.Boolean)
//  .skipTomlFilePermissionVerification(IResolvable)
//  .tmpDirectoryPath(java.lang.String)
//  .token(java.lang.String)
//  .tokenAccessor(SnowflakeProviderTokenAccessor)
//  .useLegacyTomlFile(java.lang.Boolean)
//  .useLegacyTomlFile(IResolvable)
//  .user(java.lang.String)
//  .validateDefaultParameters(java.lang.String)
//  .warehouse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator">authenticator</a></code> | <code>java.lang.String</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA` \| `PROGRAMMATIC_ACCESS_TOKEN`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp">clientIp</a></code> | <code>java.lang.String</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken">clientRequestMfaToken</a></code> | <code>java.lang.String</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential">clientStoreTemporaryCredential</a></code> | <code>java.lang.String</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin">disableConsoleLogin</a></code> | <code>java.lang.String</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache">disableQueryContextCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry">disableTelemetry</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing">driverTracing</a></code> | <code>java.lang.String</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout">externalBrowserTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">host</a></code> | <code>java.lang.String</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason">includeRetryReason</a></code> | <code>java.lang.String</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">insecureMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout">jwtClientTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout">jwtExpireTimeout</a></code> | <code>java.lang.Number</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive">keepSessionAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout">loginTimeout</a></code> | <code>java.lang.Number</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen">ocspFailOpen</a></code> | <code>java.lang.String</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl">oktaUrl</a></code> | <code>java.lang.String</code> | The URL of the Okta server. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode">passcode</a></code> | <code>java.lang.String</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword">passcodeInPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled">previewFeaturesEnabled</a></code> | <code>java.util.List<java.lang.String></code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | A protocol used in the connection. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">role</a></code> | <code>java.lang.String</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification">skipTomlFilePermissionVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath">tmpDirectoryPath</a></code> | <code>java.lang.String</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor">tokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile">useLegacyTomlFile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user">user</a></code> | <code>java.lang.String</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters">validateDefaultParameters</a></code> | <code>java.lang.String</code> | True by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#account_name SnowflakeProvider#account_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#alias SnowflakeProvider#alias}

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator"></a>

```java
public java.lang.String getAuthenticator();
```

- *Type:* java.lang.String

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp"></a>

```java
public java.lang.String getClientIp();
```

- *Type:* java.lang.String

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `clientRequestMfaToken`<sup>Optional</sup> <a name="clientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken"></a>

```java
public java.lang.String getClientRequestMfaToken();
```

- *Type:* java.lang.String

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `clientStoreTemporaryCredential`<sup>Optional</sup> <a name="clientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential"></a>

```java
public java.lang.String getClientStoreTemporaryCredential();
```

- *Type:* java.lang.String

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `disableConsoleLogin`<sup>Optional</sup> <a name="disableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin"></a>

```java
public java.lang.String getDisableConsoleLogin();
```

- *Type:* java.lang.String

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `disableQueryContextCache`<sup>Optional</sup> <a name="disableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache"></a>

```java
public java.lang.Object getDisableQueryContextCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `disableTelemetry`<sup>Optional</sup> <a name="disableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry"></a>

```java
public java.lang.Object getDisableTelemetry();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `driverTracing`<sup>Optional</sup> <a name="driverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing"></a>

```java
public java.lang.String getDriverTracing();
```

- *Type:* java.lang.String

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `externalBrowserTimeout`<sup>Optional</sup> <a name="externalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout"></a>

```java
public java.lang.Number getExternalBrowserTimeout();
```

- *Type:* java.lang.Number

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#host SnowflakeProvider#host}

---

##### `includeRetryReason`<sup>Optional</sup> <a name="includeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason"></a>

```java
public java.lang.String getIncludeRetryReason();
```

- *Type:* java.lang.String

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```java
public java.lang.Object getInsecureMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `jwtClientTimeout`<sup>Optional</sup> <a name="jwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout"></a>

```java
public java.lang.Number getJwtClientTimeout();
```

- *Type:* java.lang.Number

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `jwtExpireTimeout`<sup>Optional</sup> <a name="jwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout"></a>

```java
public java.lang.Number getJwtExpireTimeout();
```

- *Type:* java.lang.Number

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `keepSessionAlive`<sup>Optional</sup> <a name="keepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive"></a>

```java
public java.lang.Object getKeepSessionAlive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `loginTimeout`<sup>Optional</sup> <a name="loginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout"></a>

```java
public java.lang.Number getLoginTimeout();
```

- *Type:* java.lang.Number

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen"></a>

```java
public java.lang.String getOcspFailOpen();
```

- *Type:* java.lang.String

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `oktaUrl`<sup>Optional</sup> <a name="oktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl"></a>

```java
public java.lang.String getOktaUrl();
```

- *Type:* java.lang.String

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#organization_name SnowflakeProvider#organization_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#params SnowflakeProvider#params}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode"></a>

```java
public java.lang.String getPasscode();
```

- *Type:* java.lang.String

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#passcode SnowflakeProvider#passcode}

---

##### `passcodeInPassword`<sup>Optional</sup> <a name="passcodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword"></a>

```java
public java.lang.Object getPasscodeInPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#port SnowflakeProvider#port}

---

##### `previewFeaturesEnabled`<sup>Optional</sup> <a name="previewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled"></a>

```java
public java.util.List<java.lang.String> getPreviewFeaturesEnabled();
```

- *Type:* java.util.List<java.lang.String>

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Valid options are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_job_service_resource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#private_key SnowflakeProvider#private_key}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#protocol SnowflakeProvider#protocol}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#role SnowflakeProvider#role}

---

##### `skipTomlFilePermissionVerification`<sup>Optional</sup> <a name="skipTomlFilePermissionVerification" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification"></a>

```java
public java.lang.Object getSkipTomlFilePermissionVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

False by default.

Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}

---

##### `tmpDirectoryPath`<sup>Optional</sup> <a name="tmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath"></a>

```java
public java.lang.String getTmpDirectoryPath();
```

- *Type:* java.lang.String

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Token to use for OAuth and other forms of token based auth.

Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#token SnowflakeProvider#token}

---

##### `tokenAccessor`<sup>Optional</sup> <a name="tokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor"></a>

```java
public SnowflakeProviderTokenAccessor getTokenAccessor();
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `useLegacyTomlFile`<sup>Optional</sup> <a name="useLegacyTomlFile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile"></a>

```java
public java.lang.Object getUseLegacyTomlFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

False by default.

When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#user SnowflakeProvider#user}

---

##### `validateDefaultParameters`<sup>Optional</sup> <a name="validateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters"></a>

```java
public java.lang.String getValidateDefaultParameters();
```

- *Type:* java.lang.String

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#warehouse SnowflakeProvider#warehouse}

---

### SnowflakeProviderTokenAccessor <a name="SnowflakeProviderTokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.provider.SnowflakeProviderTokenAccessor;

SnowflakeProviderTokenAccessor.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .redirectUri(java.lang.String)
    .refreshToken(java.lang.String)
    .tokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | The redirect URI for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | The refresh token for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_id SnowflakeProvider#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#client_secret SnowflakeProvider#client_secret}

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

The redirect URI for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#redirect_uri SnowflakeProvider#redirect_uri}

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

The refresh token for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#refresh_token SnowflakeProvider#refresh_token}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs#token_endpoint SnowflakeProvider#token_endpoint}

---



