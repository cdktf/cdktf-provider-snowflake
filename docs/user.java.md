# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-snowflake.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-snowflake.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user snowflake_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user.User;

User.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .defaultNamespace(java.lang.String)
//  .defaultRole(java.lang.String)
//  .defaultSecondaryRoles(java.util.List<java.lang.String>)
//  .defaultWarehouse(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .firstName(java.lang.String)
//  .id(java.lang.String)
//  .lastName(java.lang.String)
//  .loginName(java.lang.String)
//  .mustChangePassword(java.lang.Boolean)
//  .mustChangePassword(IResolvable)
//  .password(java.lang.String)
//  .rsaPublicKey(java.lang.String)
//  .rsaPublicKey2(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#comment User#comment}. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultNamespace">defaultNamespace</a></code> | <code>java.lang.String</code> | Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | Specifies the role that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultSecondaryRoles">defaultSecondaryRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the set of secondary roles that are active for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultWarehouse">defaultWarehouse</a></code> | <code>java.lang.String</code> | Specifies the virtual warehouse that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#disabled User#disabled}. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Name displayed for the user in the Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Email address for the user. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | First name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.loginName">loginName</a></code> | <code>java.lang.String</code> | The name users use to log in. If not supplied, snowflake will use name instead. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.mustChangePassword">mustChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | **WARNING:** this will put the password in the terraform state file. Use carefully. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey">rsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey2">rsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies the user’s second RSA public key; |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#name User#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#comment User#comment}.

---

##### `defaultNamespace`<sup>Optional</sup> <a name="defaultNamespace" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultNamespace"></a>

- *Type:* java.lang.String

Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_namespace User#default_namespace}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultRole"></a>

- *Type:* java.lang.String

Specifies the role that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_role User#default_role}

---

##### `defaultSecondaryRoles`<sup>Optional</sup> <a name="defaultSecondaryRoles" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultSecondaryRoles"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the set of secondary roles that are active for the user’s session upon login.

Currently only ["ALL"] value is supported - more information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_secondary_roles User#default_secondary_roles}

---

##### `defaultWarehouse`<sup>Optional</sup> <a name="defaultWarehouse" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultWarehouse"></a>

- *Type:* java.lang.String

Specifies the virtual warehouse that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_warehouse User#default_warehouse}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#disabled User#disabled}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Name displayed for the user in the Snowflake web interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#display_name User#display_name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Email address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#email User#email}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#first_name User#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#last_name User#last_name}

---

##### `loginName`<sup>Optional</sup> <a name="loginName" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.loginName"></a>

- *Type:* java.lang.String

The name users use to log in. If not supplied, snowflake will use name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#login_name User#login_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.mustChangePassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#must_change_password User#must_change_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.password"></a>

- *Type:* java.lang.String

**WARNING:** this will put the password in the terraform state file. Use carefully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#password User#password}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey"></a>

- *Type:* java.lang.String

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#rsa_public_key User#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey2"></a>

- *Type:* java.lang.String

Specifies the user’s second RSA public key;

used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.user.User.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultNamespace">resetDefaultNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultRole">resetDefaultRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultSecondaryRoles">resetDefaultSecondaryRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultWarehouse">resetDefaultWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetLoginName">resetLoginName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetMustChangePassword">resetMustChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetRsaPublicKey">resetRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetRsaPublicKey2">resetRsaPublicKey2</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.user.User.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.user.User.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.user.User.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.user.User.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.user.User.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.user.User.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.user.User.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.user.User.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.user.User.resetComment"></a>

```java
public void resetComment()
```

##### `resetDefaultNamespace` <a name="resetDefaultNamespace" id="@cdktf/provider-snowflake.user.User.resetDefaultNamespace"></a>

```java
public void resetDefaultNamespace()
```

##### `resetDefaultRole` <a name="resetDefaultRole" id="@cdktf/provider-snowflake.user.User.resetDefaultRole"></a>

```java
public void resetDefaultRole()
```

##### `resetDefaultSecondaryRoles` <a name="resetDefaultSecondaryRoles" id="@cdktf/provider-snowflake.user.User.resetDefaultSecondaryRoles"></a>

```java
public void resetDefaultSecondaryRoles()
```

##### `resetDefaultWarehouse` <a name="resetDefaultWarehouse" id="@cdktf/provider-snowflake.user.User.resetDefaultWarehouse"></a>

```java
public void resetDefaultWarehouse()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-snowflake.user.User.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-snowflake.user.User.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-snowflake.user.User.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-snowflake.user.User.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.user.User.resetId"></a>

```java
public void resetId()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-snowflake.user.User.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetLoginName` <a name="resetLoginName" id="@cdktf/provider-snowflake.user.User.resetLoginName"></a>

```java
public void resetLoginName()
```

##### `resetMustChangePassword` <a name="resetMustChangePassword" id="@cdktf/provider-snowflake.user.User.resetMustChangePassword"></a>

```java
public void resetMustChangePassword()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-snowflake.user.User.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRsaPublicKey` <a name="resetRsaPublicKey" id="@cdktf/provider-snowflake.user.User.resetRsaPublicKey"></a>

```java
public void resetRsaPublicKey()
```

##### `resetRsaPublicKey2` <a name="resetRsaPublicKey2" id="@cdktf/provider-snowflake.user.User.resetRsaPublicKey2"></a>

```java
public void resetRsaPublicKey2()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.user.User.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user.User;

User.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.user.User.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user.User;

User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.hasRsaPublicKey">hasRsaPublicKey</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultNamespaceInput">defaultNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultRoleInput">defaultRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultSecondaryRolesInput">defaultSecondaryRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultWarehouseInput">defaultWarehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.loginNameInput">loginNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.mustChangePasswordInput">mustChangePasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey2Input">rsaPublicKey2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKeyInput">rsaPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultNamespace">defaultNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultSecondaryRoles">defaultSecondaryRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultWarehouse">defaultWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.loginName">loginName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.mustChangePassword">mustChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey">rsaPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey2">rsaPublicKey2</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hasRsaPublicKey`<sup>Required</sup> <a name="hasRsaPublicKey" id="@cdktf/provider-snowflake.user.User.property.hasRsaPublicKey"></a>

```java
public IResolvable getHasRsaPublicKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.user.User.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `defaultNamespaceInput`<sup>Optional</sup> <a name="defaultNamespaceInput" id="@cdktf/provider-snowflake.user.User.property.defaultNamespaceInput"></a>

```java
public java.lang.String getDefaultNamespaceInput();
```

- *Type:* java.lang.String

---

##### `defaultRoleInput`<sup>Optional</sup> <a name="defaultRoleInput" id="@cdktf/provider-snowflake.user.User.property.defaultRoleInput"></a>

```java
public java.lang.String getDefaultRoleInput();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryRolesInput`<sup>Optional</sup> <a name="defaultSecondaryRolesInput" id="@cdktf/provider-snowflake.user.User.property.defaultSecondaryRolesInput"></a>

```java
public java.util.List<java.lang.String> getDefaultSecondaryRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultWarehouseInput`<sup>Optional</sup> <a name="defaultWarehouseInput" id="@cdktf/provider-snowflake.user.User.property.defaultWarehouseInput"></a>

```java
public java.lang.String getDefaultWarehouseInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-snowflake.user.User.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-snowflake.user.User.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-snowflake.user.User.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-snowflake.user.User.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.user.User.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-snowflake.user.User.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `loginNameInput`<sup>Optional</sup> <a name="loginNameInput" id="@cdktf/provider-snowflake.user.User.property.loginNameInput"></a>

```java
public java.lang.String getLoginNameInput();
```

- *Type:* java.lang.String

---

##### `mustChangePasswordInput`<sup>Optional</sup> <a name="mustChangePasswordInput" id="@cdktf/provider-snowflake.user.User.property.mustChangePasswordInput"></a>

```java
public java.lang.Object getMustChangePasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.user.User.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-snowflake.user.User.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `rsaPublicKey2Input`<sup>Optional</sup> <a name="rsaPublicKey2Input" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey2Input"></a>

```java
public java.lang.String getRsaPublicKey2Input();
```

- *Type:* java.lang.String

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="rsaPublicKeyInput" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKeyInput"></a>

```java
public java.lang.String getRsaPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.user.User.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `defaultNamespace`<sup>Required</sup> <a name="defaultNamespace" id="@cdktf/provider-snowflake.user.User.property.defaultNamespace"></a>

```java
public java.lang.String getDefaultNamespace();
```

- *Type:* java.lang.String

---

##### `defaultRole`<sup>Required</sup> <a name="defaultRole" id="@cdktf/provider-snowflake.user.User.property.defaultRole"></a>

```java
public java.lang.String getDefaultRole();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryRoles`<sup>Required</sup> <a name="defaultSecondaryRoles" id="@cdktf/provider-snowflake.user.User.property.defaultSecondaryRoles"></a>

```java
public java.util.List<java.lang.String> getDefaultSecondaryRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultWarehouse`<sup>Required</sup> <a name="defaultWarehouse" id="@cdktf/provider-snowflake.user.User.property.defaultWarehouse"></a>

```java
public java.lang.String getDefaultWarehouse();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.User.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-snowflake.user.User.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.user.User.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-snowflake.user.User.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-snowflake.user.User.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `loginName`<sup>Required</sup> <a name="loginName" id="@cdktf/provider-snowflake.user.User.property.loginName"></a>

```java
public java.lang.String getLoginName();
```

- *Type:* java.lang.String

---

##### `mustChangePassword`<sup>Required</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.user.User.property.mustChangePassword"></a>

```java
public java.lang.Object getMustChangePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.User.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.user.User.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `rsaPublicKey`<sup>Required</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey"></a>

```java
public java.lang.String getRsaPublicKey();
```

- *Type:* java.lang.String

---

##### `rsaPublicKey2`<sup>Required</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey2"></a>

```java
public java.lang.String getRsaPublicKey2();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-snowflake.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.user.UserConfig;

UserConfig.builder()
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
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .defaultNamespace(java.lang.String)
//  .defaultRole(java.lang.String)
//  .defaultSecondaryRoles(java.util.List<java.lang.String>)
//  .defaultWarehouse(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .displayName(java.lang.String)
//  .email(java.lang.String)
//  .firstName(java.lang.String)
//  .id(java.lang.String)
//  .lastName(java.lang.String)
//  .loginName(java.lang.String)
//  .mustChangePassword(java.lang.Boolean)
//  .mustChangePassword(IResolvable)
//  .password(java.lang.String)
//  .rsaPublicKey(java.lang.String)
//  .rsaPublicKey2(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#comment User#comment}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultNamespace">defaultNamespace</a></code> | <code>java.lang.String</code> | Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultRole">defaultRole</a></code> | <code>java.lang.String</code> | Specifies the role that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultSecondaryRoles">defaultSecondaryRoles</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the set of secondary roles that are active for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultWarehouse">defaultWarehouse</a></code> | <code>java.lang.String</code> | Specifies the virtual warehouse that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#disabled User#disabled}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Name displayed for the user in the Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.email">email</a></code> | <code>java.lang.String</code> | Email address for the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | First name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.loginName">loginName</a></code> | <code>java.lang.String</code> | The name users use to log in. If not supplied, snowflake will use name instead. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.mustChangePassword">mustChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.password">password</a></code> | <code>java.lang.String</code> | **WARNING:** this will put the password in the terraform state file. Use carefully. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey">rsaPublicKey</a></code> | <code>java.lang.String</code> | Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey2">rsaPublicKey2</a></code> | <code>java.lang.String</code> | Specifies the user’s second RSA public key; |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.UserConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#name User#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.user.UserConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#comment User#comment}.

---

##### `defaultNamespace`<sup>Optional</sup> <a name="defaultNamespace" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultNamespace"></a>

```java
public java.lang.String getDefaultNamespace();
```

- *Type:* java.lang.String

Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_namespace User#default_namespace}

---

##### `defaultRole`<sup>Optional</sup> <a name="defaultRole" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultRole"></a>

```java
public java.lang.String getDefaultRole();
```

- *Type:* java.lang.String

Specifies the role that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_role User#default_role}

---

##### `defaultSecondaryRoles`<sup>Optional</sup> <a name="defaultSecondaryRoles" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultSecondaryRoles"></a>

```java
public java.util.List<java.lang.String> getDefaultSecondaryRoles();
```

- *Type:* java.util.List<java.lang.String>

Specifies the set of secondary roles that are active for the user’s session upon login.

Currently only ["ALL"] value is supported - more information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_secondary_roles User#default_secondary_roles}

---

##### `defaultWarehouse`<sup>Optional</sup> <a name="defaultWarehouse" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultWarehouse"></a>

```java
public java.lang.String getDefaultWarehouse();
```

- *Type:* java.lang.String

Specifies the virtual warehouse that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#default_warehouse User#default_warehouse}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.UserConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#disabled User#disabled}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-snowflake.user.UserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Name displayed for the user in the Snowflake web interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#display_name User#display_name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-snowflake.user.UserConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#email User#email}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-snowflake.user.UserConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#first_name User#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.user.UserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-snowflake.user.UserConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#last_name User#last_name}

---

##### `loginName`<sup>Optional</sup> <a name="loginName" id="@cdktf/provider-snowflake.user.UserConfig.property.loginName"></a>

```java
public java.lang.String getLoginName();
```

- *Type:* java.lang.String

The name users use to log in. If not supplied, snowflake will use name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#login_name User#login_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.user.UserConfig.property.mustChangePassword"></a>

```java
public java.lang.Object getMustChangePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#must_change_password User#must_change_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.user.UserConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

**WARNING:** this will put the password in the terraform state file. Use carefully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#password User#password}

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="rsaPublicKey" id="@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey"></a>

```java
public java.lang.String getRsaPublicKey();
```

- *Type:* java.lang.String

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#rsa_public_key User#rsa_public_key}

---

##### `rsaPublicKey2`<sup>Optional</sup> <a name="rsaPublicKey2" id="@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey2"></a>

```java
public java.lang.String getRsaPublicKey2();
```

- *Type:* java.lang.String

Specifies the user’s second RSA public key;

used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.1/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}

---



