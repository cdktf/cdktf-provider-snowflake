# `account` Submodule <a name="`account` Submodule" id="@cdktf/provider-snowflake.account"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Account <a name="Account" id="@cdktf/provider-snowflake.account.Account"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.Account.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.Account;

Account.Builder.create(Construct scope, java.lang.String id)
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
    .adminName(java.lang.String)
    .edition(java.lang.String)
    .email(java.lang.String)
    .gracePeriodInDays(java.lang.Number)
    .name(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminRsaPublicKey(java.lang.String)
//  .adminUserType(java.lang.String)
//  .comment(java.lang.String)
//  .firstName(java.lang.String)
//  .id(java.lang.String)
//  .isOrgAdmin(java.lang.String)
//  .lastName(java.lang.String)
//  .mustChangePassword(java.lang.String)
//  .region(java.lang.String)
//  .regionGroup(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminName">adminName</a></code> | <code>java.lang.String</code> | Login name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Snowflake Edition of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.gracePeriodInDays">gracePeriodInDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days during which the account can be restored (“undropped”). |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminRsaPublicKey">adminRsaPublicKey</a></code> | <code>java.lang.String</code> | Assigns a public key to the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminUserType">adminUserType</a></code> | <code>java.lang.String</code> | Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.firstName">firstName</a></code> | <code>java.lang.String</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.isOrgAdmin">isOrgAdmin</a></code> | <code>java.lang.String</code> | Sets an account property that determines whether the ORGADMIN role is enabled in the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.mustChangePassword">mustChangePassword</a></code> | <code>java.lang.String</code> | Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | [Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.). |
| <code><a href="#@cdktf/provider-snowflake.account.Account.Initializer.parameter.regionGroup">regionGroup</a></code> | <code>java.lang.String</code> | ID of the region group where the account is created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminName`<sup>Required</sup> <a name="adminName" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminName"></a>

- *Type:* java.lang.String

Login name of the initial administrative user of the account.

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Snowflake Edition of the account.

See more about Snowflake Editions in the [official documentation](https://docs.snowflake.com/en/user-guide/intro-editions). Valid options are: `STANDARD` | `ENTERPRISE` | `BUSINESS_CRITICAL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#email Account#email}

---

##### `gracePeriodInDays`<sup>Required</sup> <a name="gracePeriodInDays" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.gracePeriodInDays"></a>

- *Type:* java.lang.Number

Specifies the number of days during which the account can be restored (“undropped”).

The minimum is 3 days and the maximum is 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#grace_period_in_days Account#grace_period_in_days}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#name Account#name}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

Password for the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_password Account#admin_password}

---

##### `adminRsaPublicKey`<sup>Optional</sup> <a name="adminRsaPublicKey" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminRsaPublicKey"></a>

- *Type:* java.lang.String

Assigns a public key to the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `adminUserType`<sup>Optional</sup> <a name="adminUserType" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.adminUserType"></a>

- *Type:* java.lang.String

Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation.

Valid options are: `PERSON` | `SERVICE` | `LEGACY_SERVICE` External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_user_type Account#admin_user_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#comment Account#comment}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.firstName"></a>

- *Type:* java.lang.String

First name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOrgAdmin`<sup>Optional</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.isOrgAdmin"></a>

- *Type:* java.lang.String

Sets an account property that determines whether the ORGADMIN role is enabled in the account.

Only an organization administrator (i.e. user with the ORGADMIN role) can set the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#is_org_admin Account#is_org_admin}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.lastName"></a>

- *Type:* java.lang.String

Last name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#last_name Account#last_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.mustChangePassword"></a>

- *Type:* java.lang.String

Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.region"></a>

- *Type:* java.lang.String

[Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#region Account#region}

---

##### `regionGroup`<sup>Optional</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.Account.Initializer.parameter.regionGroup"></a>

- *Type:* java.lang.String

ID of the region group where the account is created.

To retrieve the region group ID for existing accounts in your organization, execute the [SHOW REGIONS](https://docs.snowflake.com/en/sql-reference/sql/show-regions) command. For information about when you might need to specify region group, see [Region groups](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-region-groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#region_group Account#region_group}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey">resetAdminRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetAdminUserType">resetAdminUserType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetIsOrgAdmin">resetIsOrgAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetMustChangePassword">resetMustChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.resetRegionGroup">resetRegionGroup</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.Account.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.account.Account.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.account.Account.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.account.Account.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.account.Account.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.account.Account.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.account.Account.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.account.Account.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.account.Account.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.account.Account.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.account.Account.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.account.Account.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.account.Account.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.account.Account.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.account.Account.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.account.Account.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.account.Account.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.account.Account.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.account.Account.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.Account.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.account.Account.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.account.Account.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.account.Account.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.account.Account.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.account.Account.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-snowflake.account.Account.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminRsaPublicKey` <a name="resetAdminRsaPublicKey" id="@cdktf/provider-snowflake.account.Account.resetAdminRsaPublicKey"></a>

```java
public void resetAdminRsaPublicKey()
```

##### `resetAdminUserType` <a name="resetAdminUserType" id="@cdktf/provider-snowflake.account.Account.resetAdminUserType"></a>

```java
public void resetAdminUserType()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.account.Account.resetComment"></a>

```java
public void resetComment()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-snowflake.account.Account.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.account.Account.resetId"></a>

```java
public void resetId()
```

##### `resetIsOrgAdmin` <a name="resetIsOrgAdmin" id="@cdktf/provider-snowflake.account.Account.resetIsOrgAdmin"></a>

```java
public void resetIsOrgAdmin()
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-snowflake.account.Account.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetMustChangePassword` <a name="resetMustChangePassword" id="@cdktf/provider-snowflake.account.Account.resetMustChangePassword"></a>

```java
public void resetMustChangePassword()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-snowflake.account.Account.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRegionGroup` <a name="resetRegionGroup" id="@cdktf/provider-snowflake.account.Account.resetRegionGroup"></a>

```java
public void resetRegionGroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.account.Account.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.Account;

Account.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.account.Account.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.Account;

Account.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.account.Account.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.Account;

Account.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.account.Account.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.Account;

Account.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Account.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Account to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Account that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Account to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList">AccountShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminNameInput">adminNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput">adminRsaPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminUserTypeInput">adminUserTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.gracePeriodInDaysInput">gracePeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdminInput">isOrgAdminInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput">mustChangePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroupInput">regionGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminName">adminName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey">adminRsaPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.adminUserType">adminUserType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.gracePeriodInDays">gracePeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.isOrgAdmin">isOrgAdmin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.mustChangePassword">mustChangePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.regionGroup">regionGroup</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.account.Account.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.account.Account.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.Account.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.account.Account.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.account.Account.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.account.Account.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.account.Account.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.Account.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.Account.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.account.Account.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.account.Account.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.Account.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.Account.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.Account.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.account.Account.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.account.Account.property.showOutput"></a>

```java
public AccountShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountShowOutputList">AccountShowOutputList</a>

---

##### `adminNameInput`<sup>Optional</sup> <a name="adminNameInput" id="@cdktf/provider-snowflake.account.Account.property.adminNameInput"></a>

```java
public java.lang.String getAdminNameInput();
```

- *Type:* java.lang.String

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-snowflake.account.Account.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminRsaPublicKeyInput`<sup>Optional</sup> <a name="adminRsaPublicKeyInput" id="@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKeyInput"></a>

```java
public java.lang.String getAdminRsaPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `adminUserTypeInput`<sup>Optional</sup> <a name="adminUserTypeInput" id="@cdktf/provider-snowflake.account.Account.property.adminUserTypeInput"></a>

```java
public java.lang.String getAdminUserTypeInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.account.Account.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-snowflake.account.Account.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-snowflake.account.Account.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-snowflake.account.Account.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `gracePeriodInDaysInput`<sup>Optional</sup> <a name="gracePeriodInDaysInput" id="@cdktf/provider-snowflake.account.Account.property.gracePeriodInDaysInput"></a>

```java
public java.lang.Number getGracePeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.account.Account.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isOrgAdminInput`<sup>Optional</sup> <a name="isOrgAdminInput" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdminInput"></a>

```java
public java.lang.String getIsOrgAdminInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-snowflake.account.Account.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `mustChangePasswordInput`<sup>Optional</sup> <a name="mustChangePasswordInput" id="@cdktf/provider-snowflake.account.Account.property.mustChangePasswordInput"></a>

```java
public java.lang.String getMustChangePasswordInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.account.Account.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionGroupInput`<sup>Optional</sup> <a name="regionGroupInput" id="@cdktf/provider-snowflake.account.Account.property.regionGroupInput"></a>

```java
public java.lang.String getRegionGroupInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-snowflake.account.Account.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `adminName`<sup>Required</sup> <a name="adminName" id="@cdktf/provider-snowflake.account.Account.property.adminName"></a>

```java
public java.lang.String getAdminName();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-snowflake.account.Account.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminRsaPublicKey`<sup>Required</sup> <a name="adminRsaPublicKey" id="@cdktf/provider-snowflake.account.Account.property.adminRsaPublicKey"></a>

```java
public java.lang.String getAdminRsaPublicKey();
```

- *Type:* java.lang.String

---

##### `adminUserType`<sup>Required</sup> <a name="adminUserType" id="@cdktf/provider-snowflake.account.Account.property.adminUserType"></a>

```java
public java.lang.String getAdminUserType();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.account.Account.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.Account.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.Account.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-snowflake.account.Account.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `gracePeriodInDays`<sup>Required</sup> <a name="gracePeriodInDays" id="@cdktf/provider-snowflake.account.Account.property.gracePeriodInDays"></a>

```java
public java.lang.Number getGracePeriodInDays();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.account.Account.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isOrgAdmin`<sup>Required</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.Account.property.isOrgAdmin"></a>

```java
public java.lang.String getIsOrgAdmin();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-snowflake.account.Account.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `mustChangePassword`<sup>Required</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.account.Account.property.mustChangePassword"></a>

```java
public java.lang.String getMustChangePassword();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.Account.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-snowflake.account.Account.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.Account.property.regionGroup"></a>

```java
public java.lang.String getRegionGroup();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.Account.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.account.Account.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountConfig <a name="AccountConfig" id="@cdktf/provider-snowflake.account.AccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.AccountConfig;

AccountConfig.builder()
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
    .adminName(java.lang.String)
    .edition(java.lang.String)
    .email(java.lang.String)
    .gracePeriodInDays(java.lang.Number)
    .name(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminRsaPublicKey(java.lang.String)
//  .adminUserType(java.lang.String)
//  .comment(java.lang.String)
//  .firstName(java.lang.String)
//  .id(java.lang.String)
//  .isOrgAdmin(java.lang.String)
//  .lastName(java.lang.String)
//  .mustChangePassword(java.lang.String)
//  .region(java.lang.String)
//  .regionGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminName">adminName</a></code> | <code>java.lang.String</code> | Login name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Snowflake Edition of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.gracePeriodInDays">gracePeriodInDays</a></code> | <code>java.lang.Number</code> | Specifies the number of days during which the account can be restored (“undropped”). |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Password for the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey">adminRsaPublicKey</a></code> | <code>java.lang.String</code> | Assigns a public key to the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.adminUserType">adminUserType</a></code> | <code>java.lang.String</code> | Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.firstName">firstName</a></code> | <code>java.lang.String</code> | First name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#id Account#id}. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.isOrgAdmin">isOrgAdmin</a></code> | <code>java.lang.String</code> | Sets an account property that determines whether the ORGADMIN role is enabled in the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name of the initial administrative user of the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword">mustChangePassword</a></code> | <code>java.lang.String</code> | Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.region">region</a></code> | <code>java.lang.String</code> | [Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.). |
| <code><a href="#@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup">regionGroup</a></code> | <code>java.lang.String</code> | ID of the region group where the account is created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.account.AccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.account.AccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.account.AccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.account.AccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.account.AccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.account.AccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.account.AccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminName`<sup>Required</sup> <a name="adminName" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminName"></a>

```java
public java.lang.String getAdminName();
```

- *Type:* java.lang.String

Login name of the initial administrative user of the account.

A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_name Account#admin_name}

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Snowflake Edition of the account.

See more about Snowflake Editions in the [official documentation](https://docs.snowflake.com/en/user-guide/intro-editions). Valid options are: `STANDARD` | `ENTERPRISE` | `BUSINESS_CRITICAL`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#edition Account#edition}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.account.AccountConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the initial administrative user of the account.

This email address is used to send any notifications about the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#email Account#email}

---

##### `gracePeriodInDays`<sup>Required</sup> <a name="gracePeriodInDays" id="@cdktf/provider-snowflake.account.AccountConfig.property.gracePeriodInDays"></a>

```java
public java.lang.Number getGracePeriodInDays();
```

- *Type:* java.lang.Number

Specifies the number of days during which the account can be restored (“undropped”).

The minimum is 3 days and the maximum is 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#grace_period_in_days Account#grace_period_in_days}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.account.AccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#name Account#name}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Password for the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_password Account#admin_password}

---

##### `adminRsaPublicKey`<sup>Optional</sup> <a name="adminRsaPublicKey" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminRsaPublicKey"></a>

```java
public java.lang.String getAdminRsaPublicKey();
```

- *Type:* java.lang.String

Assigns a public key to the initial administrative user of the account.

Either admin_password or admin_rsa_public_key has to be specified. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}

---

##### `adminUserType`<sup>Optional</sup> <a name="adminUserType" id="@cdktf/provider-snowflake.account.AccountConfig.property.adminUserType"></a>

```java
public java.lang.String getAdminUserType();
```

- *Type:* java.lang.String

Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation.

Valid options are: `PERSON` | `SERVICE` | `LEGACY_SERVICE` External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#admin_user_type Account#admin_user_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#comment Account#comment}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-snowflake.account.AccountConfig.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

First name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#first_name Account#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.account.AccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#id Account#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOrgAdmin`<sup>Optional</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.AccountConfig.property.isOrgAdmin"></a>

```java
public java.lang.String getIsOrgAdmin();
```

- *Type:* java.lang.String

Sets an account property that determines whether the ORGADMIN role is enabled in the account.

Only an organization administrator (i.e. user with the ORGADMIN role) can set the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#is_org_admin Account#is_org_admin}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-snowflake.account.AccountConfig.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Last name of the initial administrative user of the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#last_name Account#last_name}

---

##### `mustChangePassword`<sup>Optional</sup> <a name="mustChangePassword" id="@cdktf/provider-snowflake.account.AccountConfig.property.mustChangePassword"></a>

```java
public java.lang.String getMustChangePassword();
```

- *Type:* java.lang.String

Specifies whether the new user created to administer the account is forced to change their password upon first login into the account.

This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#must_change_password Account#must_change_password}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.account.AccountConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

[Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#region Account#region}

---

##### `regionGroup`<sup>Optional</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.AccountConfig.property.regionGroup"></a>

```java
public java.lang.String getRegionGroup();
```

- *Type:* java.lang.String

ID of the region group where the account is created.

To retrieve the region group ID for existing accounts in your organization, execute the [SHOW REGIONS](https://docs.snowflake.com/en/sql-reference/sql/show-regions) command. For information about when you might need to specify region group, see [Region groups](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-region-groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/account#region_group Account#region_group}

---

### AccountShowOutput <a name="AccountShowOutput" id="@cdktf/provider-snowflake.account.AccountShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.account.AccountShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.AccountShowOutput;

AccountShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### AccountShowOutputList <a name="AccountShowOutputList" id="@cdktf/provider-snowflake.account.AccountShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.AccountShowOutputList;

new AccountShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.account.AccountShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.account.AccountShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.account.AccountShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.AccountShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.account.AccountShowOutputList.get"></a>

```java
public AccountShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.account.AccountShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.account.AccountShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AccountShowOutputOutputReference <a name="AccountShowOutputOutputReference" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.account.AccountShowOutputOutputReference;

new AccountShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocatorUrl">accountLocatorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlLastUsed">accountOldUrlLastUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlSavedOn">accountOldUrlSavedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountUrl">accountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.consumptionBillingEntityName">consumptionBillingEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.droppedOn">droppedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isEventsAccount">isEventsAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrgAdmin">isOrgAdmin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrganizationAccount">isOrganizationAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.managedAccounts">managedAccounts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">marketplaceConsumerBillingEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName">marketplaceProviderBillingEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedOn">movedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedToOrganization">movedToOrganization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.oldAccountUrl">oldAccountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrl">organizationOldUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlLastUsed">organizationOldUrlLastUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlSavedOn">organizationOldUrlSavedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationUrlExpirationOn">organizationUrlExpirationOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.regionGroup">regionGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.restoredOn">restoredOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.scheduledDeletionTime">scheduledDeletionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.account.AccountShowOutput">AccountShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocator"></a>

```java
public java.lang.String getAccountLocator();
```

- *Type:* java.lang.String

---

##### `accountLocatorUrl`<sup>Required</sup> <a name="accountLocatorUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountLocatorUrl"></a>

```java
public java.lang.String getAccountLocatorUrl();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `accountOldUrlLastUsed`<sup>Required</sup> <a name="accountOldUrlLastUsed" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```java
public java.lang.String getAccountOldUrlLastUsed();
```

- *Type:* java.lang.String

---

##### `accountOldUrlSavedOn`<sup>Required</sup> <a name="accountOldUrlSavedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```java
public java.lang.String getAccountOldUrlSavedOn();
```

- *Type:* java.lang.String

---

##### `accountUrl`<sup>Required</sup> <a name="accountUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.accountUrl"></a>

```java
public java.lang.String getAccountUrl();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `consumptionBillingEntityName`<sup>Required</sup> <a name="consumptionBillingEntityName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```java
public java.lang.String getConsumptionBillingEntityName();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `droppedOn`<sup>Required</sup> <a name="droppedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.droppedOn"></a>

```java
public java.lang.String getDroppedOn();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `isEventsAccount`<sup>Required</sup> <a name="isEventsAccount" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isEventsAccount"></a>

```java
public IResolvable getIsEventsAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOrgAdmin`<sup>Required</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrgAdmin"></a>

```java
public IResolvable getIsOrgAdmin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOrganizationAccount`<sup>Required</sup> <a name="isOrganizationAccount" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.isOrganizationAccount"></a>

```java
public IResolvable getIsOrganizationAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `managedAccounts`<sup>Required</sup> <a name="managedAccounts" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.managedAccounts"></a>

```java
public java.lang.Number getManagedAccounts();
```

- *Type:* java.lang.Number

---

##### `marketplaceConsumerBillingEntityName`<sup>Required</sup> <a name="marketplaceConsumerBillingEntityName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```java
public java.lang.String getMarketplaceConsumerBillingEntityName();
```

- *Type:* java.lang.String

---

##### `marketplaceProviderBillingEntityName`<sup>Required</sup> <a name="marketplaceProviderBillingEntityName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```java
public java.lang.String getMarketplaceProviderBillingEntityName();
```

- *Type:* java.lang.String

---

##### `movedOn`<sup>Required</sup> <a name="movedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedOn"></a>

```java
public java.lang.String getMovedOn();
```

- *Type:* java.lang.String

---

##### `movedToOrganization`<sup>Required</sup> <a name="movedToOrganization" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.movedToOrganization"></a>

```java
public java.lang.String getMovedToOrganization();
```

- *Type:* java.lang.String

---

##### `oldAccountUrl`<sup>Required</sup> <a name="oldAccountUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.oldAccountUrl"></a>

```java
public java.lang.String getOldAccountUrl();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `organizationOldUrl`<sup>Required</sup> <a name="organizationOldUrl" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrl"></a>

```java
public java.lang.String getOrganizationOldUrl();
```

- *Type:* java.lang.String

---

##### `organizationOldUrlLastUsed`<sup>Required</sup> <a name="organizationOldUrlLastUsed" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```java
public java.lang.String getOrganizationOldUrlLastUsed();
```

- *Type:* java.lang.String

---

##### `organizationOldUrlSavedOn`<sup>Required</sup> <a name="organizationOldUrlSavedOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```java
public java.lang.String getOrganizationOldUrlSavedOn();
```

- *Type:* java.lang.String

---

##### `organizationUrlExpirationOn`<sup>Required</sup> <a name="organizationUrlExpirationOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.organizationUrlExpirationOn"></a>

```java
public java.lang.String getOrganizationUrlExpirationOn();
```

- *Type:* java.lang.String

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.regionGroup"></a>

```java
public java.lang.String getRegionGroup();
```

- *Type:* java.lang.String

---

##### `restoredOn`<sup>Required</sup> <a name="restoredOn" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.restoredOn"></a>

```java
public java.lang.String getRestoredOn();
```

- *Type:* java.lang.String

---

##### `scheduledDeletionTime`<sup>Required</sup> <a name="scheduledDeletionTime" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.scheduledDeletionTime"></a>

```java
public java.lang.String getScheduledDeletionTime();
```

- *Type:* java.lang.String

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.snowflakeRegion"></a>

```java
public java.lang.String getSnowflakeRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.account.AccountShowOutputOutputReference.property.internalValue"></a>

```java
public AccountShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.account.AccountShowOutput">AccountShowOutput</a>

---



