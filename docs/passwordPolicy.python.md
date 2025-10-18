# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktf/provider-snowflake.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy snowflake_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  comment: str = None,
  history: typing.Union[int, float] = None,
  id: str = None,
  if_not_exists: bool | IResolvable = None,
  lockout_time_mins: typing.Union[int, float] = None,
  max_age_days: typing.Union[int, float] = None,
  max_length: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  min_age_days: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  min_lower_case_chars: typing.Union[int, float] = None,
  min_numeric_chars: typing.Union[int, float] = None,
  min_special_chars: typing.Union[int, float] = None,
  min_upper_case_chars: typing.Union[int, float] = None,
  or_replace: bool | IResolvable = None,
  timeouts: PasswordPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.database">database</a></code> | <code>str</code> | The database this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier for the password policy; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.history">history</a></code> | <code>typing.Union[int, float]</code> | (Default: `0`) Specifies the number of the most recent passwords that Snowflake stores. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.ifNotExists">if_not_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `false`) Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lockoutTimeMins">lockout_time_mins</a></code> | <code>typing.Union[int, float]</code> | (Default: `15`) Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxAgeDays">max_age_days</a></code> | <code>typing.Union[int, float]</code> | (Default: `90`) Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | (Default: `256`) Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | (Default: `5`) Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minAgeDays">min_age_days</a></code> | <code>typing.Union[int, float]</code> | (Default: `0`) Specifies the number of days the user must wait before a recently changed password can be changed again. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | (Default: `8`) Specifies the minimum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLowerCaseChars">min_lower_case_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of lowercase characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minNumericChars">min_numeric_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of numeric characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of special characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minUpperCaseChars">min_upper_case_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of uppercase characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.orReplace">or_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `false`) Whether to override a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.database"></a>

- *Type:* str

The database this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.name"></a>

- *Type:* str

Identifier for the password policy; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.schema"></a>

- *Type:* str

The schema this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.comment"></a>

- *Type:* str

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `history`<sup>Optional</sup> <a name="history" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.history"></a>

- *Type:* typing.Union[int, float]

(Default: `0`) Specifies the number of the most recent passwords that Snowflake stores.

These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history. Default: 0 Max: 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#history PasswordPolicy#history}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `if_not_exists`<sup>Optional</sup> <a name="if_not_exists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.ifNotExists"></a>

- *Type:* bool | cdktf.IResolvable

(Default: `false`) Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockout_time_mins`<sup>Optional</sup> <a name="lockout_time_mins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.lockoutTimeMins"></a>

- *Type:* typing.Union[int, float]

(Default: `15`) Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `max_age_days`<sup>Optional</sup> <a name="max_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxAgeDays"></a>

- *Type:* typing.Union[int, float]

(Default: `90`) Specifies the maximum number of days before the password must be changed.

Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

(Default: `256`) Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

(Default: `5`) Specifies the maximum number of attempts to enter a password before being locked out.

Supported range: 1 to 10, inclusive. Default: 5

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `min_age_days`<sup>Optional</sup> <a name="min_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minAgeDays"></a>

- *Type:* typing.Union[int, float]

(Default: `0`) Specifies the number of days the user must wait before a recently changed password can be changed again.

Supported range: 0 to 999, inclusive. Default: 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

(Default: `8`) Specifies the minimum number of characters the password must contain.

Supported range: 8 to 256, inclusive. Default: 8

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `min_lower_case_chars`<sup>Optional</sup> <a name="min_lower_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minLowerCaseChars"></a>

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of lowercase characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `min_numeric_chars`<sup>Optional</sup> <a name="min_numeric_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minNumericChars"></a>

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of numeric characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `min_special_chars`<sup>Optional</sup> <a name="min_special_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minSpecialChars"></a>

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of special characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `min_upper_case_chars`<sup>Optional</sup> <a name="min_upper_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.minUpperCaseChars"></a>

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of uppercase characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `or_replace`<sup>Optional</sup> <a name="or_replace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.orReplace"></a>

- *Type:* bool | cdktf.IResolvable

(Default: `false`) Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory">reset_history</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists">reset_if_not_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins">reset_lockout_time_mins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays">reset_max_age_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays">reset_min_age_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength">reset_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars">reset_min_lower_case_chars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars">reset_min_numeric_chars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars">reset_min_special_chars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars">reset_min_upper_case_chars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace">reset_or_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#create PasswordPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#delete PasswordPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#read PasswordPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#update PasswordPolicy#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_history` <a name="reset_history" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetHistory"></a>

```python
def reset_history() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_if_not_exists` <a name="reset_if_not_exists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetIfNotExists"></a>

```python
def reset_if_not_exists() -> None
```

##### `reset_lockout_time_mins` <a name="reset_lockout_time_mins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetLockoutTimeMins"></a>

```python
def reset_lockout_time_mins() -> None
```

##### `reset_max_age_days` <a name="reset_max_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxAgeDays"></a>

```python
def reset_max_age_days() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_min_age_days` <a name="reset_min_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinAgeDays"></a>

```python
def reset_min_age_days() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLength"></a>

```python
def reset_min_length() -> None
```

##### `reset_min_lower_case_chars` <a name="reset_min_lower_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinLowerCaseChars"></a>

```python
def reset_min_lower_case_chars() -> None
```

##### `reset_min_numeric_chars` <a name="reset_min_numeric_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinNumericChars"></a>

```python
def reset_min_numeric_chars() -> None
```

##### `reset_min_special_chars` <a name="reset_min_special_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinSpecialChars"></a>

```python
def reset_min_special_chars() -> None
```

##### `reset_min_upper_case_chars` <a name="reset_min_upper_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetMinUpperCaseChars"></a>

```python
def reset_min_upper_case_chars() -> None
```

##### `reset_or_replace` <a name="reset_or_replace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetOrReplace"></a>

```python
def reset_or_replace() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicy.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PasswordPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput">history_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput">if_not_exists_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput">lockout_time_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput">max_age_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput">min_age_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput">min_lower_case_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput">min_numeric_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput">min_special_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput">min_upper_case_chars_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput">or_replace_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.history">history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists">if_not_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins">lockout_time_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays">max_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays">min_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars">min_lower_case_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars">min_numeric_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars">min_upper_case_chars</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace">or_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeouts"></a>

```python
timeouts: PasswordPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference">PasswordPolicyTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `history_input`<sup>Optional</sup> <a name="history_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.historyInput"></a>

```python
history_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `if_not_exists_input`<sup>Optional</sup> <a name="if_not_exists_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExistsInput"></a>

```python
if_not_exists_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `lockout_time_mins_input`<sup>Optional</sup> <a name="lockout_time_mins_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMinsInput"></a>

```python
lockout_time_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_age_days_input`<sup>Optional</sup> <a name="max_age_days_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDaysInput"></a>

```python
max_age_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_age_days_input`<sup>Optional</sup> <a name="min_age_days_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDaysInput"></a>

```python
min_age_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_lower_case_chars_input`<sup>Optional</sup> <a name="min_lower_case_chars_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseCharsInput"></a>

```python
min_lower_case_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numeric_chars_input`<sup>Optional</sup> <a name="min_numeric_chars_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericCharsInput"></a>

```python
min_numeric_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_chars_input`<sup>Optional</sup> <a name="min_special_chars_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialCharsInput"></a>

```python
min_special_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_case_chars_input`<sup>Optional</sup> <a name="min_upper_case_chars_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseCharsInput"></a>

```python
min_upper_case_chars_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `or_replace_input`<sup>Optional</sup> <a name="or_replace_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplaceInput"></a>

```python
or_replace_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PasswordPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `history`<sup>Required</sup> <a name="history" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.history"></a>

```python
history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `if_not_exists`<sup>Required</sup> <a name="if_not_exists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.ifNotExists"></a>

```python
if_not_exists: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `lockout_time_mins`<sup>Required</sup> <a name="lockout_time_mins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.lockoutTimeMins"></a>

```python
lockout_time_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_age_days`<sup>Required</sup> <a name="max_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxAgeDays"></a>

```python
max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_age_days`<sup>Required</sup> <a name="min_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minAgeDays"></a>

```python
min_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_lower_case_chars`<sup>Required</sup> <a name="min_lower_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minLowerCaseChars"></a>

```python
min_lower_case_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_numeric_chars`<sup>Required</sup> <a name="min_numeric_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minNumericChars"></a>

```python
min_numeric_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_special_chars`<sup>Required</sup> <a name="min_special_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minSpecialChars"></a>

```python
min_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_upper_case_chars`<sup>Required</sup> <a name="min_upper_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.minUpperCaseChars"></a>

```python
min_upper_case_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `or_replace`<sup>Required</sup> <a name="or_replace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.orReplace"></a>

```python
or_replace: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  comment: str = None,
  history: typing.Union[int, float] = None,
  id: str = None,
  if_not_exists: bool | IResolvable = None,
  lockout_time_mins: typing.Union[int, float] = None,
  max_age_days: typing.Union[int, float] = None,
  max_length: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  min_age_days: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None,
  min_lower_case_chars: typing.Union[int, float] = None,
  min_numeric_chars: typing.Union[int, float] = None,
  min_special_chars: typing.Union[int, float] = None,
  min_upper_case_chars: typing.Union[int, float] = None,
  or_replace: bool | IResolvable = None,
  timeouts: PasswordPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database">database</a></code> | <code>str</code> | The database this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name">name</a></code> | <code>str</code> | Identifier for the password policy; must be unique for your account. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema">schema</a></code> | <code>str</code> | The schema this password policy belongs to. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment">comment</a></code> | <code>str</code> | Adds a comment or overwrites an existing comment for the password policy. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history">history</a></code> | <code>typing.Union[int, float]</code> | (Default: `0`) Specifies the number of the most recent passwords that Snowflake stores. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists">if_not_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `false`) Prevent overwriting a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins">lockout_time_mins</a></code> | <code>typing.Union[int, float]</code> | (Default: `15`) Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays">max_age_days</a></code> | <code>typing.Union[int, float]</code> | (Default: `90`) Specifies the maximum number of days before the password must be changed. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | (Default: `256`) Specifies the maximum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | (Default: `5`) Specifies the maximum number of attempts to enter a password before being locked out. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays">min_age_days</a></code> | <code>typing.Union[int, float]</code> | (Default: `0`) Specifies the number of days the user must wait before a recently changed password can be changed again. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | (Default: `8`) Specifies the minimum number of characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars">min_lower_case_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of lowercase characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars">min_numeric_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of numeric characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars">min_special_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of special characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars">min_upper_case_chars</a></code> | <code>typing.Union[int, float]</code> | (Default: `1`) Specifies the minimum number of uppercase characters the password must contain. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace">or_replace</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `false`) Whether to override a previous password policy with the same name. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#database PasswordPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier for the password policy; must be unique for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#name PasswordPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema this password policy belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#schema PasswordPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Adds a comment or overwrites an existing comment for the password policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#comment PasswordPolicy#comment}

---

##### `history`<sup>Optional</sup> <a name="history" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.history"></a>

```python
history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `0`) Specifies the number of the most recent passwords that Snowflake stores.

These stored passwords cannot be repeated when a user updates their password value. The current password value does not count towards the history. When you increase the history value, Snowflake saves the previous values. When you decrease the value, Snowflake saves the stored values up to that value that is set. For example, if the history value is 8 and you change the history value to 3, Snowflake stores the most recent 3 passwords and deletes the 5 older password values from the history. Default: 0 Max: 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#history PasswordPolicy#history}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `if_not_exists`<sup>Optional</sup> <a name="if_not_exists" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.ifNotExists"></a>

```python
if_not_exists: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

(Default: `false`) Prevent overwriting a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#if_not_exists PasswordPolicy#if_not_exists}

---

##### `lockout_time_mins`<sup>Optional</sup> <a name="lockout_time_mins" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.lockoutTimeMins"></a>

```python
lockout_time_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `15`) Specifies the number of minutes the user account will be locked after exhausting the designated number of password retries (i.e. PASSWORD_MAX_RETRIES). Supported range: 1 to 999, inclusive. Default: 15.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#lockout_time_mins PasswordPolicy#lockout_time_mins}

---

##### `max_age_days`<sup>Optional</sup> <a name="max_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxAgeDays"></a>

```python
max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `90`) Specifies the maximum number of days before the password must be changed.

Supported range: 0 to 999, inclusive. A value of zero (i.e. 0) indicates that the password does not need to be changed. Snowflake does not recommend choosing this value for a default account-level password policy or for any user-level policy. Instead, choose a value that meets your internal security guidelines. Default: 90, which means the password must be changed every 90 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#max_age_days PasswordPolicy#max_age_days}

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `256`) Specifies the maximum number of characters the password must contain.

This number must be greater than or equal to the sum of PASSWORD_MIN_LENGTH, PASSWORD_MIN_UPPER_CASE_CHARS, and PASSWORD_MIN_LOWER_CASE_CHARS. Supported range: 8 to 256, inclusive. Default: 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#max_length PasswordPolicy#max_length}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `5`) Specifies the maximum number of attempts to enter a password before being locked out.

Supported range: 1 to 10, inclusive. Default: 5

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#max_retries PasswordPolicy#max_retries}

---

##### `min_age_days`<sup>Optional</sup> <a name="min_age_days" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minAgeDays"></a>

```python
min_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `0`) Specifies the number of days the user must wait before a recently changed password can be changed again.

Supported range: 0 to 999, inclusive. Default: 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_age_days PasswordPolicy#min_age_days}

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `8`) Specifies the minimum number of characters the password must contain.

Supported range: 8 to 256, inclusive. Default: 8

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_length PasswordPolicy#min_length}

---

##### `min_lower_case_chars`<sup>Optional</sup> <a name="min_lower_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minLowerCaseChars"></a>

```python
min_lower_case_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of lowercase characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_lower_case_chars PasswordPolicy#min_lower_case_chars}

---

##### `min_numeric_chars`<sup>Optional</sup> <a name="min_numeric_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minNumericChars"></a>

```python
min_numeric_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of numeric characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_numeric_chars PasswordPolicy#min_numeric_chars}

---

##### `min_special_chars`<sup>Optional</sup> <a name="min_special_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minSpecialChars"></a>

```python
min_special_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of special characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_special_chars PasswordPolicy#min_special_chars}

---

##### `min_upper_case_chars`<sup>Optional</sup> <a name="min_upper_case_chars" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.minUpperCaseChars"></a>

```python
min_upper_case_chars: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: `1`) Specifies the minimum number of uppercase characters the password must contain.

Supported range: 0 to 256, inclusive. Default: 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#min_upper_case_chars PasswordPolicy#min_upper_case_chars}

---

##### `or_replace`<sup>Optional</sup> <a name="or_replace" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.orReplace"></a>

```python
or_replace: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

(Default: `false`) Whether to override a previous password policy with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#or_replace PasswordPolicy#or_replace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyConfig.property.timeouts"></a>

```python
timeouts: PasswordPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#timeouts PasswordPolicy#timeouts}

---

### PasswordPolicyTimeouts <a name="PasswordPolicyTimeouts" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#create PasswordPolicy#create}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#delete PasswordPolicy#delete}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#read PasswordPolicy#read}. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#update PasswordPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#create PasswordPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#delete PasswordPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#read PasswordPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/password_policy#update PasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PasswordPolicyTimeoutsOutputReference <a name="PasswordPolicyTimeoutsOutputReference" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import password_policy

passwordPolicy.PasswordPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PasswordPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.passwordPolicy.PasswordPolicyTimeouts">PasswordPolicyTimeouts</a>

---



