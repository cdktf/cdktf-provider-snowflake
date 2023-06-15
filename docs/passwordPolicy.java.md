# `snowflake_password_policy`

Refer to the Terraform Registory for docs: [`snowflake_password_policy`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy).

# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktf/provider-snowflake.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy snowflake_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .ifNotExists(java.lang.Boolean)
//  .ifNotExists(IResolvable)
//  .lockoutTimeMins(java.lang.Number)
//  .maxAgeDays(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minLowerCaseChars(java.lang.Number)
//  .minNumericChars(java.lang.Number)
//  .minSpecialChars(java.lang.Number)
//  .minUpperCaseChars(java.lang.Number)
//  .orReplace(java.lang.Boolean)
//  .orReplace(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier for the password policy; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lockoutTimeMins">lockoutTimeMins</a></code> | <code>java.lang.Number</code> | Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxAgeDays">maxAgeDays</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLength">minLength</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLowerCaseChars">minLowerCaseChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minNumericChars">minNumericChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minUpperCaseChars">minUpperCaseChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to override a previous password policy with the same name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier for the password policy; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.ifNotExists"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockoutTimeMins`<sup>Optional</sup> <a name="lockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lockoutTimeMins"></a>

- *Type:* java.lang.Number

Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `maxAgeDays`<sup>Optional</sup> <a name="maxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxAgeDays"></a>

- *Type:* java.lang.Number

Specifies the maximum number of days before the password must be changed.

Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxLength"></a>

- *Type:* java.lang.Number

Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Specifies the maximum number of attempts to enter a password before being locked out.

Supported range: 1 to 10, inclusive. Default: 5

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLength"></a>

- *Type:* java.lang.Number

Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `minLowerCaseChars`<sup>Optional</sup> <a name="minLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLowerCaseChars"></a>

- *Type:* java.lang.Number

Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `minNumericChars`<sup>Optional</sup> <a name="minNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minNumericChars"></a>

- *Type:* java.lang.Number

Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minSpecialChars"></a>

- *Type:* java.lang.Number

Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `minUpperCaseChars`<sup>Optional</sup> <a name="minUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minUpperCaseChars"></a>

- *Type:* java.lang.Number

Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.orReplace"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists">resetIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins">resetLockoutTimeMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays">resetMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars">resetMinLowerCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars">resetMinNumericChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars">resetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars">resetMinUpperCaseChars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace">resetOrReplace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIfNotExists` <a name="resetIfNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists"></a>

```java
public void resetIfNotExists()
```

##### `resetLockoutTimeMins` <a name="resetLockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins"></a>

```java
public void resetLockoutTimeMins()
```

##### `resetMaxAgeDays` <a name="resetMaxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays"></a>

```java
public void resetMaxAgeDays()
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetMinLowerCaseChars` <a name="resetMinLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars"></a>

```java
public void resetMinLowerCaseChars()
```

##### `resetMinNumericChars` <a name="resetMinNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars"></a>

```java
public void resetMinNumericChars()
```

##### `resetMinSpecialChars` <a name="resetMinSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars"></a>

```java
public void resetMinSpecialChars()
```

##### `resetMinUpperCaseChars` <a name="resetMinUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars"></a>

```java
public void resetMinUpperCaseChars()
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace"></a>

```java
public void resetOrReplace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.password_policy.PasswordPolicy;

PasswordPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput">ifNotExistsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput">lockoutTimeMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput">maxAgeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput">minLowerCaseCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput">minNumericCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput">minSpecialCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput">minUpperCaseCharsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput">orReplaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins">lockoutTimeMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays">maxAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars">minLowerCaseChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars">minNumericChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars">minUpperCaseChars</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="ifNotExistsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput"></a>

```java
public java.lang.Object getIfNotExistsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lockoutTimeMinsInput`<sup>Optional</sup> <a name="lockoutTimeMinsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput"></a>

```java
public java.lang.Number getLockoutTimeMinsInput();
```

- *Type:* java.lang.Number

---

##### `maxAgeDaysInput`<sup>Optional</sup> <a name="maxAgeDaysInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput"></a>

```java
public java.lang.Number getMaxAgeDaysInput();
```

- *Type:* java.lang.Number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput"></a>

```java
public java.lang.Number getMaxLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `minLowerCaseCharsInput`<sup>Optional</sup> <a name="minLowerCaseCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput"></a>

```java
public java.lang.Number getMinLowerCaseCharsInput();
```

- *Type:* java.lang.Number

---

##### `minNumericCharsInput`<sup>Optional</sup> <a name="minNumericCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput"></a>

```java
public java.lang.Number getMinNumericCharsInput();
```

- *Type:* java.lang.Number

---

##### `minSpecialCharsInput`<sup>Optional</sup> <a name="minSpecialCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput"></a>

```java
public java.lang.Number getMinSpecialCharsInput();
```

- *Type:* java.lang.Number

---

##### `minUpperCaseCharsInput`<sup>Optional</sup> <a name="minUpperCaseCharsInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput"></a>

```java
public java.lang.Number getMinUpperCaseCharsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput"></a>

```java
public java.lang.Object getOrReplaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ifNotExists`<sup>Required</sup> <a name="ifNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists"></a>

```java
public java.lang.Object getIfNotExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lockoutTimeMins`<sup>Required</sup> <a name="lockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins"></a>

```java
public java.lang.Number getLockoutTimeMins();
```

- *Type:* java.lang.Number

---

##### `maxAgeDays`<sup>Required</sup> <a name="maxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays"></a>

```java
public java.lang.Number getMaxAgeDays();
```

- *Type:* java.lang.Number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `minLowerCaseChars`<sup>Required</sup> <a name="minLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars"></a>

```java
public java.lang.Number getMinLowerCaseChars();
```

- *Type:* java.lang.Number

---

##### `minNumericChars`<sup>Required</sup> <a name="minNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars"></a>

```java
public java.lang.Number getMinNumericChars();
```

- *Type:* java.lang.Number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars"></a>

```java
public java.lang.Number getMinSpecialChars();
```

- *Type:* java.lang.Number

---

##### `minUpperCaseChars`<sup>Required</sup> <a name="minUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars"></a>

```java
public java.lang.Number getMinUpperCaseChars();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace"></a>

```java
public java.lang.Object getOrReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.password_policy.PasswordPolicyConfig;

PasswordPolicyConfig.builder()
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
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .ifNotExists(java.lang.Boolean)
//  .ifNotExists(IResolvable)
//  .lockoutTimeMins(java.lang.Number)
//  .maxAgeDays(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxRetries(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minLowerCaseChars(java.lang.Number)
//  .minNumericChars(java.lang.Number)
//  .minSpecialChars(java.lang.Number)
//  .minUpperCaseChars(java.lang.Number)
//  .orReplace(java.lang.Boolean)
//  .orReplace(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier for the password policy; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists">ifNotExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins">lockoutTimeMins</a></code> | <code>java.lang.Number</code> | Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays">maxAgeDays</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars">minLowerCaseChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars">minNumericChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars">minSpecialChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars">minUpperCaseChars</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace">orReplace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to override a previous password policy with the same name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier for the password policy; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ifNotExists`<sup>Optional</sup> <a name="ifNotExists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists"></a>

```java
public java.lang.Object getIfNotExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockoutTimeMins`<sup>Optional</sup> <a name="lockoutTimeMins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins"></a>

```java
public java.lang.Number getLockoutTimeMins();
```

- *Type:* java.lang.Number

Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `maxAgeDays`<sup>Optional</sup> <a name="maxAgeDays" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays"></a>

```java
public java.lang.Number getMaxAgeDays();
```

- *Type:* java.lang.Number

Specifies the maximum number of days before the password must be changed.

Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Specifies the maximum number of attempts to enter a password before being locked out.

Supported range: 1 to 10, inclusive. Default: 5

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

Specifies the minimum number of characters the password must contain. Supported range: 8 to 256, inclusive. Default: 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `minLowerCaseChars`<sup>Optional</sup> <a name="minLowerCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars"></a>

```java
public java.lang.Number getMinLowerCaseChars();
```

- *Type:* java.lang.Number

Specifies the minimum number of lowercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `minNumericChars`<sup>Optional</sup> <a name="minNumericChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars"></a>

```java
public java.lang.Number getMinNumericChars();
```

- *Type:* java.lang.Number

Specifies the minimum number of numeric characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars"></a>

```java
public java.lang.Number getMinSpecialChars();
```

- *Type:* java.lang.Number

Specifies the minimum number of special characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `minUpperCaseChars`<sup>Optional</sup> <a name="minUpperCaseChars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars"></a>

```java
public java.lang.Number getMinUpperCaseChars();
```

- *Type:* java.lang.Number

Specifies the minimum number of uppercase characters the password must contain. Supported range: 0 to 256, inclusive. Default: 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace"></a>

```java
public java.lang.Object getOrReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---



