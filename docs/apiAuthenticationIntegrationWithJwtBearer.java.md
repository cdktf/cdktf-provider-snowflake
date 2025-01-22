# `apiAuthenticationIntegrationWithJwtBearer` Submodule <a name="`apiAuthenticationIntegrationWithJwtBearer` Submodule" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiAuthenticationIntegrationWithJwtBearer <a name="ApiAuthenticationIntegrationWithJwtBearer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer snowflake_api_authentication_integration_with_jwt_bearer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearer;

ApiAuthenticationIntegrationWithJwtBearer.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
    .oauthAssertionIssuer(java.lang.String)
    .oauthClientId(java.lang.String)
    .oauthClientSecret(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .oauthAccessTokenValidity(java.lang.Number)
//  .oauthAuthorizationEndpoint(java.lang.String)
//  .oauthClientAuthMethod(java.lang.String)
//  .oauthRefreshTokenValidity(java.lang.Number)
//  .oauthTokenEndpoint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthClientSecret">oauthClientSecret</a></code> | <code>java.lang.String</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | Specifies the URL for authenticating to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#enabled ApiAuthenticationIntegrationWithJwtBearer#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#name ApiAuthenticationIntegrationWithJwtBearer#name}

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthAssertionIssuer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}.

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthClientId"></a>

- *Type:* java.lang.String

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_id ApiAuthenticationIntegrationWithJwtBearer#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthClientSecret"></a>

- *Type:* java.lang.String

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_secret ApiAuthenticationIntegrationWithJwtBearer#oauth_client_secret}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#comment ApiAuthenticationIntegrationWithJwtBearer#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthAccessTokenValidity`<sup>Optional</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthAccessTokenValidity"></a>

- *Type:* java.lang.Number

Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_access_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_access_token_validity}

---

##### `oauthAuthorizationEndpoint`<sup>Optional</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthAuthorizationEndpoint"></a>

- *Type:* java.lang.String

Specifies the URL for authenticating to the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_authorization_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_authorization_endpoint}

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthClientAuthMethod"></a>

- *Type:* java.lang.String

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_auth_method ApiAuthenticationIntegrationWithJwtBearer#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthRefreshTokenValidity"></a>

- *Type:* java.lang.Number

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_refresh_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_refresh_token_validity}

---

##### `oauthTokenEndpoint`<sup>Optional</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.Initializer.parameter.oauthTokenEndpoint"></a>

- *Type:* java.lang.String

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_token_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_token_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAccessTokenValidity">resetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAuthorizationEndpoint">resetOauthAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthClientAuthMethod">resetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthTokenEndpoint">resetOauthTokenEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetId"></a>

```java
public void resetId()
```

##### `resetOauthAccessTokenValidity` <a name="resetOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAccessTokenValidity"></a>

```java
public void resetOauthAccessTokenValidity()
```

##### `resetOauthAuthorizationEndpoint` <a name="resetOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthAuthorizationEndpoint"></a>

```java
public void resetOauthAuthorizationEndpoint()
```

##### `resetOauthClientAuthMethod` <a name="resetOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthClientAuthMethod"></a>

```java
public void resetOauthClientAuthMethod()
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthRefreshTokenValidity"></a>

```java
public void resetOauthRefreshTokenValidity()
```

##### `resetOauthTokenEndpoint` <a name="resetOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.resetOauthTokenEndpoint"></a>

```java
public void resetOauthTokenEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiAuthenticationIntegrationWithJwtBearer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearer;

ApiAuthenticationIntegrationWithJwtBearer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearer;

ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearer;

ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearer;

ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiAuthenticationIntegrationWithJwtBearer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiAuthenticationIntegrationWithJwtBearer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiAuthenticationIntegrationWithJwtBearer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiAuthenticationIntegrationWithJwtBearer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList">ApiAuthenticationIntegrationWithJwtBearerShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidityInput">oauthAccessTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuerInput">oauthAssertionIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpointInput">oauthAuthorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethodInput">oauthClientAuthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpointInput">oauthTokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecret">oauthClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.describeOutput"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.showOutput"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList">ApiAuthenticationIntegrationWithJwtBearerShowOutputList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthAccessTokenValidityInput`<sup>Optional</sup> <a name="oauthAccessTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidityInput"></a>

```java
public java.lang.Number getOauthAccessTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `oauthAssertionIssuerInput`<sup>Optional</sup> <a name="oauthAssertionIssuerInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuerInput"></a>

```java
public java.lang.String getOauthAssertionIssuerInput();
```

- *Type:* java.lang.String

---

##### `oauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="oauthAuthorizationEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpointInput"></a>

```java
public java.lang.String getOauthAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `oauthClientAuthMethodInput`<sup>Optional</sup> <a name="oauthClientAuthMethodInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethodInput"></a>

```java
public java.lang.String getOauthClientAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientIdInput"></a>

```java
public java.lang.String getOauthClientIdInput();
```

- *Type:* java.lang.String

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecretInput"></a>

```java
public java.lang.String getOauthClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidityInput"></a>

```java
public java.lang.Number getOauthRefreshTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `oauthTokenEndpointInput`<sup>Optional</sup> <a name="oauthTokenEndpointInput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpointInput"></a>

```java
public java.lang.String getOauthTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAccessTokenValidity"></a>

```java
public java.lang.Number getOauthAccessTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAssertionIssuer"></a>

```java
public java.lang.String getOauthAssertionIssuer();
```

- *Type:* java.lang.String

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthAuthorizationEndpoint"></a>

```java
public java.lang.String getOauthAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientAuthMethod"></a>

```java
public java.lang.String getOauthClientAuthMethod();
```

- *Type:* java.lang.String

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthClientSecret"></a>

```java
public java.lang.String getOauthClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.oauthTokenEndpoint"></a>

```java
public java.lang.String getOauthTokenEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiAuthenticationIntegrationWithJwtBearerConfig <a name="ApiAuthenticationIntegrationWithJwtBearerConfig" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerConfig;

ApiAuthenticationIntegrationWithJwtBearerConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
    .oauthAssertionIssuer(java.lang.String)
    .oauthClientId(java.lang.String)
    .oauthClientSecret(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .oauthAccessTokenValidity(java.lang.Number)
//  .oauthAuthorizationEndpoint(java.lang.String)
//  .oauthClientAuthMethod(java.lang.String)
//  .oauthRefreshTokenValidity(java.lang.Number)
//  .oauthTokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether this security integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | Specifies the client ID for the OAuth application in the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientSecret">oauthClientSecret</a></code> | <code>java.lang.String</code> | Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | Specifies the URL for authenticating to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | Specifies that POST is used as the authentication method to the external service. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies the value to determine the validity of the refresh token obtained from the OAuth server. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether this security integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#enabled ApiAuthenticationIntegrationWithJwtBearer#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#name ApiAuthenticationIntegrationWithJwtBearer#name}

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAssertionIssuer"></a>

```java
public java.lang.String getOauthAssertionIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}.

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

Specifies the client ID for the OAuth application in the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_id ApiAuthenticationIntegrationWithJwtBearer#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientSecret"></a>

```java
public java.lang.String getOauthClientSecret();
```

- *Type:* java.lang.String

Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step.

The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_secret ApiAuthenticationIntegrationWithJwtBearer#oauth_client_secret}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#comment ApiAuthenticationIntegrationWithJwtBearer#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthAccessTokenValidity`<sup>Optional</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAccessTokenValidity"></a>

```java
public java.lang.Number getOauthAccessTokenValidity();
```

- *Type:* java.lang.Number

Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_access_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_access_token_validity}

---

##### `oauthAuthorizationEndpoint`<sup>Optional</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthAuthorizationEndpoint"></a>

```java
public java.lang.String getOauthAuthorizationEndpoint();
```

- *Type:* java.lang.String

Specifies the URL for authenticating to the external service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_authorization_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_authorization_endpoint}

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthClientAuthMethod"></a>

```java
public java.lang.String getOauthClientAuthMethod();
```

- *Type:* java.lang.String

Specifies that POST is used as the authentication method to the external service.

If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_auth_method ApiAuthenticationIntegrationWithJwtBearer#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

Specifies the value to determine the validity of the refresh token obtained from the OAuth server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_refresh_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_refresh_token_validity}

---

##### `oauthTokenEndpoint`<sup>Optional</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerConfig.property.oauthTokenEndpoint"></a>

```java
public java.lang.String getOauthTokenEndpoint();
```

- *Type:* java.lang.String

Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token.

The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_token_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_token_endpoint}

---

### ApiAuthenticationIntegrationWithJwtBearerDescribeOutput <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutput.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration;

ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration.builder()
    .build();
```


### ApiAuthenticationIntegrationWithJwtBearerShowOutput <a name="ApiAuthenticationIntegrationWithJwtBearerShowOutput" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput;

ApiAuthenticationIntegrationWithJwtBearerShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.authType">authType</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.parentIntegration">parentIntegration</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput">ApiAuthenticationIntegrationWithJwtBearerDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.authType"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList getAuthType();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.comment"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList getComment();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.enabled"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList getEnabled();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList</a>

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList getOauthAccessTokenValidity();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList</a>

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList getOauthAllowedScopes();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList</a>

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList getOauthAuthorizationEndpoint();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList</a>

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList getOauthClientAuthMethod();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList</a>

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthClientId"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList getOauthClientId();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList</a>

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthGrant"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList getOauthGrant();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList</a>

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList getOauthRefreshTokenValidity();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList</a>

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList getOauthTokenEndpoint();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList</a>

---

##### `parentIntegration`<sup>Required</sup> <a name="parentIntegration" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.parentIntegration"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList getParentIntegration();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutput">ApiAuthenticationIntegrationWithJwtBearerDescribeOutput</a>

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration">ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration</a>

---


### ApiAuthenticationIntegrationWithJwtBearerShowOutputList <a name="ApiAuthenticationIntegrationWithJwtBearerShowOutputList" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList;

new ApiAuthenticationIntegrationWithJwtBearerShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.get"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference <a name="ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.api_authentication_integration_with_jwt_bearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference;

new ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput">ApiAuthenticationIntegrationWithJwtBearerShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference.property.internalValue"></a>

```java
public ApiAuthenticationIntegrationWithJwtBearerShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.apiAuthenticationIntegrationWithJwtBearer.ApiAuthenticationIntegrationWithJwtBearerShowOutput">ApiAuthenticationIntegrationWithJwtBearerShowOutput</a>

---



