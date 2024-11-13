// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnowflakeProviderConfig {
  /**
  * Use `account_name` and `organization_name` instead. Specifies your Snowflake account identifier assigned, by Snowflake. The [account locator](https://docs.snowflake.com/en/user-guide/admin-account-identifier#format-2-account-locator-in-a-region) format is not supported. For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#account SnowflakeProvider#account}
  */
  readonly account?: string;
  /**
  * Specifies your Snowflake account name assigned by Snowflake. For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#account_name SnowflakeProvider#account_name}
  */
  readonly accountName?: string;
  /**
  * Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `JWT` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA`. Value `JWT` is deprecated and will be removed in future releases. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#authenticator SnowflakeProvider#authenticator}
  */
  readonly authenticator?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#browser_auth SnowflakeProvider#browser_auth}
  */
  readonly browserAuth?: boolean | cdktf.IResolvable;
  /**
  * IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#client_ip SnowflakeProvider#client_ip}
  */
  readonly clientIp?: string;
  /**
  * When true the MFA token is cached in the credential manager. True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}
  */
  readonly clientRequestMfaToken?: string;
  /**
  * When true the ID token is cached in the credential manager. True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}
  */
  readonly clientStoreTemporaryCredential?: string;
  /**
  * The timeout in seconds for the client to complete the authentication. Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#client_timeout SnowflakeProvider#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#disable_console_login SnowflakeProvider#disable_console_login}
  */
  readonly disableConsoleLogin?: string;
  /**
  * Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}
  */
  readonly disableQueryContextCache?: boolean | cdktf.IResolvable;
  /**
  * Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}
  */
  readonly disableTelemetry?: boolean | cdktf.IResolvable;
  /**
  * Specifies the logging level to be used by the driver. Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#driver_tracing SnowflakeProvider#driver_tracing}
  */
  readonly driverTracing?: string;
  /**
  * The timeout in seconds for the external browser to complete the authentication. Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}
  */
  readonly externalBrowserTimeout?: number;
  /**
  * Specifies a custom host value used by the driver for privatelink connections. Can also be sourced from the `SNOWFLAKE_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#host SnowflakeProvider#host}
  */
  readonly host?: string;
  /**
  * Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}
  */
  readonly includeRetryReason?: string;
  /**
  * If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#insecure_mode SnowflakeProvider#insecure_mode}
  */
  readonly insecureMode?: boolean | cdktf.IResolvable;
  /**
  * The timeout in seconds for the JWT client to complete the authentication. Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}
  */
  readonly jwtClientTimeout?: number;
  /**
  * JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}
  */
  readonly jwtExpireTimeout?: number;
  /**
  * Enables the session to persist even after the connection is closed. Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}
  */
  readonly keepSessionAlive?: boolean | cdktf.IResolvable;
  /**
  * Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#login_timeout SnowflakeProvider#login_timeout}
  */
  readonly loginTimeout?: number;
  /**
  * Specifies how many times non-periodic HTTP request can be retried by the driver. Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#max_retry_count SnowflakeProvider#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * Token for use with OAuth. Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can also be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#oauth_access_token SnowflakeProvider#oauth_access_token}
  */
  readonly oauthAccessToken?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#oauth_endpoint SnowflakeProvider#oauth_endpoint}
  */
  readonly oauthEndpoint?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}
  */
  readonly oauthRedirectUrl?: string;
  /**
  * Token for use with OAuth. Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can also be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}
  */
  readonly oauthRefreshToken?: string;
  /**
  * True represents OCSP fail open mode. False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}
  */
  readonly ocspFailOpen?: string;
  /**
  * The URL of the Okta server. e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#okta_url SnowflakeProvider#okta_url}
  */
  readonly oktaUrl?: string;
  /**
  * Specifies your Snowflake organization name assigned by Snowflake. For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#organization_name SnowflakeProvider#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#params SnowflakeProvider#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#passcode SnowflakeProvider#passcode}
  */
  readonly passcode?: string;
  /**
  * False by default. Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}
  */
  readonly passcodeInPassword?: boolean | cdktf.IResolvable;
  /**
  * Password for user + password auth. Cannot be used with `browser_auth` or `private_key_path`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#password SnowflakeProvider#password}
  */
  readonly password?: string;
  /**
  * Specifies a custom port value used by the driver for privatelink connections. Can also be sourced from the `SNOWFLAKE_PORT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#port SnowflakeProvider#port}
  */
  readonly port?: number;
  /**
  * Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#private_key SnowflakeProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Path to a private key for using keypair authentication. Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can also be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#private_key_path SnowflakeProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#profile SnowflakeProvider#profile}
  */
  readonly profile?: string;
  /**
  * A protocol used in the connection. Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#protocol SnowflakeProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Snowflake region, such as "eu-central-1", with this parameter. However, since this parameter is deprecated, it is best to specify the region as part of the account parameter. For details, see the description of the account parameter. [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can also be sourced from the `SNOWFLAKE_REGION` environment variable. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#region SnowflakeProvider#region}
  */
  readonly region?: string;
  /**
  * request retry timeout in seconds EXCLUDING network roundtrip and read out http response. Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#request_timeout SnowflakeProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Specifies the role to use by default for accessing Snowflake objects in the client session. Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#role SnowflakeProvider#role}
  */
  readonly role?: string;
  /**
  * Sets session parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#session_params SnowflakeProvider#session_params}
  */
  readonly sessionParams?: { [key: string]: string };
  /**
  * Sets temporary directory used by the driver for operations like encrypting, compressing etc. Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}
  */
  readonly tmpDirectoryPath?: string;
  /**
  * Token to use for OAuth and other forms of token based auth. Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#token SnowflakeProvider#token}
  */
  readonly token?: string;
  /**
  * Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#user SnowflakeProvider#user}
  */
  readonly user?: string;
  /**
  * Username for user + password authentication. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#username SnowflakeProvider#username}
  */
  readonly username?: string;
  /**
  * True by default. If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}
  */
  readonly validateDefaultParameters?: string;
  /**
  * Specifies the virtual warehouse to use by default for queries, loading, etc. in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#warehouse SnowflakeProvider#warehouse}
  */
  readonly warehouse?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#alias SnowflakeProvider#alias}
  */
  readonly alias?: string;
  /**
  * token_accessor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#token_accessor SnowflakeProvider#token_accessor}
  */
  readonly tokenAccessor?: SnowflakeProviderTokenAccessor;
}
export interface SnowflakeProviderTokenAccessor {
  /**
  * The client ID for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#client_id SnowflakeProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#client_secret SnowflakeProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The redirect URI for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#redirect_uri SnowflakeProvider#redirect_uri}
  */
  readonly redirectUri: string;
  /**
  * The refresh token for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#refresh_token SnowflakeProvider#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#token_endpoint SnowflakeProvider#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function snowflakeProviderTokenAccessorToTerraform(struct?: SnowflakeProviderTokenAccessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function snowflakeProviderTokenAccessorToHclTerraform(struct?: SnowflakeProviderTokenAccessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs snowflake}
*/
export class SnowflakeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnowflakeProvider to import
  * @param importFromId The id of the existing SnowflakeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnowflakeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs snowflake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnowflakeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnowflakeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.98.0',
        providerVersionConstraint: ' ~> 0.40'
      },
      terraformProviderSource: 'Snowflake-Labs/snowflake'
    });
    this._account = config.account;
    this._accountName = config.accountName;
    this._authenticator = config.authenticator;
    this._browserAuth = config.browserAuth;
    this._clientIp = config.clientIp;
    this._clientRequestMfaToken = config.clientRequestMfaToken;
    this._clientStoreTemporaryCredential = config.clientStoreTemporaryCredential;
    this._clientTimeout = config.clientTimeout;
    this._disableConsoleLogin = config.disableConsoleLogin;
    this._disableQueryContextCache = config.disableQueryContextCache;
    this._disableTelemetry = config.disableTelemetry;
    this._driverTracing = config.driverTracing;
    this._externalBrowserTimeout = config.externalBrowserTimeout;
    this._host = config.host;
    this._includeRetryReason = config.includeRetryReason;
    this._insecureMode = config.insecureMode;
    this._jwtClientTimeout = config.jwtClientTimeout;
    this._jwtExpireTimeout = config.jwtExpireTimeout;
    this._keepSessionAlive = config.keepSessionAlive;
    this._loginTimeout = config.loginTimeout;
    this._maxRetryCount = config.maxRetryCount;
    this._oauthAccessToken = config.oauthAccessToken;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthEndpoint = config.oauthEndpoint;
    this._oauthRedirectUrl = config.oauthRedirectUrl;
    this._oauthRefreshToken = config.oauthRefreshToken;
    this._ocspFailOpen = config.ocspFailOpen;
    this._oktaUrl = config.oktaUrl;
    this._organizationName = config.organizationName;
    this._params = config.params;
    this._passcode = config.passcode;
    this._passcodeInPassword = config.passcodeInPassword;
    this._password = config.password;
    this._port = config.port;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._privateKeyPath = config.privateKeyPath;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._region = config.region;
    this._requestTimeout = config.requestTimeout;
    this._role = config.role;
    this._sessionParams = config.sessionParams;
    this._tmpDirectoryPath = config.tmpDirectoryPath;
    this._token = config.token;
    this._user = config.user;
    this._username = config.username;
    this._validateDefaultParameters = config.validateDefaultParameters;
    this._warehouse = config.warehouse;
    this._alias = config.alias;
    this._tokenAccessor = config.tokenAccessor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string | undefined) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // authenticator - computed: false, optional: true, required: false
  private _authenticator?: string; 
  public get authenticator() {
    return this._authenticator;
  }
  public set authenticator(value: string | undefined) {
    this._authenticator = value;
  }
  public resetAuthenticator() {
    this._authenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorInput() {
    return this._authenticator;
  }

  // browser_auth - computed: false, optional: true, required: false
  private _browserAuth?: boolean | cdktf.IResolvable; 
  public get browserAuth() {
    return this._browserAuth;
  }
  public set browserAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._browserAuth = value;
  }
  public resetBrowserAuth() {
    this._browserAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserAuthInput() {
    return this._browserAuth;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this._clientIp;
  }
  public set clientIp(value: string | undefined) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // client_request_mfa_token - computed: false, optional: true, required: false
  private _clientRequestMfaToken?: string; 
  public get clientRequestMfaToken() {
    return this._clientRequestMfaToken;
  }
  public set clientRequestMfaToken(value: string | undefined) {
    this._clientRequestMfaToken = value;
  }
  public resetClientRequestMfaToken() {
    this._clientRequestMfaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestMfaTokenInput() {
    return this._clientRequestMfaToken;
  }

  // client_store_temporary_credential - computed: false, optional: true, required: false
  private _clientStoreTemporaryCredential?: string; 
  public get clientStoreTemporaryCredential() {
    return this._clientStoreTemporaryCredential;
  }
  public set clientStoreTemporaryCredential(value: string | undefined) {
    this._clientStoreTemporaryCredential = value;
  }
  public resetClientStoreTemporaryCredential() {
    this._clientStoreTemporaryCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientStoreTemporaryCredentialInput() {
    return this._clientStoreTemporaryCredential;
  }

  // client_timeout - computed: false, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this._clientTimeout;
  }
  public set clientTimeout(value: number | undefined) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

  // disable_console_login - computed: false, optional: true, required: false
  private _disableConsoleLogin?: string; 
  public get disableConsoleLogin() {
    return this._disableConsoleLogin;
  }
  public set disableConsoleLogin(value: string | undefined) {
    this._disableConsoleLogin = value;
  }
  public resetDisableConsoleLogin() {
    this._disableConsoleLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConsoleLoginInput() {
    return this._disableConsoleLogin;
  }

  // disable_query_context_cache - computed: false, optional: true, required: false
  private _disableQueryContextCache?: boolean | cdktf.IResolvable; 
  public get disableQueryContextCache() {
    return this._disableQueryContextCache;
  }
  public set disableQueryContextCache(value: boolean | cdktf.IResolvable | undefined) {
    this._disableQueryContextCache = value;
  }
  public resetDisableQueryContextCache() {
    this._disableQueryContextCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableQueryContextCacheInput() {
    return this._disableQueryContextCache;
  }

  // disable_telemetry - computed: false, optional: true, required: false
  private _disableTelemetry?: boolean | cdktf.IResolvable; 
  public get disableTelemetry() {
    return this._disableTelemetry;
  }
  public set disableTelemetry(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTelemetry = value;
  }
  public resetDisableTelemetry() {
    this._disableTelemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTelemetryInput() {
    return this._disableTelemetry;
  }

  // driver_tracing - computed: false, optional: true, required: false
  private _driverTracing?: string; 
  public get driverTracing() {
    return this._driverTracing;
  }
  public set driverTracing(value: string | undefined) {
    this._driverTracing = value;
  }
  public resetDriverTracing() {
    this._driverTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverTracingInput() {
    return this._driverTracing;
  }

  // external_browser_timeout - computed: false, optional: true, required: false
  private _externalBrowserTimeout?: number; 
  public get externalBrowserTimeout() {
    return this._externalBrowserTimeout;
  }
  public set externalBrowserTimeout(value: number | undefined) {
    this._externalBrowserTimeout = value;
  }
  public resetExternalBrowserTimeout() {
    this._externalBrowserTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBrowserTimeoutInput() {
    return this._externalBrowserTimeout;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // include_retry_reason - computed: false, optional: true, required: false
  private _includeRetryReason?: string; 
  public get includeRetryReason() {
    return this._includeRetryReason;
  }
  public set includeRetryReason(value: string | undefined) {
    this._includeRetryReason = value;
  }
  public resetIncludeRetryReason() {
    this._includeRetryReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRetryReasonInput() {
    return this._includeRetryReason;
  }

  // insecure_mode - computed: false, optional: true, required: false
  private _insecureMode?: boolean | cdktf.IResolvable; 
  public get insecureMode() {
    return this._insecureMode;
  }
  public set insecureMode(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureMode = value;
  }
  public resetInsecureMode() {
    this._insecureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureModeInput() {
    return this._insecureMode;
  }

  // jwt_client_timeout - computed: false, optional: true, required: false
  private _jwtClientTimeout?: number; 
  public get jwtClientTimeout() {
    return this._jwtClientTimeout;
  }
  public set jwtClientTimeout(value: number | undefined) {
    this._jwtClientTimeout = value;
  }
  public resetJwtClientTimeout() {
    this._jwtClientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClientTimeoutInput() {
    return this._jwtClientTimeout;
  }

  // jwt_expire_timeout - computed: false, optional: true, required: false
  private _jwtExpireTimeout?: number; 
  public get jwtExpireTimeout() {
    return this._jwtExpireTimeout;
  }
  public set jwtExpireTimeout(value: number | undefined) {
    this._jwtExpireTimeout = value;
  }
  public resetJwtExpireTimeout() {
    this._jwtExpireTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtExpireTimeoutInput() {
    return this._jwtExpireTimeout;
  }

  // keep_session_alive - computed: false, optional: true, required: false
  private _keepSessionAlive?: boolean | cdktf.IResolvable; 
  public get keepSessionAlive() {
    return this._keepSessionAlive;
  }
  public set keepSessionAlive(value: boolean | cdktf.IResolvable | undefined) {
    this._keepSessionAlive = value;
  }
  public resetKeepSessionAlive() {
    this._keepSessionAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSessionAliveInput() {
    return this._keepSessionAlive;
  }

  // login_timeout - computed: false, optional: true, required: false
  private _loginTimeout?: number; 
  public get loginTimeout() {
    return this._loginTimeout;
  }
  public set loginTimeout(value: number | undefined) {
    this._loginTimeout = value;
  }
  public resetLoginTimeout() {
    this._loginTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTimeoutInput() {
    return this._loginTimeout;
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number; 
  public get maxRetryCount() {
    return this._maxRetryCount;
  }
  public set maxRetryCount(value: number | undefined) {
    this._maxRetryCount = value;
  }
  public resetMaxRetryCount() {
    this._maxRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCountInput() {
    return this._maxRetryCount;
  }

  // oauth_access_token - computed: false, optional: true, required: false
  private _oauthAccessToken?: string; 
  public get oauthAccessToken() {
    return this._oauthAccessToken;
  }
  public set oauthAccessToken(value: string | undefined) {
    this._oauthAccessToken = value;
  }
  public resetOauthAccessToken() {
    this._oauthAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAccessTokenInput() {
    return this._oauthAccessToken;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this._oauthClientId;
  }
  public set oauthClientId(value: string | undefined) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this._oauthClientSecret;
  }
  public set oauthClientSecret(value: string | undefined) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_endpoint - computed: false, optional: true, required: false
  private _oauthEndpoint?: string; 
  public get oauthEndpoint() {
    return this._oauthEndpoint;
  }
  public set oauthEndpoint(value: string | undefined) {
    this._oauthEndpoint = value;
  }
  public resetOauthEndpoint() {
    this._oauthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthEndpointInput() {
    return this._oauthEndpoint;
  }

  // oauth_redirect_url - computed: false, optional: true, required: false
  private _oauthRedirectUrl?: string; 
  public get oauthRedirectUrl() {
    return this._oauthRedirectUrl;
  }
  public set oauthRedirectUrl(value: string | undefined) {
    this._oauthRedirectUrl = value;
  }
  public resetOauthRedirectUrl() {
    this._oauthRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRedirectUrlInput() {
    return this._oauthRedirectUrl;
  }

  // oauth_refresh_token - computed: false, optional: true, required: false
  private _oauthRefreshToken?: string; 
  public get oauthRefreshToken() {
    return this._oauthRefreshToken;
  }
  public set oauthRefreshToken(value: string | undefined) {
    this._oauthRefreshToken = value;
  }
  public resetOauthRefreshToken() {
    this._oauthRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenInput() {
    return this._oauthRefreshToken;
  }

  // ocsp_fail_open - computed: false, optional: true, required: false
  private _ocspFailOpen?: string; 
  public get ocspFailOpen() {
    return this._ocspFailOpen;
  }
  public set ocspFailOpen(value: string | undefined) {
    this._ocspFailOpen = value;
  }
  public resetOcspFailOpen() {
    this._ocspFailOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspFailOpenInput() {
    return this._ocspFailOpen;
  }

  // okta_url - computed: false, optional: true, required: false
  private _oktaUrl?: string; 
  public get oktaUrl() {
    return this._oktaUrl;
  }
  public set oktaUrl(value: string | undefined) {
    this._oktaUrl = value;
  }
  public resetOktaUrl() {
    this._oktaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaUrlInput() {
    return this._oktaUrl;
  }

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this._organizationName;
  }
  public set organizationName(value: string | undefined) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this._params;
  }
  public set params(value: { [key: string]: string } | undefined) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // passcode - computed: false, optional: true, required: false
  private _passcode?: string; 
  public get passcode() {
    return this._passcode;
  }
  public set passcode(value: string | undefined) {
    this._passcode = value;
  }
  public resetPasscode() {
    this._passcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeInput() {
    return this._passcode;
  }

  // passcode_in_password - computed: false, optional: true, required: false
  private _passcodeInPassword?: boolean | cdktf.IResolvable; 
  public get passcodeInPassword() {
    return this._passcodeInPassword;
  }
  public set passcodeInPassword(value: boolean | cdktf.IResolvable | undefined) {
    this._passcodeInPassword = value;
  }
  public resetPasscodeInPassword() {
    this._passcodeInPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeInPasswordInput() {
    return this._passcodeInPassword;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this._privateKeyPassphrase;
  }
  public set privateKeyPassphrase(value: string | undefined) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string | undefined) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this._role;
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // session_params - computed: false, optional: true, required: false
  private _sessionParams?: { [key: string]: string }; 
  public get sessionParams() {
    return this._sessionParams;
  }
  public set sessionParams(value: { [key: string]: string } | undefined) {
    this._sessionParams = value;
  }
  public resetSessionParams() {
    this._sessionParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionParamsInput() {
    return this._sessionParams;
  }

  // tmp_directory_path - computed: false, optional: true, required: false
  private _tmpDirectoryPath?: string; 
  public get tmpDirectoryPath() {
    return this._tmpDirectoryPath;
  }
  public set tmpDirectoryPath(value: string | undefined) {
    this._tmpDirectoryPath = value;
  }
  public resetTmpDirectoryPath() {
    this._tmpDirectoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpDirectoryPathInput() {
    return this._tmpDirectoryPath;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // validate_default_parameters - computed: false, optional: true, required: false
  private _validateDefaultParameters?: string; 
  public get validateDefaultParameters() {
    return this._validateDefaultParameters;
  }
  public set validateDefaultParameters(value: string | undefined) {
    this._validateDefaultParameters = value;
  }
  public resetValidateDefaultParameters() {
    this._validateDefaultParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateDefaultParametersInput() {
    return this._validateDefaultParameters;
  }

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this._warehouse;
  }
  public set warehouse(value: string | undefined) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // token_accessor - computed: false, optional: true, required: false
  private _tokenAccessor?: SnowflakeProviderTokenAccessor; 
  public get tokenAccessor() {
    return this._tokenAccessor;
  }
  public set tokenAccessor(value: SnowflakeProviderTokenAccessor | undefined) {
    this._tokenAccessor = value;
  }
  public resetTokenAccessor() {
    this._tokenAccessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAccessorInput() {
    return this._tokenAccessor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      account_name: cdktf.stringToTerraform(this._accountName),
      authenticator: cdktf.stringToTerraform(this._authenticator),
      browser_auth: cdktf.booleanToTerraform(this._browserAuth),
      client_ip: cdktf.stringToTerraform(this._clientIp),
      client_request_mfa_token: cdktf.stringToTerraform(this._clientRequestMfaToken),
      client_store_temporary_credential: cdktf.stringToTerraform(this._clientStoreTemporaryCredential),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      disable_console_login: cdktf.stringToTerraform(this._disableConsoleLogin),
      disable_query_context_cache: cdktf.booleanToTerraform(this._disableQueryContextCache),
      disable_telemetry: cdktf.booleanToTerraform(this._disableTelemetry),
      driver_tracing: cdktf.stringToTerraform(this._driverTracing),
      external_browser_timeout: cdktf.numberToTerraform(this._externalBrowserTimeout),
      host: cdktf.stringToTerraform(this._host),
      include_retry_reason: cdktf.stringToTerraform(this._includeRetryReason),
      insecure_mode: cdktf.booleanToTerraform(this._insecureMode),
      jwt_client_timeout: cdktf.numberToTerraform(this._jwtClientTimeout),
      jwt_expire_timeout: cdktf.numberToTerraform(this._jwtExpireTimeout),
      keep_session_alive: cdktf.booleanToTerraform(this._keepSessionAlive),
      login_timeout: cdktf.numberToTerraform(this._loginTimeout),
      max_retry_count: cdktf.numberToTerraform(this._maxRetryCount),
      oauth_access_token: cdktf.stringToTerraform(this._oauthAccessToken),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_endpoint: cdktf.stringToTerraform(this._oauthEndpoint),
      oauth_redirect_url: cdktf.stringToTerraform(this._oauthRedirectUrl),
      oauth_refresh_token: cdktf.stringToTerraform(this._oauthRefreshToken),
      ocsp_fail_open: cdktf.stringToTerraform(this._ocspFailOpen),
      okta_url: cdktf.stringToTerraform(this._oktaUrl),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      params: cdktf.hashMapper(cdktf.stringToTerraform)(this._params),
      passcode: cdktf.stringToTerraform(this._passcode),
      passcode_in_password: cdktf.booleanToTerraform(this._passcodeInPassword),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      role: cdktf.stringToTerraform(this._role),
      session_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._sessionParams),
      tmp_directory_path: cdktf.stringToTerraform(this._tmpDirectoryPath),
      token: cdktf.stringToTerraform(this._token),
      user: cdktf.stringToTerraform(this._user),
      username: cdktf.stringToTerraform(this._username),
      validate_default_parameters: cdktf.stringToTerraform(this._validateDefaultParameters),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      alias: cdktf.stringToTerraform(this._alias),
      token_accessor: snowflakeProviderTokenAccessorToTerraform(this._tokenAccessor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticator: {
        value: cdktf.stringToHclTerraform(this._authenticator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_auth: {
        value: cdktf.booleanToHclTerraform(this._browserAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_ip: {
        value: cdktf.stringToHclTerraform(this._clientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_request_mfa_token: {
        value: cdktf.stringToHclTerraform(this._clientRequestMfaToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_store_temporary_credential: {
        value: cdktf.stringToHclTerraform(this._clientStoreTemporaryCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_console_login: {
        value: cdktf.stringToHclTerraform(this._disableConsoleLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_query_context_cache: {
        value: cdktf.booleanToHclTerraform(this._disableQueryContextCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_telemetry: {
        value: cdktf.booleanToHclTerraform(this._disableTelemetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      driver_tracing: {
        value: cdktf.stringToHclTerraform(this._driverTracing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_browser_timeout: {
        value: cdktf.numberToHclTerraform(this._externalBrowserTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_retry_reason: {
        value: cdktf.stringToHclTerraform(this._includeRetryReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_mode: {
        value: cdktf.booleanToHclTerraform(this._insecureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwt_client_timeout: {
        value: cdktf.numberToHclTerraform(this._jwtClientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_expire_timeout: {
        value: cdktf.numberToHclTerraform(this._jwtExpireTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_session_alive: {
        value: cdktf.booleanToHclTerraform(this._keepSessionAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_timeout: {
        value: cdktf.numberToHclTerraform(this._loginTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retry_count: {
        value: cdktf.numberToHclTerraform(this._maxRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_access_token: {
        value: cdktf.stringToHclTerraform(this._oauthAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauthEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_redirect_url: {
        value: cdktf.stringToHclTerraform(this._oauthRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_refresh_token: {
        value: cdktf.stringToHclTerraform(this._oauthRefreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_fail_open: {
        value: cdktf.stringToHclTerraform(this._ocspFailOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_url: {
        value: cdktf.stringToHclTerraform(this._oktaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._params),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      passcode: {
        value: cdktf.stringToHclTerraform(this._passcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passcode_in_password: {
        value: cdktf.booleanToHclTerraform(this._passcodeInPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_path: {
        value: cdktf.stringToHclTerraform(this._privateKeyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sessionParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tmp_directory_path: {
        value: cdktf.stringToHclTerraform(this._tmpDirectoryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_default_parameters: {
        value: cdktf.stringToHclTerraform(this._validateDefaultParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse: {
        value: cdktf.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_accessor: {
        value: snowflakeProviderTokenAccessorToHclTerraform(this._tokenAccessor),
        isBlock: true,
        type: "list",
        storageClassType: "SnowflakeProviderTokenAccessorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
