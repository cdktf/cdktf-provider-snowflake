/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnowflakeProviderConfig {
  /**
  * Specifies your Snowflake account name assigned by Snowflake. For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#account_name SnowflakeProvider#account_name}
  */
  readonly accountName?: string;
  /**
  * Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#authenticator SnowflakeProvider#authenticator}
  */
  readonly authenticator?: string;
  /**
  * IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#client_ip SnowflakeProvider#client_ip}
  */
  readonly clientIp?: string;
  /**
  * When true the MFA token is cached in the credential manager. True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}
  */
  readonly clientRequestMfaToken?: string;
  /**
  * When true the ID token is cached in the credential manager. True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}
  */
  readonly clientStoreTemporaryCredential?: string;
  /**
  * The timeout in seconds for the client to complete the authentication. Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#client_timeout SnowflakeProvider#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#disable_console_login SnowflakeProvider#disable_console_login}
  */
  readonly disableConsoleLogin?: string;
  /**
  * Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}
  */
  readonly disableQueryContextCache?: boolean | cdktf.IResolvable;
  /**
  * Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}
  */
  readonly disableTelemetry?: boolean | cdktf.IResolvable;
  /**
  * Specifies the logging level to be used by the driver. Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#driver_tracing SnowflakeProvider#driver_tracing}
  */
  readonly driverTracing?: string;
  /**
  * The timeout in seconds for the external browser to complete the authentication. Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}
  */
  readonly externalBrowserTimeout?: number;
  /**
  * Specifies a custom host value used by the driver for privatelink connections. Can also be sourced from the `SNOWFLAKE_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#host SnowflakeProvider#host}
  */
  readonly host?: string;
  /**
  * Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}
  */
  readonly includeRetryReason?: string;
  /**
  * If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#insecure_mode SnowflakeProvider#insecure_mode}
  */
  readonly insecureMode?: boolean | cdktf.IResolvable;
  /**
  * The timeout in seconds for the JWT client to complete the authentication. Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}
  */
  readonly jwtClientTimeout?: number;
  /**
  * JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}
  */
  readonly jwtExpireTimeout?: number;
  /**
  * Enables the session to persist even after the connection is closed. Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}
  */
  readonly keepSessionAlive?: boolean | cdktf.IResolvable;
  /**
  * Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#login_timeout SnowflakeProvider#login_timeout}
  */
  readonly loginTimeout?: number;
  /**
  * Specifies how many times non-periodic HTTP request can be retried by the driver. Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#max_retry_count SnowflakeProvider#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * True represents OCSP fail open mode. False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}
  */
  readonly ocspFailOpen?: string;
  /**
  * The URL of the Okta server. e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#okta_url SnowflakeProvider#okta_url}
  */
  readonly oktaUrl?: string;
  /**
  * Specifies your Snowflake organization name assigned by Snowflake. For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#organization_name SnowflakeProvider#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#params SnowflakeProvider#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#passcode SnowflakeProvider#passcode}
  */
  readonly passcode?: string;
  /**
  * False by default. Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}
  */
  readonly passcodeInPassword?: boolean | cdktf.IResolvable;
  /**
  * Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#password SnowflakeProvider#password}
  */
  readonly password?: string;
  /**
  * Specifies a custom port value used by the driver for privatelink connections. Can also be sourced from the `SNOWFLAKE_PORT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#port SnowflakeProvider#port}
  */
  readonly port?: number;
  /**
  * A list of preview features that are handled by the provider. See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Valid options are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_job_service_resource` | `snowflake_listing_resource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}
  */
  readonly previewFeaturesEnabled?: string[];
  /**
  * Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#private_key SnowflakeProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#profile SnowflakeProvider#profile}
  */
  readonly profile?: string;
  /**
  * A protocol used in the connection. Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#protocol SnowflakeProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * request retry timeout in seconds EXCLUDING network roundtrip and read out http response. Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#request_timeout SnowflakeProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Specifies the role to use by default for accessing Snowflake objects in the client session. Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#role SnowflakeProvider#role}
  */
  readonly role?: string;
  /**
  * False by default. Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}
  */
  readonly skipTomlFilePermissionVerification?: boolean | cdktf.IResolvable;
  /**
  * Sets temporary directory used by the driver for operations like encrypting, compressing etc. Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}
  */
  readonly tmpDirectoryPath?: string;
  /**
  * Token to use for OAuth and other forms of token based auth. When this field is set here, or in the TOML file, the provider sets the `authenticator` to `OAUTH`. Optionally, set the `authenticator` field to the authenticator you want to use. Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#token SnowflakeProvider#token}
  */
  readonly token?: string;
  /**
  * False by default. When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}
  */
  readonly useLegacyTomlFile?: boolean | cdktf.IResolvable;
  /**
  * Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#user SnowflakeProvider#user}
  */
  readonly user?: string;
  /**
  * True by default. If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}
  */
  readonly validateDefaultParameters?: string;
  /**
  * Specifies the virtual warehouse to use by default for queries, loading, etc. in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#warehouse SnowflakeProvider#warehouse}
  */
  readonly warehouse?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#alias SnowflakeProvider#alias}
  */
  readonly alias?: string;
  /**
  * token_accessor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#token_accessor SnowflakeProvider#token_accessor}
  */
  readonly tokenAccessor?: SnowflakeProviderTokenAccessor;
}
export interface SnowflakeProviderTokenAccessor {
  /**
  * The client ID for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#client_id SnowflakeProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#client_secret SnowflakeProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The redirect URI for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#redirect_uri SnowflakeProvider#redirect_uri}
  */
  readonly redirectUri: string;
  /**
  * The refresh token for the OAuth provider when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#refresh_token SnowflakeProvider#refresh_token}
  */
  readonly refreshToken: string;
  /**
  * The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#token_endpoint SnowflakeProvider#token_endpoint}
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs snowflake}
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
  * @param importFromId The id of the existing SnowflakeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnowflakeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs snowflake} Resource
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
        providerVersion: '2.5.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      terraformProviderSource: 'snowflakedb/snowflake'
    });
    this._accountName = config.accountName;
    this._authenticator = config.authenticator;
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
    this._ocspFailOpen = config.ocspFailOpen;
    this._oktaUrl = config.oktaUrl;
    this._organizationName = config.organizationName;
    this._params = config.params;
    this._passcode = config.passcode;
    this._passcodeInPassword = config.passcodeInPassword;
    this._password = config.password;
    this._port = config.port;
    this._previewFeaturesEnabled = config.previewFeaturesEnabled;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._requestTimeout = config.requestTimeout;
    this._role = config.role;
    this._skipTomlFilePermissionVerification = config.skipTomlFilePermissionVerification;
    this._tmpDirectoryPath = config.tmpDirectoryPath;
    this._token = config.token;
    this._useLegacyTomlFile = config.useLegacyTomlFile;
    this._user = config.user;
    this._validateDefaultParameters = config.validateDefaultParameters;
    this._warehouse = config.warehouse;
    this._alias = config.alias;
    this._tokenAccessor = config.tokenAccessor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // preview_features_enabled - computed: false, optional: true, required: false
  private _previewFeaturesEnabled?: string[]; 
  public get previewFeaturesEnabled() {
    return this._previewFeaturesEnabled;
  }
  public set previewFeaturesEnabled(value: string[] | undefined) {
    this._previewFeaturesEnabled = value;
  }
  public resetPreviewFeaturesEnabled() {
    this._previewFeaturesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewFeaturesEnabledInput() {
    return this._previewFeaturesEnabled;
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

  // skip_toml_file_permission_verification - computed: false, optional: true, required: false
  private _skipTomlFilePermissionVerification?: boolean | cdktf.IResolvable; 
  public get skipTomlFilePermissionVerification() {
    return this._skipTomlFilePermissionVerification;
  }
  public set skipTomlFilePermissionVerification(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTomlFilePermissionVerification = value;
  }
  public resetSkipTomlFilePermissionVerification() {
    this._skipTomlFilePermissionVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTomlFilePermissionVerificationInput() {
    return this._skipTomlFilePermissionVerification;
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

  // use_legacy_toml_file - computed: false, optional: true, required: false
  private _useLegacyTomlFile?: boolean | cdktf.IResolvable; 
  public get useLegacyTomlFile() {
    return this._useLegacyTomlFile;
  }
  public set useLegacyTomlFile(value: boolean | cdktf.IResolvable | undefined) {
    this._useLegacyTomlFile = value;
  }
  public resetUseLegacyTomlFile() {
    this._useLegacyTomlFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyTomlFileInput() {
    return this._useLegacyTomlFile;
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
      account_name: cdktf.stringToTerraform(this._accountName),
      authenticator: cdktf.stringToTerraform(this._authenticator),
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
      ocsp_fail_open: cdktf.stringToTerraform(this._ocspFailOpen),
      okta_url: cdktf.stringToTerraform(this._oktaUrl),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      params: cdktf.hashMapper(cdktf.stringToTerraform)(this._params),
      passcode: cdktf.stringToTerraform(this._passcode),
      passcode_in_password: cdktf.booleanToTerraform(this._passcodeInPassword),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      preview_features_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(this._previewFeaturesEnabled),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      role: cdktf.stringToTerraform(this._role),
      skip_toml_file_permission_verification: cdktf.booleanToTerraform(this._skipTomlFilePermissionVerification),
      tmp_directory_path: cdktf.stringToTerraform(this._tmpDirectoryPath),
      token: cdktf.stringToTerraform(this._token),
      use_legacy_toml_file: cdktf.booleanToTerraform(this._useLegacyTomlFile),
      user: cdktf.stringToTerraform(this._user),
      validate_default_parameters: cdktf.stringToTerraform(this._validateDefaultParameters),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      alias: cdktf.stringToTerraform(this._alias),
      token_accessor: snowflakeProviderTokenAccessorToTerraform(this._tokenAccessor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      preview_features_enabled: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._previewFeaturesEnabled),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      skip_toml_file_permission_verification: {
        value: cdktf.booleanToHclTerraform(this._skipTomlFilePermissionVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      use_legacy_toml_file: {
        value: cdktf.booleanToHclTerraform(this._useLegacyTomlFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
