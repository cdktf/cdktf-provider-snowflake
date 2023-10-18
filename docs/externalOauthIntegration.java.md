# `snowflake_external_oauth_integration`

Refer to the Terraform Registory for docs: [`snowflake_external_oauth_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration).

# `externalOauthIntegration` Submodule <a name="`externalOauthIntegration` Submodule" id="@cdktf/provider-snowflake.externalOauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalOauthIntegration <a name="ExternalOauthIntegration" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration}.

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
    .issuer(java.lang.String)
    .name(java.lang.String)
    .snowflakeUserMappingAttribute(java.lang.String)
    .tokenUserMappingClaims(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .anyRoleMode(java.lang.String)
//  .audienceUrls(java.util.List<java.lang.String>)
//  .blockedRoles(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .jwsKeysUrls(java.util.List<java.lang.String>)
//  .rsaPublicKey(java.lang.String)
//  .rsaPublicKey2(java.lang.String)
//  .scopeDelimiter(java.lang.String)
//  .scopeMappingAttribute(java.lang.String)
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
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.snowflakeUserMappingAttribute">snowflakeUserMappingAttribute</a></code> | <code>java.lang.String</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.tokenUserMappingClaims">tokenUserMappingClaims</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.anyRoleMode">anyRoleMode</a></code> | <code>java.lang.String</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.audienceUrls">audienceUrls</a></code> | <code>java.util.List<java.lang.String></code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.blockedRoles">blockedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.jwsKeysUrls">jwsKeysUrls</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey">rsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey2">rsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scopeDelimiter">scopeDelimiter</a></code> | <code>java.lang.String</code> | Specifies the scope delimiter in the authorization token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scopeMappingAttribute">scopeMappingAttribute</a></code> | <code>java.lang.String</code> | Specifies the access token claim to map the access token to an account role. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#issuer ExternalOauthIntegration#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `snowflakeUserMappingAttribute`<sup>Required</sup> <a name="snowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.snowflakeUserMappingAttribute"></a>

- *Type:* java.lang.String

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#snowflake_user_mapping_attribute ExternalOauthIntegration#snowflake_user_mapping_attribute}

---

##### `tokenUserMappingClaims`<sup>Required</sup> <a name="tokenUserMappingClaims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.tokenUserMappingClaims"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#token_user_mapping_claims ExternalOauthIntegration#token_user_mapping_claims}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#type ExternalOauthIntegration#type}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.allowedRoles"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that the client can set as the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#allowed_roles ExternalOauthIntegration#allowed_roles}

---

##### `anyRoleMode`<sup>Optional</sup> <a name="anyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.anyRoleMode"></a>

- *Type:* java.lang.String

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#any_role_mode ExternalOauthIntegration#any_role_mode}

---

##### `audienceUrls`<sup>Optional</sup> <a name="audienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.audienceUrls"></a>

- *Type:* java.util.List<java.lang.String>

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#audience_urls ExternalOauthIntegration#audience_urls}

---

##### `blockedRoles`<sup>Optional</sup> <a name="blockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.blockedRoles"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that a client cannot set as the primary role.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#blocked_roles ExternalOauthIntegration#blocked_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwsKeysUrls`<sup>Optional</sup> <a name="jwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.jwsKeysUrls"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#jws_keys_urls ExternalOauthIntegration#jws_keys_urls}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey"></a>

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#rsa_public_key ExternalOauthIntegration#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.rsaPublicKey2"></a>

- *Type:* java.lang.String

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#rsa_public_key_2 ExternalOauthIntegration#rsa_public_key_2}

---

##### `scopeDelimiter`<sup>Optional</sup> <a name="scopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scopeDelimiter"></a>

- *Type:* java.lang.String

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#scope_delimiter ExternalOauthIntegration#scope_delimiter}

---

##### `scopeMappingAttribute`<sup>Optional</sup> <a name="scopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scopeMappingAttribute"></a>

- *Type:* java.lang.String

Specifies the access token claim to map the access token to an account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#scope_mapping_attribute ExternalOauthIntegration#scope_mapping_attribute}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAnyRoleMode">resetAnyRoleMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAudienceUrls">resetAudienceUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetBlockedRoles">resetBlockedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetJwsKeysUrls">resetJwsKeysUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey">resetRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey2">resetRsaPublicKey2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeDelimiter">resetScopeDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeMappingAttribute">resetScopeMappingAttribute</a></code> | *No description.* |

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

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAllowedRoles"></a>

```java
public void resetAllowedRoles()
```

##### `resetAnyRoleMode` <a name="resetAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAnyRoleMode"></a>

```java
public void resetAnyRoleMode()
```

##### `resetAudienceUrls` <a name="resetAudienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetAudienceUrls"></a>

```java
public void resetAudienceUrls()
```

##### `resetBlockedRoles` <a name="resetBlockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetBlockedRoles"></a>

```java
public void resetBlockedRoles()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetJwsKeysUrls` <a name="resetJwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetJwsKeysUrls"></a>

```java
public void resetJwsKeysUrls()
```

##### `resetRsaPublicKey` <a name="resetRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey"></a>

```java
public void resetRsaPublicKey()
```

##### `resetRsaPublicKey2` <a name="resetRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetRsaPublicKey2"></a>

```java
public void resetRsaPublicKey2()
```

##### `resetScopeDelimiter` <a name="resetScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeDelimiter"></a>

```java
public void resetScopeDelimiter()
```

##### `resetScopeMappingAttribute` <a name="resetScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetScopeMappingAttribute"></a>

```java
public void resetScopeMappingAttribute()
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

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRolesInput">allowedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleModeInput">anyRoleModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrlsInput">audienceUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRolesInput">blockedRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrlsInput">jwsKeysUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2Input">rsaPublicKey2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKeyInput">rsaPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiterInput">scopeDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttributeInput">scopeMappingAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttributeInput">snowflakeUserMappingAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaimsInput">tokenUserMappingClaimsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleMode">anyRoleMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrls">audienceUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRoles">blockedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrls">jwsKeysUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey">rsaPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2">rsaPublicKey2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiter">scopeDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttribute">scopeMappingAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttribute">snowflakeUserMappingAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaims">tokenUserMappingClaims</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

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

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRolesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyRoleModeInput`<sup>Optional</sup> <a name="anyRoleModeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleModeInput"></a>

```java
public java.lang.String getAnyRoleModeInput();
```

- *Type:* java.lang.String

---

##### `audienceUrlsInput`<sup>Optional</sup> <a name="audienceUrlsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrlsInput"></a>

```java
public java.util.List<java.lang.String> getAudienceUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockedRolesInput`<sup>Optional</sup> <a name="blockedRolesInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRolesInput"></a>

```java
public java.util.List<java.lang.String> getBlockedRolesInput();
```

- *Type:* java.util.List<java.lang.String>

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

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwsKeysUrlsInput`<sup>Optional</sup> <a name="jwsKeysUrlsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrlsInput"></a>

```java
public java.util.List<java.lang.String> getJwsKeysUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rsaPublicKey2Input`<sup>Optional</sup> <a name="rsaPublicKey2Input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2Input"></a>

```java
public java.lang.String getRsaPublicKey2Input();
```

- *Type:* java.lang.String

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="rsaPublicKeyInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKeyInput"></a>

```java
public java.lang.String getRsaPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `scopeDelimiterInput`<sup>Optional</sup> <a name="scopeDelimiterInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiterInput"></a>

```java
public java.lang.String getScopeDelimiterInput();
```

- *Type:* java.lang.String

---

##### `scopeMappingAttributeInput`<sup>Optional</sup> <a name="scopeMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttributeInput"></a>

```java
public java.lang.String getScopeMappingAttributeInput();
```

- *Type:* java.lang.String

---

##### `snowflakeUserMappingAttributeInput`<sup>Optional</sup> <a name="snowflakeUserMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttributeInput"></a>

```java
public java.lang.String getSnowflakeUserMappingAttributeInput();
```

- *Type:* java.lang.String

---

##### `tokenUserMappingClaimsInput`<sup>Optional</sup> <a name="tokenUserMappingClaimsInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaimsInput"></a>

```java
public java.util.List<java.lang.String> getTokenUserMappingClaimsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyRoleMode`<sup>Required</sup> <a name="anyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.anyRoleMode"></a>

```java
public java.lang.String getAnyRoleMode();
```

- *Type:* java.lang.String

---

##### `audienceUrls`<sup>Required</sup> <a name="audienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.audienceUrls"></a>

```java
public java.util.List<java.lang.String> getAudienceUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `blockedRoles`<sup>Required</sup> <a name="blockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.blockedRoles"></a>

```java
public java.util.List<java.lang.String> getBlockedRoles();
```

- *Type:* java.util.List<java.lang.String>

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

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwsKeysUrls`<sup>Required</sup> <a name="jwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.jwsKeysUrls"></a>

```java
public java.util.List<java.lang.String> getJwsKeysUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rsaPublicKey`<sup>Required</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey"></a>

```java
public java.lang.String getRsaPublicKey();
```

- *Type:* java.lang.String

---

##### `rsaPublicKey2`<sup>Required</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.rsaPublicKey2"></a>

```java
public java.lang.String getRsaPublicKey2();
```

- *Type:* java.lang.String

---

##### `scopeDelimiter`<sup>Required</sup> <a name="scopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeDelimiter"></a>

```java
public java.lang.String getScopeDelimiter();
```

- *Type:* java.lang.String

---

##### `scopeMappingAttribute`<sup>Required</sup> <a name="scopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.scopeMappingAttribute"></a>

```java
public java.lang.String getScopeMappingAttribute();
```

- *Type:* java.lang.String

---

##### `snowflakeUserMappingAttribute`<sup>Required</sup> <a name="snowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.snowflakeUserMappingAttribute"></a>

```java
public java.lang.String getSnowflakeUserMappingAttribute();
```

- *Type:* java.lang.String

---

##### `tokenUserMappingClaims`<sup>Required</sup> <a name="tokenUserMappingClaims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tokenUserMappingClaims"></a>

```java
public java.util.List<java.lang.String> getTokenUserMappingClaims();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.type"></a>

```java
public java.lang.String getType();
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
    .issuer(java.lang.String)
    .name(java.lang.String)
    .snowflakeUserMappingAttribute(java.lang.String)
    .tokenUserMappingClaims(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .allowedRoles(java.util.List<java.lang.String>)
//  .anyRoleMode(java.lang.String)
//  .audienceUrls(java.util.List<java.lang.String>)
//  .blockedRoles(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .jwsKeysUrls(java.util.List<java.lang.String>)
//  .rsaPublicKey(java.lang.String)
//  .rsaPublicKey2(java.lang.String)
//  .scopeDelimiter(java.lang.String)
//  .scopeMappingAttribute(java.lang.String)
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
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.snowflakeUserMappingAttribute">snowflakeUserMappingAttribute</a></code> | <code>java.lang.String</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.tokenUserMappingClaims">tokenUserMappingClaims</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.allowedRoles">allowedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.anyRoleMode">anyRoleMode</a></code> | <code>java.lang.String</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.audienceUrls">audienceUrls</a></code> | <code>java.util.List<java.lang.String></code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.blockedRoles">blockedRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.jwsKeysUrls">jwsKeysUrls</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey">rsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey2">rsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeDelimiter">scopeDelimiter</a></code> | <code>java.lang.String</code> | Specifies the scope delimiter in the authorization token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeMappingAttribute">scopeMappingAttribute</a></code> | <code>java.lang.String</code> | Specifies the access token claim to map the access token to an account role. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#issuer ExternalOauthIntegration#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `snowflakeUserMappingAttribute`<sup>Required</sup> <a name="snowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.snowflakeUserMappingAttribute"></a>

```java
public java.lang.String getSnowflakeUserMappingAttribute();
```

- *Type:* java.lang.String

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#snowflake_user_mapping_attribute ExternalOauthIntegration#snowflake_user_mapping_attribute}

---

##### `tokenUserMappingClaims`<sup>Required</sup> <a name="tokenUserMappingClaims" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.tokenUserMappingClaims"></a>

```java
public java.util.List<java.lang.String> getTokenUserMappingClaims();
```

- *Type:* java.util.List<java.lang.String>

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#token_user_mapping_claims ExternalOauthIntegration#token_user_mapping_claims}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#type ExternalOauthIntegration#type}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.allowedRoles"></a>

```java
public java.util.List<java.lang.String> getAllowedRoles();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that the client can set as the primary role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#allowed_roles ExternalOauthIntegration#allowed_roles}

---

##### `anyRoleMode`<sup>Optional</sup> <a name="anyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.anyRoleMode"></a>

```java
public java.lang.String getAnyRoleMode();
```

- *Type:* java.lang.String

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#any_role_mode ExternalOauthIntegration#any_role_mode}

---

##### `audienceUrls`<sup>Optional</sup> <a name="audienceUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.audienceUrls"></a>

```java
public java.util.List<java.lang.String> getAudienceUrls();
```

- *Type:* java.util.List<java.lang.String>

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#audience_urls ExternalOauthIntegration#audience_urls}

---

##### `blockedRoles`<sup>Optional</sup> <a name="blockedRoles" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.blockedRoles"></a>

```java
public java.util.List<java.lang.String> getBlockedRoles();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of roles that a client cannot set as the primary role.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#blocked_roles ExternalOauthIntegration#blocked_roles}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwsKeysUrls`<sup>Optional</sup> <a name="jwsKeysUrls" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.jwsKeysUrls"></a>

```java
public java.util.List<java.lang.String> getJwsKeysUrls();
```

- *Type:* java.util.List<java.lang.String>

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#jws_keys_urls ExternalOauthIntegration#jws_keys_urls}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey"></a>

```java
public java.lang.String getRsaPublicKey();
```

- *Type:* java.lang.String

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#rsa_public_key ExternalOauthIntegration#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.rsaPublicKey2"></a>

```java
public java.lang.String getRsaPublicKey2();
```

- *Type:* java.lang.String

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#rsa_public_key_2 ExternalOauthIntegration#rsa_public_key_2}

---

##### `scopeDelimiter`<sup>Optional</sup> <a name="scopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeDelimiter"></a>

```java
public java.lang.String getScopeDelimiter();
```

- *Type:* java.lang.String

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#scope_delimiter ExternalOauthIntegration#scope_delimiter}

---

##### `scopeMappingAttribute`<sup>Optional</sup> <a name="scopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.scopeMappingAttribute"></a>

```java
public java.lang.String getScopeMappingAttribute();
```

- *Type:* java.lang.String

Specifies the access token claim to map the access token to an account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_oauth_integration#scope_mapping_attribute ExternalOauthIntegration#scope_mapping_attribute}

---



