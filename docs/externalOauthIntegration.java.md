# `externalOauthIntegration` Submodule <a name="`externalOauthIntegration` Submodule" id="@cdktf/provider-snowflake.externalOauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalOauthIntegration <a name="ExternalOauthIntegration" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegration;

ExternalOauthIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .externalOauthIssuer(java.lang.String)
    .externalOauthSnowflakeUserMappingAttribute(java.lang.String)
    .externalOauthTokenUserMappingClaim(java.util.List<java.lang.String>)
    .externalOauthType(java.lang.String)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .externalOauthAllowedRolesList(java.util.List<java.lang.String>)
//  .externalOauthAnyRoleMode(java.lang.String)
//  .externalOauthAudienceList(java.util.List<java.lang.String>)
//  .externalOauthBlockedRolesList(java.util.List<java.lang.String>)
//  .externalOauthJwsKeysUrl(java.util.List<java.lang.String>)
//  .externalOauthRsaPublicKey(java.lang.String)
//  .externalOauthRsaPublicKey2(java.lang.String)
//  .externalOauthScopeDelimiter(java.lang.String)
//  .externalOauthScopeMappingAttribute(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExternalOauthIntegrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to initiate operation of the integration or suspend it. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthIssuer">externalOauthIssuer</a></code> | <code>java.lang.String</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code>java.lang.String</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthType">externalOauthType</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` \| `AZURE` \| `PING_FEDERATE` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code>java.lang.String</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code>java.util.List<java.lang.String></code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code>java.lang.String</code> | Specifies the scope delimiter in the authorization token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthScopeMappingAttribute">externalOauthScopeMappingAttribute</a></code> | <code>java.lang.String</code> | Specifies the access token claim to map the access token to an account role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to initiate operation of the integration or suspend it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthIssuer"></a>

- *Type:* java.lang.String

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_issuer ExternalOauthIntegration#external_oauth_issuer}

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthSnowflakeUserMappingAttribute"></a>

- *Type:* java.lang.String

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Valid values are (case-insensitive): `LOGIN_NAME` | `EMAIL_ADDRESS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_snowflake_user_mapping_attribute ExternalOauthIntegration#external_oauth_snowflake_user_mapping_attribute}

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthTokenUserMappingClaim"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_token_user_mapping_claim ExternalOauthIntegration#external_oauth_token_user_mapping_claim}

---

##### `externalOauthType`<sup>Required</sup> <a name="externalOauthType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthType"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` | `AZURE` | `PING_FEDERATE` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_type ExternalOauthIntegration#external_oauth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `externalOauthAllowedRolesList`<sup>Optional</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthAllowedRolesList"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that the client can set as the primary role.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_allowed_roles_list ExternalOauthIntegration#external_oauth_allowed_roles_list}

---

##### `externalOauthAnyRoleMode`<sup>Optional</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthAnyRoleMode"></a>

- *Type:* java.lang.String

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Valid values are (case-insensitive): `DISABLE` | `ENABLE` | `ENABLE_FOR_PRIVILEGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_any_role_mode ExternalOauthIntegration#external_oauth_any_role_mode}

---

##### `externalOauthAudienceList`<sup>Optional</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthAudienceList"></a>

- *Type:* java.util.List<java.lang.String>

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_audience_list ExternalOauthIntegration#external_oauth_audience_list}

---

##### `externalOauthBlockedRolesList`<sup>Optional</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthBlockedRolesList"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that a client cannot set as the primary role.

By default, this list includes the ACCOUNTADMIN, ORGADMIN and SECURITYADMIN roles. To remove these privileged roles from the list, use the ALTER ACCOUNT command to set the EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST account parameter to FALSE. For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_blocked_roles_list ExternalOauthIntegration#external_oauth_blocked_roles_list}

---

##### `externalOauthJwsKeysUrl`<sup>Optional</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthJwsKeysUrl"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_jws_keys_url ExternalOauthIntegration#external_oauth_jws_keys_url}

---

##### `externalOauthRsaPublicKey`<sup>Optional</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthRsaPublicKey"></a>

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key ExternalOauthIntegration#external_oauth_rsa_public_key}

---

##### `externalOauthRsaPublicKey2`<sup>Optional</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthRsaPublicKey2"></a>

- *Type:* java.lang.String

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key_2 ExternalOauthIntegration#external_oauth_rsa_public_key_2}

---

##### `externalOauthScopeDelimiter`<sup>Optional</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthScopeDelimiter"></a>

- *Type:* java.lang.String

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_scope_delimiter ExternalOauthIntegration#external_oauth_scope_delimiter}

---

##### `externalOauthScopeMappingAttribute`<sup>Optional</sup> <a name="externalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.externalOauthScopeMappingAttribute"></a>

- *Type:* java.lang.String

Specifies the access token claim to map the access token to an account role.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_scope_mapping_attribute ExternalOauthIntegration#external_oauth_scope_mapping_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#timeouts ExternalOauthIntegration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAllowedRolesList">resetExternalOauthAllowedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAnyRoleMode">resetExternalOauthAnyRoleMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAudienceList">resetExternalOauthAudienceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthBlockedRolesList">resetExternalOauthBlockedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthJwsKeysUrl">resetExternalOauthJwsKeysUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey">resetExternalOauthRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey2">resetExternalOauthRsaPublicKey2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeDelimiter">resetExternalOauthScopeDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeMappingAttribute">resetExternalOauthScopeMappingAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.putTimeouts"></a>

```java
public void putTimeouts(ExternalOauthIntegrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment"></a>

```java
public void resetComment()
```

##### `resetExternalOauthAllowedRolesList` <a name="resetExternalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAllowedRolesList"></a>

```java
public void resetExternalOauthAllowedRolesList()
```

##### `resetExternalOauthAnyRoleMode` <a name="resetExternalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAnyRoleMode"></a>

```java
public void resetExternalOauthAnyRoleMode()
```

##### `resetExternalOauthAudienceList` <a name="resetExternalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAudienceList"></a>

```java
public void resetExternalOauthAudienceList()
```

##### `resetExternalOauthBlockedRolesList` <a name="resetExternalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthBlockedRolesList"></a>

```java
public void resetExternalOauthBlockedRolesList()
```

##### `resetExternalOauthJwsKeysUrl` <a name="resetExternalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthJwsKeysUrl"></a>

```java
public void resetExternalOauthJwsKeysUrl()
```

##### `resetExternalOauthRsaPublicKey` <a name="resetExternalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey"></a>

```java
public void resetExternalOauthRsaPublicKey()
```

##### `resetExternalOauthRsaPublicKey2` <a name="resetExternalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey2"></a>

```java
public void resetExternalOauthRsaPublicKey2()
```

##### `resetExternalOauthScopeDelimiter` <a name="resetExternalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeDelimiter"></a>

```java
public void resetExternalOauthScopeDelimiter()
```

##### `resetExternalOauthScopeMappingAttribute` <a name="resetExternalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeMappingAttribute"></a>

```java
public void resetExternalOauthScopeMappingAttribute()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegration;

ExternalOauthIntegration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegration;

ExternalOauthIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegration;

ExternalOauthIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegration;

ExternalOauthIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExternalOauthIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExternalOauthIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExternalOauthIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ExternalOauthIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList">ExternalOauthIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.relatedParameters">relatedParameters</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList">ExternalOauthIntegrationRelatedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList">ExternalOauthIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference">ExternalOauthIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesListInput">externalOauthAllowedRolesListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleModeInput">externalOauthAnyRoleModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceListInput">externalOauthAudienceListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesListInput">externalOauthBlockedRolesListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuerInput">externalOauthIssuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrlInput">externalOauthJwsKeysUrlInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2Input">externalOauthRsaPublicKey2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKeyInput">externalOauthRsaPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiterInput">externalOauthScopeDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttributeInput">externalOauthScopeMappingAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttributeInput">externalOauthSnowflakeUserMappingAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaimInput">externalOauthTokenUserMappingClaimInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTypeInput">externalOauthTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuer">externalOauthIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttribute">externalOauthScopeMappingAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthType">externalOauthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.describeOutput"></a>

```java
public ExternalOauthIntegrationDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList">ExternalOauthIntegrationDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `relatedParameters`<sup>Required</sup> <a name="relatedParameters" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.relatedParameters"></a>

```java
public ExternalOauthIntegrationRelatedParametersList getRelatedParameters();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList">ExternalOauthIntegrationRelatedParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.showOutput"></a>

```java
public ExternalOauthIntegrationShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList">ExternalOauthIntegrationShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.timeouts"></a>

```java
public ExternalOauthIntegrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference">ExternalOauthIntegrationTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalOauthAllowedRolesListInput`<sup>Optional</sup> <a name="externalOauthAllowedRolesListInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesListInput"></a>

```java
public java.util.List<java.lang.String> getExternalOauthAllowedRolesListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthAnyRoleModeInput`<sup>Optional</sup> <a name="externalOauthAnyRoleModeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleModeInput"></a>

```java
public java.lang.String getExternalOauthAnyRoleModeInput();
```

- *Type:* java.lang.String

---

##### `externalOauthAudienceListInput`<sup>Optional</sup> <a name="externalOauthAudienceListInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceListInput"></a>

```java
public java.util.List<java.lang.String> getExternalOauthAudienceListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthBlockedRolesListInput`<sup>Optional</sup> <a name="externalOauthBlockedRolesListInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesListInput"></a>

```java
public java.util.List<java.lang.String> getExternalOauthBlockedRolesListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthIssuerInput`<sup>Optional</sup> <a name="externalOauthIssuerInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuerInput"></a>

```java
public java.lang.String getExternalOauthIssuerInput();
```

- *Type:* java.lang.String

---

##### `externalOauthJwsKeysUrlInput`<sup>Optional</sup> <a name="externalOauthJwsKeysUrlInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrlInput"></a>

```java
public java.util.List<java.lang.String> getExternalOauthJwsKeysUrlInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthRsaPublicKey2Input`<sup>Optional</sup> <a name="externalOauthRsaPublicKey2Input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2Input"></a>

```java
public java.lang.String getExternalOauthRsaPublicKey2Input();
```

- *Type:* java.lang.String

---

##### `externalOauthRsaPublicKeyInput`<sup>Optional</sup> <a name="externalOauthRsaPublicKeyInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKeyInput"></a>

```java
public java.lang.String getExternalOauthRsaPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `externalOauthScopeDelimiterInput`<sup>Optional</sup> <a name="externalOauthScopeDelimiterInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiterInput"></a>

```java
public java.lang.String getExternalOauthScopeDelimiterInput();
```

- *Type:* java.lang.String

---

##### `externalOauthScopeMappingAttributeInput`<sup>Optional</sup> <a name="externalOauthScopeMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttributeInput"></a>

```java
public java.lang.String getExternalOauthScopeMappingAttributeInput();
```

- *Type:* java.lang.String

---

##### `externalOauthSnowflakeUserMappingAttributeInput`<sup>Optional</sup> <a name="externalOauthSnowflakeUserMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttributeInput"></a>

```java
public java.lang.String getExternalOauthSnowflakeUserMappingAttributeInput();
```

- *Type:* java.lang.String

---

##### `externalOauthTokenUserMappingClaimInput`<sup>Optional</sup> <a name="externalOauthTokenUserMappingClaimInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaimInput"></a>

```java
public java.util.List<java.lang.String> getExternalOauthTokenUserMappingClaimInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthTypeInput`<sup>Optional</sup> <a name="externalOauthTypeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTypeInput"></a>

```java
public java.lang.String getExternalOauthTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalOauthAllowedRolesList`<sup>Required</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesList"></a>

```java
public java.util.List<java.lang.String> getExternalOauthAllowedRolesList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthAnyRoleMode`<sup>Required</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleMode"></a>

```java
public java.lang.String getExternalOauthAnyRoleMode();
```

- *Type:* java.lang.String

---

##### `externalOauthAudienceList`<sup>Required</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceList"></a>

```java
public java.util.List<java.lang.String> getExternalOauthAudienceList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthBlockedRolesList`<sup>Required</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesList"></a>

```java
public java.util.List<java.lang.String> getExternalOauthBlockedRolesList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuer"></a>

```java
public java.lang.String getExternalOauthIssuer();
```

- *Type:* java.lang.String

---

##### `externalOauthJwsKeysUrl`<sup>Required</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrl"></a>

```java
public java.util.List<java.lang.String> getExternalOauthJwsKeysUrl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthRsaPublicKey`<sup>Required</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey"></a>

```java
public java.lang.String getExternalOauthRsaPublicKey();
```

- *Type:* java.lang.String

---

##### `externalOauthRsaPublicKey2`<sup>Required</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2"></a>

```java
public java.lang.String getExternalOauthRsaPublicKey2();
```

- *Type:* java.lang.String

---

##### `externalOauthScopeDelimiter`<sup>Required</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiter"></a>

```java
public java.lang.String getExternalOauthScopeDelimiter();
```

- *Type:* java.lang.String

---

##### `externalOauthScopeMappingAttribute`<sup>Required</sup> <a name="externalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttribute"></a>

```java
public java.lang.String getExternalOauthScopeMappingAttribute();
```

- *Type:* java.lang.String

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttribute"></a>

```java
public java.lang.String getExternalOauthSnowflakeUserMappingAttribute();
```

- *Type:* java.lang.String

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaim"></a>

```java
public java.util.List<java.lang.String> getExternalOauthTokenUserMappingClaim();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalOauthType`<sup>Required</sup> <a name="externalOauthType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthType"></a>

```java
public java.lang.String getExternalOauthType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalOauthIntegrationConfig <a name="ExternalOauthIntegrationConfig" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationConfig;

ExternalOauthIntegrationConfig.builder()
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
    .externalOauthIssuer(java.lang.String)
    .externalOauthSnowflakeUserMappingAttribute(java.lang.String)
    .externalOauthTokenUserMappingClaim(java.util.List<java.lang.String>)
    .externalOauthType(java.lang.String)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .externalOauthAllowedRolesList(java.util.List<java.lang.String>)
//  .externalOauthAnyRoleMode(java.lang.String)
//  .externalOauthAudienceList(java.util.List<java.lang.String>)
//  .externalOauthBlockedRolesList(java.util.List<java.lang.String>)
//  .externalOauthJwsKeysUrl(java.util.List<java.lang.String>)
//  .externalOauthRsaPublicKey(java.lang.String)
//  .externalOauthRsaPublicKey2(java.lang.String)
//  .externalOauthScopeDelimiter(java.lang.String)
//  .externalOauthScopeMappingAttribute(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExternalOauthIntegrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to initiate operation of the integration or suspend it. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthIssuer">externalOauthIssuer</a></code> | <code>java.lang.String</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code>java.lang.String</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthType">externalOauthType</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` \| `AZURE` \| `PING_FEDERATE` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code>java.lang.String</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code>java.util.List<java.lang.String></code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code>java.lang.String</code> | Specifies the scope delimiter in the authorization token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeMappingAttribute">externalOauthScopeMappingAttribute</a></code> | <code>java.lang.String</code> | Specifies the access token claim to map the access token to an account role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to initiate operation of the integration or suspend it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthIssuer"></a>

```java
public java.lang.String getExternalOauthIssuer();
```

- *Type:* java.lang.String

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_issuer ExternalOauthIntegration#external_oauth_issuer}

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthSnowflakeUserMappingAttribute"></a>

```java
public java.lang.String getExternalOauthSnowflakeUserMappingAttribute();
```

- *Type:* java.lang.String

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Valid values are (case-insensitive): `LOGIN_NAME` | `EMAIL_ADDRESS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_snowflake_user_mapping_attribute ExternalOauthIntegration#external_oauth_snowflake_user_mapping_attribute}

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthTokenUserMappingClaim"></a>

```java
public java.util.List<java.lang.String> getExternalOauthTokenUserMappingClaim();
```

- *Type:* java.util.List<java.lang.String>

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_token_user_mapping_claim ExternalOauthIntegration#external_oauth_token_user_mapping_claim}

---

##### `externalOauthType`<sup>Required</sup> <a name="externalOauthType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthType"></a>

```java
public java.lang.String getExternalOauthType();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` | `AZURE` | `PING_FEDERATE` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_type ExternalOauthIntegration#external_oauth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `externalOauthAllowedRolesList`<sup>Optional</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAllowedRolesList"></a>

```java
public java.util.List<java.lang.String> getExternalOauthAllowedRolesList();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that the client can set as the primary role.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_allowed_roles_list ExternalOauthIntegration#external_oauth_allowed_roles_list}

---

##### `externalOauthAnyRoleMode`<sup>Optional</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAnyRoleMode"></a>

```java
public java.lang.String getExternalOauthAnyRoleMode();
```

- *Type:* java.lang.String

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Valid values are (case-insensitive): `DISABLE` | `ENABLE` | `ENABLE_FOR_PRIVILEGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_any_role_mode ExternalOauthIntegration#external_oauth_any_role_mode}

---

##### `externalOauthAudienceList`<sup>Optional</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAudienceList"></a>

```java
public java.util.List<java.lang.String> getExternalOauthAudienceList();
```

- *Type:* java.util.List<java.lang.String>

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_audience_list ExternalOauthIntegration#external_oauth_audience_list}

---

##### `externalOauthBlockedRolesList`<sup>Optional</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthBlockedRolesList"></a>

```java
public java.util.List<java.lang.String> getExternalOauthBlockedRolesList();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that a client cannot set as the primary role.

By default, this list includes the ACCOUNTADMIN, ORGADMIN and SECURITYADMIN roles. To remove these privileged roles from the list, use the ALTER ACCOUNT command to set the EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST account parameter to FALSE. For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_blocked_roles_list ExternalOauthIntegration#external_oauth_blocked_roles_list}

---

##### `externalOauthJwsKeysUrl`<sup>Optional</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthJwsKeysUrl"></a>

```java
public java.util.List<java.lang.String> getExternalOauthJwsKeysUrl();
```

- *Type:* java.util.List<java.lang.String>

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_jws_keys_url ExternalOauthIntegration#external_oauth_jws_keys_url}

---

##### `externalOauthRsaPublicKey`<sup>Optional</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey"></a>

```java
public java.lang.String getExternalOauthRsaPublicKey();
```

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key ExternalOauthIntegration#external_oauth_rsa_public_key}

---

##### `externalOauthRsaPublicKey2`<sup>Optional</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey2"></a>

```java
public java.lang.String getExternalOauthRsaPublicKey2();
```

- *Type:* java.lang.String

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key_2 ExternalOauthIntegration#external_oauth_rsa_public_key_2}

---

##### `externalOauthScopeDelimiter`<sup>Optional</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeDelimiter"></a>

```java
public java.lang.String getExternalOauthScopeDelimiter();
```

- *Type:* java.lang.String

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_scope_delimiter ExternalOauthIntegration#external_oauth_scope_delimiter}

---

##### `externalOauthScopeMappingAttribute`<sup>Optional</sup> <a name="externalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeMappingAttribute"></a>

```java
public java.lang.String getExternalOauthScopeMappingAttribute();
```

- *Type:* java.lang.String

Specifies the access token claim to map the access token to an account role.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#external_oauth_scope_mapping_attribute ExternalOauthIntegration#external_oauth_scope_mapping_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.timeouts"></a>

```java
public ExternalOauthIntegrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#timeouts ExternalOauthIntegration#timeouts}

---

### ExternalOauthIntegrationDescribeOutput <a name="ExternalOauthIntegrationDescribeOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutput;

ExternalOauthIntegrationDescribeOutput.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputComment <a name="ExternalOauthIntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputComment;

ExternalOauthIntegrationDescribeOutputComment.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputEnabled <a name="ExternalOauthIntegrationDescribeOutputEnabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputEnabled;

ExternalOauthIntegrationDescribeOutputEnabled.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct;

ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode;

ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct;

ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct <a name="ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct;

ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthIssuer <a name="ExternalOauthIntegrationDescribeOutputExternalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer;

ExternalOauthIntegrationDescribeOutputExternalOauthIssuer.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl <a name="ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl;

ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey;

ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2;

ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter <a name="ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter;

ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute <a name="ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute;

ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute.builder()
    .build();
```


### ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim <a name="ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim;

ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim.builder()
    .build();
```


### ExternalOauthIntegrationRelatedParameters <a name="ExternalOauthIntegrationRelatedParameters" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationRelatedParameters;

ExternalOauthIntegrationRelatedParameters.builder()
    .build();
```


### ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct <a name="ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct;

ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct.builder()
    .build();
```


### ExternalOauthIntegrationShowOutput <a name="ExternalOauthIntegrationShowOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationShowOutput;

ExternalOauthIntegrationShowOutput.builder()
    .build();
```


### ExternalOauthIntegrationTimeouts <a name="ExternalOauthIntegrationTimeouts" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationTimeouts;

ExternalOauthIntegrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#create ExternalOauthIntegration#create}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#delete ExternalOauthIntegration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#read ExternalOauthIntegration#read}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#update ExternalOauthIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#create ExternalOauthIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#delete ExternalOauthIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#read ExternalOauthIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/external_oauth_integration#update ExternalOauthIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalOauthIntegrationDescribeOutputCommentList <a name="ExternalOauthIntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputCommentList;

new ExternalOauthIntegrationDescribeOutputCommentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputCommentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputCommentOutputReference <a name="ExternalOauthIntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputCommentOutputReference;

new ExternalOauthIntegrationDescribeOutputCommentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment">ExternalOauthIntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputComment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment">ExternalOauthIntegrationDescribeOutputComment</a>

---


### ExternalOauthIntegrationDescribeOutputEnabledList <a name="ExternalOauthIntegrationDescribeOutputEnabledList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputEnabledList;

new ExternalOauthIntegrationDescribeOutputEnabledList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputEnabledOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputEnabledOutputReference <a name="ExternalOauthIntegrationDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference;

new ExternalOauthIntegrationDescribeOutputEnabledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled">ExternalOauthIntegrationDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputEnabled getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled">ExternalOauthIntegrationDescribeOutputEnabled</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList;

new ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList;

new ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList;

new ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList;

new ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList;

new ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer">ExternalOauthIntegrationDescribeOutputExternalOauthIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthIssuer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer">ExternalOauthIntegrationDescribeOutputExternalOauthIssuer</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList;

new ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List;

new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList;

new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList;

new ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList;

new ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList;

new ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference;

new ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim</a>

---


### ExternalOauthIntegrationDescribeOutputList <a name="ExternalOauthIntegrationDescribeOutputList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputList;

new ExternalOauthIntegrationDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.get"></a>

```java
public ExternalOauthIntegrationDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationDescribeOutputOutputReference <a name="ExternalOauthIntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationDescribeOutputOutputReference;

new ExternalOauthIntegrationDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList">ExternalOauthIntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList">ExternalOauthIntegrationDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthIssuer">externalOauthIssuer</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList">ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput">ExternalOauthIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.comment"></a>

```java
public ExternalOauthIntegrationDescribeOutputCommentList getComment();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList">ExternalOauthIntegrationDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.enabled"></a>

```java
public ExternalOauthIntegrationDescribeOutputEnabledList getEnabled();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList">ExternalOauthIntegrationDescribeOutputEnabledList</a>

---

##### `externalOauthAllowedRolesList`<sup>Required</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAllowedRolesList"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList getExternalOauthAllowedRolesList();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList</a>

---

##### `externalOauthAnyRoleMode`<sup>Required</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAnyRoleMode"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList getExternalOauthAnyRoleMode();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList</a>

---

##### `externalOauthAudienceList`<sup>Required</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAudienceList"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList getExternalOauthAudienceList();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList</a>

---

##### `externalOauthBlockedRolesList`<sup>Required</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthBlockedRolesList"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList getExternalOauthBlockedRolesList();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList</a>

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthIssuer"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList getExternalOauthIssuer();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList">ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList</a>

---

##### `externalOauthJwsKeysUrl`<sup>Required</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthJwsKeysUrl"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList getExternalOauthJwsKeysUrl();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList</a>

---

##### `externalOauthRsaPublicKey`<sup>Required</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList getExternalOauthRsaPublicKey();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList</a>

---

##### `externalOauthRsaPublicKey2`<sup>Required</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey2"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List getExternalOauthRsaPublicKey2();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List</a>

---

##### `externalOauthScopeDelimiter`<sup>Required</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthScopeDelimiter"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList getExternalOauthScopeDelimiter();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList</a>

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthSnowflakeUserMappingAttribute"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList getExternalOauthSnowflakeUserMappingAttribute();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList</a>

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthTokenUserMappingClaim"></a>

```java
public ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList getExternalOauthTokenUserMappingClaim();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput">ExternalOauthIntegrationDescribeOutput</a>

---


### ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList <a name="ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList;

new ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.get"></a>

```java
public ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference <a name="ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference;

new ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct</a>

---


### ExternalOauthIntegrationRelatedParametersList <a name="ExternalOauthIntegrationRelatedParametersList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationRelatedParametersList;

new ExternalOauthIntegrationRelatedParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.get"></a>

```java
public ExternalOauthIntegrationRelatedParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationRelatedParametersOutputReference <a name="ExternalOauthIntegrationRelatedParametersOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationRelatedParametersOutputReference;

new ExternalOauthIntegrationRelatedParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters">ExternalOauthIntegrationRelatedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList getExternalOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationRelatedParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters">ExternalOauthIntegrationRelatedParameters</a>

---


### ExternalOauthIntegrationShowOutputList <a name="ExternalOauthIntegrationShowOutputList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationShowOutputList;

new ExternalOauthIntegrationShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.get"></a>

```java
public ExternalOauthIntegrationShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalOauthIntegrationShowOutputOutputReference <a name="ExternalOauthIntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationShowOutputOutputReference;

new ExternalOauthIntegrationShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput">ExternalOauthIntegrationShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.integrationType"></a>

```java
public java.lang.String getIntegrationType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.internalValue"></a>

```java
public ExternalOauthIntegrationShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput">ExternalOauthIntegrationShowOutput</a>

---


### ExternalOauthIntegrationTimeoutsOutputReference <a name="ExternalOauthIntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.external_oauth_integration.ExternalOauthIntegrationTimeoutsOutputReference;

new ExternalOauthIntegrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationTimeouts">ExternalOauthIntegrationTimeouts</a>

---



