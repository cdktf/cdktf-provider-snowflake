# `oauthIntegrationForCustomClients` Submodule <a name="`oauthIntegrationForCustomClients` Submodule" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthIntegrationForCustomClients <a name="OauthIntegrationForCustomClients" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients snowflake_oauth_integration_for_custom_clients}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClients;

OauthIntegrationForCustomClients.Builder.create(Construct scope, java.lang.String id)
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
    .blockedRolesList(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .oauthClientType(java.lang.String)
    .oauthRedirectUri(java.lang.String)
//  .comment(java.lang.String)
//  .enabled(java.lang.String)
//  .id(java.lang.String)
//  .networkPolicy(java.lang.String)
//  .oauthAllowNonTlsRedirectUri(java.lang.String)
//  .oauthClientRsaPublicKey(java.lang.String)
//  .oauthClientRsaPublicKey2(java.lang.String)
//  .oauthEnforcePkce(java.lang.String)
//  .oauthIssueRefreshTokens(java.lang.String)
//  .oauthRefreshTokenValidity(java.lang.Number)
//  .oauthUseSecondaryRoles(java.lang.String)
//  .preAuthorizedRolesList(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.blockedRolesList">blockedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | A set of Snowflake roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthClientType">oauthClientType</a></code> | <code>java.lang.String</code> | Specifies the type of client being registered. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthRedirectUri">oauthRedirectUri</a></code> | <code>java.lang.String</code> | Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.String</code> | Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#id OauthIntegrationForCustomClients#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies an existing network policy. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthAllowNonTlsRedirectUri">oauthAllowNonTlsRedirectUri</a></code> | <code>java.lang.String</code> | If true, allows setting oauth_redirect_uri to a URI not protected by TLS. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthClientRsaPublicKey">oauthClientRsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthClientRsaPublicKey2">oauthClientRsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthEnforcePkce">oauthEnforcePkce</a></code> | <code>java.lang.String</code> | Boolean that specifies whether Proof Key for Code Exchange (PKCE) should be required for the integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthIssueRefreshTokens">oauthIssueRefreshTokens</a></code> | <code>java.lang.String</code> | Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthUseSecondaryRoles">oauthUseSecondaryRoles</a></code> | <code>java.lang.String</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.preAuthorizedRolesList">preAuthorizedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | A set of Snowflake roles that a user does not need to explicitly consent to using after authenticating. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockedRolesList`<sup>Required</sup> <a name="blockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.blockedRolesList"></a>

- *Type:* java.util.List<java.lang.String>

A set of Snowflake roles that a user cannot explicitly consent to using after authenticating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#blocked_roles_list OauthIntegrationForCustomClients#blocked_roles_list}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#name OauthIntegrationForCustomClients#name}

---

##### `oauthClientType`<sup>Required</sup> <a name="oauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthClientType"></a>

- *Type:* java.lang.String

Specifies the type of client being registered.

Snowflake supports both confidential and public clients. Valid options are: `PUBLIC` | `CONFIDENTIAL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_client_type OauthIntegrationForCustomClients#oauth_client_type}

---

##### `oauthRedirectUri`<sup>Required</sup> <a name="oauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthRedirectUri"></a>

- *Type:* java.lang.String

Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_redirect_uri OauthIntegrationForCustomClients#oauth_redirect_uri}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#comment OauthIntegrationForCustomClients#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.enabled"></a>

- *Type:* java.lang.String

Specifies whether this OAuth integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#enabled OauthIntegrationForCustomClients#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#id OauthIntegrationForCustomClients#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.networkPolicy"></a>

- *Type:* java.lang.String

Specifies an existing network policy.

This network policy controls network traffic that is attempting to exchange an authorization code for an access or refresh token or to use a refresh token to obtain a new access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#network_policy OauthIntegrationForCustomClients#network_policy}

---

##### `oauthAllowNonTlsRedirectUri`<sup>Optional</sup> <a name="oauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthAllowNonTlsRedirectUri"></a>

- *Type:* java.lang.String

If true, allows setting oauth_redirect_uri to a URI not protected by TLS.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_allow_non_tls_redirect_uri OauthIntegrationForCustomClients#oauth_allow_non_tls_redirect_uri}

---

##### `oauthClientRsaPublicKey`<sup>Optional</sup> <a name="oauthClientRsaPublicKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthClientRsaPublicKey"></a>

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource using `terraform taint`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_client_rsa_public_key OauthIntegrationForCustomClients#oauth_client_rsa_public_key}

---

##### `oauthClientRsaPublicKey2`<sup>Optional</sup> <a name="oauthClientRsaPublicKey2" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthClientRsaPublicKey2"></a>

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource using `terraform taint`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_client_rsa_public_key_2 OauthIntegrationForCustomClients#oauth_client_rsa_public_key_2}

---

##### `oauthEnforcePkce`<sup>Optional</sup> <a name="oauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthEnforcePkce"></a>

- *Type:* java.lang.String

Boolean that specifies whether Proof Key for Code Exchange (PKCE) should be required for the integration.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_enforce_pkce OauthIntegrationForCustomClients#oauth_enforce_pkce}

---

##### `oauthIssueRefreshTokens`<sup>Optional</sup> <a name="oauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthIssueRefreshTokens"></a>

- *Type:* java.lang.String

Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_issue_refresh_tokens OauthIntegrationForCustomClients#oauth_issue_refresh_tokens}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthRefreshTokenValidity"></a>

- *Type:* java.lang.Number

Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_refresh_token_validity OauthIntegrationForCustomClients#oauth_refresh_token_validity}

---

##### `oauthUseSecondaryRoles`<sup>Optional</sup> <a name="oauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.oauthUseSecondaryRoles"></a>

- *Type:* java.lang.String

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Valid options are: `IMPLICIT` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_use_secondary_roles OauthIntegrationForCustomClients#oauth_use_secondary_roles}

---

##### `preAuthorizedRolesList`<sup>Optional</sup> <a name="preAuthorizedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.Initializer.parameter.preAuthorizedRolesList"></a>

- *Type:* java.util.List<java.lang.String>

A set of Snowflake roles that a user does not need to explicitly consent to using after authenticating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#pre_authorized_roles_list OauthIntegrationForCustomClients#pre_authorized_roles_list}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthAllowNonTlsRedirectUri">resetOauthAllowNonTlsRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthClientRsaPublicKey">resetOauthClientRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthClientRsaPublicKey2">resetOauthClientRsaPublicKey2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthEnforcePkce">resetOauthEnforcePkce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthIssueRefreshTokens">resetOauthIssueRefreshTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthUseSecondaryRoles">resetOauthUseSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetPreAuthorizedRolesList">resetPreAuthorizedRolesList</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetComment"></a>

```java
public void resetComment()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetNetworkPolicy"></a>

```java
public void resetNetworkPolicy()
```

##### `resetOauthAllowNonTlsRedirectUri` <a name="resetOauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthAllowNonTlsRedirectUri"></a>

```java
public void resetOauthAllowNonTlsRedirectUri()
```

##### `resetOauthClientRsaPublicKey` <a name="resetOauthClientRsaPublicKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthClientRsaPublicKey"></a>

```java
public void resetOauthClientRsaPublicKey()
```

##### `resetOauthClientRsaPublicKey2` <a name="resetOauthClientRsaPublicKey2" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthClientRsaPublicKey2"></a>

```java
public void resetOauthClientRsaPublicKey2()
```

##### `resetOauthEnforcePkce` <a name="resetOauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthEnforcePkce"></a>

```java
public void resetOauthEnforcePkce()
```

##### `resetOauthIssueRefreshTokens` <a name="resetOauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthIssueRefreshTokens"></a>

```java
public void resetOauthIssueRefreshTokens()
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthRefreshTokenValidity"></a>

```java
public void resetOauthRefreshTokenValidity()
```

##### `resetOauthUseSecondaryRoles` <a name="resetOauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetOauthUseSecondaryRoles"></a>

```java
public void resetOauthUseSecondaryRoles()
```

##### `resetPreAuthorizedRolesList` <a name="resetPreAuthorizedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.resetPreAuthorizedRolesList"></a>

```java
public void resetPreAuthorizedRolesList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OauthIntegrationForCustomClients resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClients;

OauthIntegrationForCustomClients.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClients;

OauthIntegrationForCustomClients.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClients;

OauthIntegrationForCustomClients.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClients;

OauthIntegrationForCustomClients.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OauthIntegrationForCustomClients.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OauthIntegrationForCustomClients resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OauthIntegrationForCustomClients to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OauthIntegrationForCustomClients that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OauthIntegrationForCustomClients to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList">OauthIntegrationForCustomClientsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList">OauthIntegrationForCustomClientsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.blockedRolesListInput">blockedRolesListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.enabledInput">enabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.networkPolicyInput">networkPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthAllowNonTlsRedirectUriInput">oauthAllowNonTlsRedirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKey2Input">oauthClientRsaPublicKey2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKeyInput">oauthClientRsaPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientTypeInput">oauthClientTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthEnforcePkceInput">oauthEnforcePkceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthIssueRefreshTokensInput">oauthIssueRefreshTokensInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRedirectUriInput">oauthRedirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthUseSecondaryRolesInput">oauthUseSecondaryRolesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.preAuthorizedRolesListInput">preAuthorizedRolesListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.blockedRolesList">blockedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.enabled">enabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthAllowNonTlsRedirectUri">oauthAllowNonTlsRedirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKey">oauthClientRsaPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKey2">oauthClientRsaPublicKey2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientType">oauthClientType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthEnforcePkce">oauthEnforcePkce</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthIssueRefreshTokens">oauthIssueRefreshTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthUseSecondaryRoles">oauthUseSecondaryRoles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.preAuthorizedRolesList">preAuthorizedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.describeOutput"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList">OauthIntegrationForCustomClientsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.showOutput"></a>

```java
public OauthIntegrationForCustomClientsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList">OauthIntegrationForCustomClientsShowOutputList</a>

---

##### `blockedRolesListInput`<sup>Optional</sup> <a name="blockedRolesListInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.blockedRolesListInput"></a>

```java
public java.util.List<java.lang.String> getBlockedRolesListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.enabledInput"></a>

```java
public java.lang.String getEnabledInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.networkPolicyInput"></a>

```java
public java.lang.String getNetworkPolicyInput();
```

- *Type:* java.lang.String

---

##### `oauthAllowNonTlsRedirectUriInput`<sup>Optional</sup> <a name="oauthAllowNonTlsRedirectUriInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthAllowNonTlsRedirectUriInput"></a>

```java
public java.lang.String getOauthAllowNonTlsRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `oauthClientRsaPublicKey2Input`<sup>Optional</sup> <a name="oauthClientRsaPublicKey2Input" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKey2Input"></a>

```java
public java.lang.String getOauthClientRsaPublicKey2Input();
```

- *Type:* java.lang.String

---

##### `oauthClientRsaPublicKeyInput`<sup>Optional</sup> <a name="oauthClientRsaPublicKeyInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKeyInput"></a>

```java
public java.lang.String getOauthClientRsaPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `oauthClientTypeInput`<sup>Optional</sup> <a name="oauthClientTypeInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientTypeInput"></a>

```java
public java.lang.String getOauthClientTypeInput();
```

- *Type:* java.lang.String

---

##### `oauthEnforcePkceInput`<sup>Optional</sup> <a name="oauthEnforcePkceInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthEnforcePkceInput"></a>

```java
public java.lang.String getOauthEnforcePkceInput();
```

- *Type:* java.lang.String

---

##### `oauthIssueRefreshTokensInput`<sup>Optional</sup> <a name="oauthIssueRefreshTokensInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthIssueRefreshTokensInput"></a>

```java
public java.lang.String getOauthIssueRefreshTokensInput();
```

- *Type:* java.lang.String

---

##### `oauthRedirectUriInput`<sup>Optional</sup> <a name="oauthRedirectUriInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRedirectUriInput"></a>

```java
public java.lang.String getOauthRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRefreshTokenValidityInput"></a>

```java
public java.lang.Number getOauthRefreshTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `oauthUseSecondaryRolesInput`<sup>Optional</sup> <a name="oauthUseSecondaryRolesInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthUseSecondaryRolesInput"></a>

```java
public java.lang.String getOauthUseSecondaryRolesInput();
```

- *Type:* java.lang.String

---

##### `preAuthorizedRolesListInput`<sup>Optional</sup> <a name="preAuthorizedRolesListInput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.preAuthorizedRolesListInput"></a>

```java
public java.util.List<java.lang.String> getPreAuthorizedRolesListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockedRolesList`<sup>Required</sup> <a name="blockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.blockedRolesList"></a>

```java
public java.util.List<java.lang.String> getBlockedRolesList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.enabled"></a>

```java
public java.lang.String getEnabled();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

---

##### `oauthAllowNonTlsRedirectUri`<sup>Required</sup> <a name="oauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthAllowNonTlsRedirectUri"></a>

```java
public java.lang.String getOauthAllowNonTlsRedirectUri();
```

- *Type:* java.lang.String

---

##### `oauthClientRsaPublicKey`<sup>Required</sup> <a name="oauthClientRsaPublicKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKey"></a>

```java
public java.lang.String getOauthClientRsaPublicKey();
```

- *Type:* java.lang.String

---

##### `oauthClientRsaPublicKey2`<sup>Required</sup> <a name="oauthClientRsaPublicKey2" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientRsaPublicKey2"></a>

```java
public java.lang.String getOauthClientRsaPublicKey2();
```

- *Type:* java.lang.String

---

##### `oauthClientType`<sup>Required</sup> <a name="oauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthClientType"></a>

```java
public java.lang.String getOauthClientType();
```

- *Type:* java.lang.String

---

##### `oauthEnforcePkce`<sup>Required</sup> <a name="oauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthEnforcePkce"></a>

```java
public java.lang.String getOauthEnforcePkce();
```

- *Type:* java.lang.String

---

##### `oauthIssueRefreshTokens`<sup>Required</sup> <a name="oauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthIssueRefreshTokens"></a>

```java
public java.lang.String getOauthIssueRefreshTokens();
```

- *Type:* java.lang.String

---

##### `oauthRedirectUri`<sup>Required</sup> <a name="oauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRedirectUri"></a>

```java
public java.lang.String getOauthRedirectUri();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthUseSecondaryRoles`<sup>Required</sup> <a name="oauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.oauthUseSecondaryRoles"></a>

```java
public java.lang.String getOauthUseSecondaryRoles();
```

- *Type:* java.lang.String

---

##### `preAuthorizedRolesList`<sup>Required</sup> <a name="preAuthorizedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.preAuthorizedRolesList"></a>

```java
public java.util.List<java.lang.String> getPreAuthorizedRolesList();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClients.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OauthIntegrationForCustomClientsConfig <a name="OauthIntegrationForCustomClientsConfig" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsConfig;

OauthIntegrationForCustomClientsConfig.builder()
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
    .blockedRolesList(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .oauthClientType(java.lang.String)
    .oauthRedirectUri(java.lang.String)
//  .comment(java.lang.String)
//  .enabled(java.lang.String)
//  .id(java.lang.String)
//  .networkPolicy(java.lang.String)
//  .oauthAllowNonTlsRedirectUri(java.lang.String)
//  .oauthClientRsaPublicKey(java.lang.String)
//  .oauthClientRsaPublicKey2(java.lang.String)
//  .oauthEnforcePkce(java.lang.String)
//  .oauthIssueRefreshTokens(java.lang.String)
//  .oauthRefreshTokenValidity(java.lang.Number)
//  .oauthUseSecondaryRoles(java.lang.String)
//  .preAuthorizedRolesList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.blockedRolesList">blockedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | A set of Snowflake roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthClientType">oauthClientType</a></code> | <code>java.lang.String</code> | Specifies the type of client being registered. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code>java.lang.String</code> | Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.enabled">enabled</a></code> | <code>java.lang.String</code> | Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#id OauthIntegrationForCustomClients#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies an existing network policy. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthAllowNonTlsRedirectUri">oauthAllowNonTlsRedirectUri</a></code> | <code>java.lang.String</code> | If true, allows setting oauth_redirect_uri to a URI not protected by TLS. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthClientRsaPublicKey">oauthClientRsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthClientRsaPublicKey2">oauthClientRsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthEnforcePkce">oauthEnforcePkce</a></code> | <code>java.lang.String</code> | Boolean that specifies whether Proof Key for Code Exchange (PKCE) should be required for the integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthIssueRefreshTokens">oauthIssueRefreshTokens</a></code> | <code>java.lang.String</code> | Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthUseSecondaryRoles">oauthUseSecondaryRoles</a></code> | <code>java.lang.String</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.preAuthorizedRolesList">preAuthorizedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | A set of Snowflake roles that a user does not need to explicitly consent to using after authenticating. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `blockedRolesList`<sup>Required</sup> <a name="blockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.blockedRolesList"></a>

```java
public java.util.List<java.lang.String> getBlockedRolesList();
```

- *Type:* java.util.List<java.lang.String>

A set of Snowflake roles that a user cannot explicitly consent to using after authenticating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#blocked_roles_list OauthIntegrationForCustomClients#blocked_roles_list}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#name OauthIntegrationForCustomClients#name}

---

##### `oauthClientType`<sup>Required</sup> <a name="oauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthClientType"></a>

```java
public java.lang.String getOauthClientType();
```

- *Type:* java.lang.String

Specifies the type of client being registered.

Snowflake supports both confidential and public clients. Valid options are: `PUBLIC` | `CONFIDENTIAL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_client_type OauthIntegrationForCustomClients#oauth_client_type}

---

##### `oauthRedirectUri`<sup>Required</sup> <a name="oauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthRedirectUri"></a>

```java
public java.lang.String getOauthRedirectUri();
```

- *Type:* java.lang.String

Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_redirect_uri OauthIntegrationForCustomClients#oauth_redirect_uri}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#comment OauthIntegrationForCustomClients#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.enabled"></a>

```java
public java.lang.String getEnabled();
```

- *Type:* java.lang.String

Specifies whether this OAuth integration is enabled or disabled.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#enabled OauthIntegrationForCustomClients#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#id OauthIntegrationForCustomClients#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

Specifies an existing network policy.

This network policy controls network traffic that is attempting to exchange an authorization code for an access or refresh token or to use a refresh token to obtain a new access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#network_policy OauthIntegrationForCustomClients#network_policy}

---

##### `oauthAllowNonTlsRedirectUri`<sup>Optional</sup> <a name="oauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthAllowNonTlsRedirectUri"></a>

```java
public java.lang.String getOauthAllowNonTlsRedirectUri();
```

- *Type:* java.lang.String

If true, allows setting oauth_redirect_uri to a URI not protected by TLS.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_allow_non_tls_redirect_uri OauthIntegrationForCustomClients#oauth_allow_non_tls_redirect_uri}

---

##### `oauthClientRsaPublicKey`<sup>Optional</sup> <a name="oauthClientRsaPublicKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthClientRsaPublicKey"></a>

```java
public java.lang.String getOauthClientRsaPublicKey();
```

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource using `terraform taint`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_client_rsa_public_key OauthIntegrationForCustomClients#oauth_client_rsa_public_key}

---

##### `oauthClientRsaPublicKey2`<sup>Optional</sup> <a name="oauthClientRsaPublicKey2" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthClientRsaPublicKey2"></a>

```java
public java.lang.String getOauthClientRsaPublicKey2();
```

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource using `terraform taint`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_client_rsa_public_key_2 OauthIntegrationForCustomClients#oauth_client_rsa_public_key_2}

---

##### `oauthEnforcePkce`<sup>Optional</sup> <a name="oauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthEnforcePkce"></a>

```java
public java.lang.String getOauthEnforcePkce();
```

- *Type:* java.lang.String

Boolean that specifies whether Proof Key for Code Exchange (PKCE) should be required for the integration.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_enforce_pkce OauthIntegrationForCustomClients#oauth_enforce_pkce}

---

##### `oauthIssueRefreshTokens`<sup>Optional</sup> <a name="oauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthIssueRefreshTokens"></a>

```java
public java.lang.String getOauthIssueRefreshTokens();
```

- *Type:* java.lang.String

Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_issue_refresh_tokens OauthIntegrationForCustomClients#oauth_issue_refresh_tokens}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_refresh_token_validity OauthIntegrationForCustomClients#oauth_refresh_token_validity}

---

##### `oauthUseSecondaryRoles`<sup>Optional</sup> <a name="oauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.oauthUseSecondaryRoles"></a>

```java
public java.lang.String getOauthUseSecondaryRoles();
```

- *Type:* java.lang.String

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Valid options are: `IMPLICIT` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#oauth_use_secondary_roles OauthIntegrationForCustomClients#oauth_use_secondary_roles}

---

##### `preAuthorizedRolesList`<sup>Optional</sup> <a name="preAuthorizedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsConfig.property.preAuthorizedRolesList"></a>

```java
public java.util.List<java.lang.String> getPreAuthorizedRolesList();
```

- *Type:* java.util.List<java.lang.String>

A set of Snowflake roles that a user does not need to explicitly consent to using after authenticating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/oauth_integration_for_custom_clients#pre_authorized_roles_list OauthIntegrationForCustomClients#pre_authorized_roles_list}

---

### OauthIntegrationForCustomClientsDescribeOutput <a name="OauthIntegrationForCustomClientsDescribeOutput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutput;

OauthIntegrationForCustomClientsDescribeOutput.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct <a name="OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct;

OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputComment <a name="OauthIntegrationForCustomClientsDescribeOutputComment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputComment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputComment;

OauthIntegrationForCustomClientsDescribeOutputComment.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputEnabled <a name="OauthIntegrationForCustomClientsDescribeOutputEnabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabled.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputEnabled;

OauthIntegrationForCustomClientsDescribeOutputEnabled.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy <a name="OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy;

OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints;

OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints;

OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri;

OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint;

OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthClientId <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientId;

OauthIntegrationForCustomClientsDescribeOutputOauthClientId.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp;

OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp;

OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthClientType <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientType;

OauthIntegrationForCustomClientsDescribeOutputOauthClientType.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce <a name="OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce;

OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens <a name="OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens;

OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri <a name="OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri;

OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity <a name="OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity;

OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint <a name="OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint;

OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles <a name="OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles;

OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles.builder()
    .build();
```


### OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct <a name="OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct;

OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct.builder()
    .build();
```


### OauthIntegrationForCustomClientsShowOutput <a name="OauthIntegrationForCustomClientsShowOutput" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsShowOutput;

OauthIntegrationForCustomClientsShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList <a name="OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList;

new OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct">OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct">OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct</a>

---


### OauthIntegrationForCustomClientsDescribeOutputCommentList <a name="OauthIntegrationForCustomClientsDescribeOutputCommentList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputCommentList;

new OauthIntegrationForCustomClientsDescribeOutputCommentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputComment">OauthIntegrationForCustomClientsDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputComment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputComment">OauthIntegrationForCustomClientsDescribeOutputComment</a>

---


### OauthIntegrationForCustomClientsDescribeOutputEnabledList <a name="OauthIntegrationForCustomClientsDescribeOutputEnabledList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputEnabledList;

new OauthIntegrationForCustomClientsDescribeOutputEnabledList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabled">OauthIntegrationForCustomClientsDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputEnabled getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabled">OauthIntegrationForCustomClientsDescribeOutputEnabled</a>

---


### OauthIntegrationForCustomClientsDescribeOutputList <a name="OauthIntegrationForCustomClientsDescribeOutputList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputList;

new OauthIntegrationForCustomClientsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList <a name="OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList;

new OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy">OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy">OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList;

new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList;

new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList;

new OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri">OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri">OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList;

new OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint">OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint">OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientId">OauthIntegrationForCustomClientsDescribeOutputOauthClientId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientId">OauthIntegrationForCustomClientsDescribeOutputOauthClientId</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientType">OauthIntegrationForCustomClientsDescribeOutputOauthClientType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientType">OauthIntegrationForCustomClientsDescribeOutputOauthClientType</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList;

new OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce">OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce">OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList;

new OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens">OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens">OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList;

new OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri">OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri">OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList;

new OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity">OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity">OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList;

new OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint">OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint">OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList <a name="OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList;

new OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles">OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles">OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles</a>

---


### OauthIntegrationForCustomClientsDescribeOutputOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.blockedRolesList">blockedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList">OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList">OauthIntegrationForCustomClientsDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList">OauthIntegrationForCustomClientsDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.networkPolicy">networkPolicy</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList">OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAllowedAuthorizationEndpoints">oauthAllowedAuthorizationEndpoints</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAllowedTokenEndpoints">oauthAllowedTokenEndpoints</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAllowNonTlsRedirectUri">oauthAllowNonTlsRedirectUri</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList">OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList">OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList">OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientRsaPublicKey2Fp">oauthClientRsaPublicKey2Fp</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientRsaPublicKeyFp">oauthClientRsaPublicKeyFp</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientType">oauthClientType</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList">OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthEnforcePkce">oauthEnforcePkce</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList">OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthIssueRefreshTokens">oauthIssueRefreshTokens</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList">OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList">OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList">OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList">OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthUseSecondaryRoles">oauthUseSecondaryRoles</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList">OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.preAuthorizedRolesList">preAuthorizedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList">OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutput">OauthIntegrationForCustomClientsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockedRolesList`<sup>Required</sup> <a name="blockedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.blockedRolesList"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList getBlockedRolesList();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList">OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.comment"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputCommentList getComment();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputCommentList">OauthIntegrationForCustomClientsDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.enabled"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputEnabledList getEnabled();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputEnabledList">OauthIntegrationForCustomClientsDescribeOutputEnabledList</a>

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.networkPolicy"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList getNetworkPolicy();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList">OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList</a>

---

##### `oauthAllowedAuthorizationEndpoints`<sup>Required</sup> <a name="oauthAllowedAuthorizationEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAllowedAuthorizationEndpoints"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList getOauthAllowedAuthorizationEndpoints();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList</a>

---

##### `oauthAllowedTokenEndpoints`<sup>Required</sup> <a name="oauthAllowedTokenEndpoints" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAllowedTokenEndpoints"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList getOauthAllowedTokenEndpoints();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList">OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList</a>

---

##### `oauthAllowNonTlsRedirectUri`<sup>Required</sup> <a name="oauthAllowNonTlsRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAllowNonTlsRedirectUri"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList getOauthAllowNonTlsRedirectUri();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList">OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList</a>

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList getOauthAuthorizationEndpoint();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList">OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientId"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList getOauthClientId();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList">OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList</a>

---

##### `oauthClientRsaPublicKey2Fp`<sup>Required</sup> <a name="oauthClientRsaPublicKey2Fp" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientRsaPublicKey2Fp"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList getOauthClientRsaPublicKey2Fp();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList</a>

---

##### `oauthClientRsaPublicKeyFp`<sup>Required</sup> <a name="oauthClientRsaPublicKeyFp" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientRsaPublicKeyFp"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList getOauthClientRsaPublicKeyFp();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList">OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList</a>

---

##### `oauthClientType`<sup>Required</sup> <a name="oauthClientType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthClientType"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList getOauthClientType();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList">OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList</a>

---

##### `oauthEnforcePkce`<sup>Required</sup> <a name="oauthEnforcePkce" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthEnforcePkce"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList getOauthEnforcePkce();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList">OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList</a>

---

##### `oauthIssueRefreshTokens`<sup>Required</sup> <a name="oauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthIssueRefreshTokens"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList getOauthIssueRefreshTokens();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList">OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList</a>

---

##### `oauthRedirectUri`<sup>Required</sup> <a name="oauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthRedirectUri"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList getOauthRedirectUri();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList">OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList</a>

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList getOauthRefreshTokenValidity();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList">OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList getOauthTokenEndpoint();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList">OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList</a>

---

##### `oauthUseSecondaryRoles`<sup>Required</sup> <a name="oauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.oauthUseSecondaryRoles"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList getOauthUseSecondaryRoles();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList">OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList</a>

---

##### `preAuthorizedRolesList`<sup>Required</sup> <a name="preAuthorizedRolesList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.preAuthorizedRolesList"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList getPreAuthorizedRolesList();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList">OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutput">OauthIntegrationForCustomClientsDescribeOutput</a>

---


### OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList <a name="OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList;

new OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.get"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference <a name="OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference;

new OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct">OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct">OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct</a>

---


### OauthIntegrationForCustomClientsShowOutputList <a name="OauthIntegrationForCustomClientsShowOutputList" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsShowOutputList;

new OauthIntegrationForCustomClientsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.get"></a>

```java
public OauthIntegrationForCustomClientsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OauthIntegrationForCustomClientsShowOutputOutputReference <a name="OauthIntegrationForCustomClientsShowOutputOutputReference" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.oauth_integration_for_custom_clients.OauthIntegrationForCustomClientsShowOutputOutputReference;

new OauthIntegrationForCustomClientsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutput">OauthIntegrationForCustomClientsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutputOutputReference.property.internalValue"></a>

```java
public OauthIntegrationForCustomClientsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegrationForCustomClients.OauthIntegrationForCustomClientsShowOutput">OauthIntegrationForCustomClientsShowOutput</a>

---



