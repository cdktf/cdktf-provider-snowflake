# `secretWithAuthorizationCodeGrant` Submodule <a name="`secretWithAuthorizationCodeGrant` Submodule" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithAuthorizationCodeGrant <a name="SecretWithAuthorizationCodeGrant" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant snowflake_secret_with_authorization_code_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrant;

SecretWithAuthorizationCodeGrant.Builder.create(Construct scope, java.lang.String id)
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
    .apiAuthentication(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .oauthRefreshToken(java.lang.String)
    .oauthRefreshTokenExpiryTime(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.apiAuthentication">apiAuthentication</a></code> | <code>java.lang.String</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.oauthRefreshToken">oauthRefreshToken</a></code> | <code>java.lang.String</code> | Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>java.lang.String</code> | Specifies the timestamp as a string when the OAuth refresh token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.apiAuthentication"></a>

- *Type:* java.lang.String

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_authorization_code_grant).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#api_authentication SecretWithAuthorizationCodeGrant#api_authentication}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#database SecretWithAuthorizationCodeGrant#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.name"></a>

- *Type:* java.lang.String

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#name SecretWithAuthorizationCodeGrant#name}

---

##### `oauthRefreshToken`<sup>Required</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.oauthRefreshToken"></a>

- *Type:* java.lang.String

Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token SecretWithAuthorizationCodeGrant#oauth_refresh_token}

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.oauthRefreshTokenExpiryTime"></a>

- *Type:* java.lang.String

Specifies the timestamp as a string when the OAuth refresh token expires.

Accepted string formats: YYYY-MM-DD, YYYY-MM-DD HH:MI, YYYY-MM-DD HH:MI:SS, YYYY-MM-DD HH:MI <timezone>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token_expiry_time SecretWithAuthorizationCodeGrant#oauth_refresh_token_expiry_time}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#schema SecretWithAuthorizationCodeGrant#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#comment SecretWithAuthorizationCodeGrant#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrant;

SecretWithAuthorizationCodeGrant.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrant;

SecretWithAuthorizationCodeGrant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrant;

SecretWithAuthorizationCodeGrant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrant;

SecretWithAuthorizationCodeGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecretWithAuthorizationCodeGrant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecretWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecretWithAuthorizationCodeGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecretWithAuthorizationCodeGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithAuthorizationCodeGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType">secretType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput">oauthRefreshTokenExpiryTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput">oauthRefreshTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication">apiAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken">oauthRefreshToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.describeOutput"></a>

```java
public SecretWithAuthorizationCodeGrantDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList">SecretWithAuthorizationCodeGrantDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.showOutput"></a>

```java
public SecretWithAuthorizationCodeGrantShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList">SecretWithAuthorizationCodeGrantShowOutputList</a>

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthenticationInput"></a>

```java
public java.lang.String getApiAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenExpiryTimeInput`<sup>Optional</sup> <a name="oauthRefreshTokenExpiryTimeInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTimeInput"></a>

```java
public java.lang.String getOauthRefreshTokenExpiryTimeInput();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenInput`<sup>Optional</sup> <a name="oauthRefreshTokenInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenInput"></a>

```java
public java.lang.String getOauthRefreshTokenInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.apiAuthentication"></a>

```java
public java.lang.String getApiAuthentication();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthRefreshToken`<sup>Required</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshToken"></a>

```java
public java.lang.String getOauthRefreshToken();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.oauthRefreshTokenExpiryTime"></a>

```java
public java.lang.String getOauthRefreshTokenExpiryTime();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithAuthorizationCodeGrantConfig <a name="SecretWithAuthorizationCodeGrantConfig" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantConfig;

SecretWithAuthorizationCodeGrantConfig.builder()
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
    .apiAuthentication(java.lang.String)
    .database(java.lang.String)
    .name(java.lang.String)
    .oauthRefreshToken(java.lang.String)
    .oauthRefreshTokenExpiryTime(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication">apiAuthentication</a></code> | <code>java.lang.String</code> | Specifies the name value of the Snowflake security integration that connects Snowflake to an external service. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name">name</a></code> | <code>java.lang.String</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken">oauthRefreshToken</a></code> | <code>java.lang.String</code> | Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>java.lang.String</code> | Specifies the timestamp as a string when the OAuth refresh token expires. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.apiAuthentication"></a>

```java
public java.lang.String getApiAuthentication();
```

- *Type:* java.lang.String

Specifies the name value of the Snowflake security integration that connects Snowflake to an external service.

For more information about this resource, see [docs](./api_authentication_integration_with_authorization_code_grant).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#api_authentication SecretWithAuthorizationCodeGrant#api_authentication}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the secret Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#database SecretWithAuthorizationCodeGrant#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#name SecretWithAuthorizationCodeGrant#name}

---

##### `oauthRefreshToken`<sup>Required</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshToken"></a>

```java
public java.lang.String getOauthRefreshToken();
```

- *Type:* java.lang.String

Specifies the token as a string that is used to obtain a new access token from the OAuth authorization server when the access token expires.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token SecretWithAuthorizationCodeGrant#oauth_refresh_token}

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.oauthRefreshTokenExpiryTime"></a>

```java
public java.lang.String getOauthRefreshTokenExpiryTime();
```

- *Type:* java.lang.String

Specifies the timestamp as a string when the OAuth refresh token expires.

Accepted string formats: YYYY-MM-DD, YYYY-MM-DD HH:MI, YYYY-MM-DD HH:MI:SS, YYYY-MM-DD HH:MI <timezone>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#oauth_refresh_token_expiry_time SecretWithAuthorizationCodeGrant#oauth_refresh_token_expiry_time}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the secret.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#schema SecretWithAuthorizationCodeGrant#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#comment SecretWithAuthorizationCodeGrant#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/secret_with_authorization_code_grant#id SecretWithAuthorizationCodeGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecretWithAuthorizationCodeGrantDescribeOutput <a name="SecretWithAuthorizationCodeGrantDescribeOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantDescribeOutput;

SecretWithAuthorizationCodeGrantDescribeOutput.builder()
    .build();
```


### SecretWithAuthorizationCodeGrantShowOutput <a name="SecretWithAuthorizationCodeGrantShowOutput" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantShowOutput;

SecretWithAuthorizationCodeGrantShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SecretWithAuthorizationCodeGrantDescribeOutputList <a name="SecretWithAuthorizationCodeGrantDescribeOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantDescribeOutputList;

new SecretWithAuthorizationCodeGrantDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get"></a>

```java
public SecretWithAuthorizationCodeGrantDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecretWithAuthorizationCodeGrantDescribeOutputOutputReference <a name="SecretWithAuthorizationCodeGrantDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference;

new SecretWithAuthorizationCodeGrantDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName">integrationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">oauthAccessTokenExpiryTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">oauthRefreshTokenExpiryTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType">secretType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.integrationName"></a>

```java
public java.lang.String getIntegrationName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthAccessTokenExpiryTime`<sup>Required</sup> <a name="oauthAccessTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```java
public java.lang.String getOauthAccessTokenExpiryTime();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenExpiryTime`<sup>Required</sup> <a name="oauthRefreshTokenExpiryTime" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```java
public java.lang.String getOauthRefreshTokenExpiryTime();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutputOutputReference.property.internalValue"></a>

```java
public SecretWithAuthorizationCodeGrantDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantDescribeOutput">SecretWithAuthorizationCodeGrantDescribeOutput</a>

---


### SecretWithAuthorizationCodeGrantShowOutputList <a name="SecretWithAuthorizationCodeGrantShowOutputList" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantShowOutputList;

new SecretWithAuthorizationCodeGrantShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get"></a>

```java
public SecretWithAuthorizationCodeGrantShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### SecretWithAuthorizationCodeGrantShowOutputOutputReference <a name="SecretWithAuthorizationCodeGrantShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.secret_with_authorization_code_grant.SecretWithAuthorizationCodeGrantShowOutputOutputReference;

new SecretWithAuthorizationCodeGrantShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes">oauthScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType">secretType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthScopes`<sup>Required</sup> <a name="oauthScopes" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.oauthScopes"></a>

```java
public java.util.List<java.lang.String> getOauthScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.secretType"></a>

```java
public java.lang.String getSecretType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutputOutputReference.property.internalValue"></a>

```java
public SecretWithAuthorizationCodeGrantShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithAuthorizationCodeGrant.SecretWithAuthorizationCodeGrantShowOutput">SecretWithAuthorizationCodeGrantShowOutput</a>

---



