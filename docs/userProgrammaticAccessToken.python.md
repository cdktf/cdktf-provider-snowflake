# `userProgrammaticAccessToken` Submodule <a name="`userProgrammaticAccessToken` Submodule" id="@cdktf/provider-snowflake.userProgrammaticAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserProgrammaticAccessToken <a name="UserProgrammaticAccessToken" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token snowflake_user_programmatic_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  user: str,
  comment: str = None,
  days_to_expiry: typing.Union[int, float] = None,
  disabled: str = None,
  expire_rotated_token_after_hours: typing.Union[int, float] = None,
  id: str = None,
  keeper: str = None,
  mins_to_bypass_network_policy_requirement: typing.Union[int, float] = None,
  role_restriction: str = None,
  timeouts: UserProgrammaticAccessTokenTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name for the programmatic access token; |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.user">user</a></code> | <code>str</code> | The name of the user that the token is associated with. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Descriptive comment about the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.daysToExpiry">days_to_expiry</a></code> | <code>typing.Union[int, float]</code> | The number of days that the programmatic access token can be used for authentication. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.disabled">disabled</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.expireRotatedTokenAfterHours">expire_rotated_token_after_hours</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.keeper">keeper</a></code> | <code>str</code> | Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.minsToBypassNetworkPolicyRequirement">mins_to_bypass_network_policy_requirement</a></code> | <code>typing.Union[int, float]</code> | The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.roleRestriction">role_restriction</a></code> | <code>str</code> | The name of the role used for privilege evaluation and object creation. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name for the programmatic access token;

must be unique for the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#name UserProgrammaticAccessToken#name}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.user"></a>

- *Type:* str

The name of the user that the token is associated with.

A user cannot use another user's programmatic access token to authenticate. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#user UserProgrammaticAccessToken#user}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.comment"></a>

- *Type:* str

Descriptive comment about the programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#comment UserProgrammaticAccessToken#comment}

---

##### `days_to_expiry`<sup>Optional</sup> <a name="days_to_expiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.daysToExpiry"></a>

- *Type:* typing.Union[int, float]

The number of days that the programmatic access token can be used for authentication.

This field cannot be altered after the token is created. Instead, you must rotate the token with the `keeper` field. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#days_to_expiry UserProgrammaticAccessToken#days_to_expiry}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.disabled"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#disabled UserProgrammaticAccessToken#disabled}

---

##### `expire_rotated_token_after_hours`<sup>Optional</sup> <a name="expire_rotated_token_after_hours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.expireRotatedTokenAfterHours"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field.

Sets the expiration time of the existing token secret to expire after the specified number of hours. You can set this to a value of 0 to expire the current token secret immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#expire_rotated_token_after_hours UserProgrammaticAccessToken#expire_rotated_token_after_hours}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keeper`<sup>Optional</sup> <a name="keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.keeper"></a>

- *Type:* str

Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated.

When you add this field to the configuration, or remove it from the configuration, the rotation is not triggered. When the token is rotated, the `token` and `rotated_token_name` fields are marked as computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#keeper UserProgrammaticAccessToken#keeper}

---

##### `mins_to_bypass_network_policy_requirement`<sup>Optional</sup> <a name="mins_to_bypass_network_policy_requirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.minsToBypassNetworkPolicyRequirement"></a>

- *Type:* typing.Union[int, float]

The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#mins_to_bypass_network_policy_requirement UserProgrammaticAccessToken#mins_to_bypass_network_policy_requirement}

---

##### `role_restriction`<sup>Optional</sup> <a name="role_restriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.roleRestriction"></a>

- *Type:* str

The name of the role used for privilege evaluation and object creation.

This must be one of the roles that has already been granted to the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#role_restriction UserProgrammaticAccessToken#role_restriction}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#timeouts UserProgrammaticAccessToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDaysToExpiry">reset_days_to_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetExpireRotatedTokenAfterHours">reset_expire_rotated_token_after_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetKeeper">reset_keeper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetMinsToBypassNetworkPolicyRequirement">reset_mins_to_bypass_network_policy_requirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetRoleRestriction">reset_role_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_days_to_expiry` <a name="reset_days_to_expiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDaysToExpiry"></a>

```python
def reset_days_to_expiry() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_expire_rotated_token_after_hours` <a name="reset_expire_rotated_token_after_hours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetExpireRotatedTokenAfterHours"></a>

```python
def reset_expire_rotated_token_after_hours() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keeper` <a name="reset_keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetKeeper"></a>

```python
def reset_keeper() -> None
```

##### `reset_mins_to_bypass_network_policy_requirement` <a name="reset_mins_to_bypass_network_policy_requirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetMinsToBypassNetworkPolicyRequirement"></a>

```python
def reset_mins_to_bypass_network_policy_requirement() -> None
```

##### `reset_role_restriction` <a name="reset_role_restriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetRoleRestriction"></a>

```python
def reset_role_restriction() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserProgrammaticAccessToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserProgrammaticAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserProgrammaticAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.rotatedTokenName">rotated_token_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList">UserProgrammaticAccessTokenShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference">UserProgrammaticAccessTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiryInput">days_to_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabledInput">disabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHoursInput">expire_rotated_token_after_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeperInput">keeper_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirementInput">mins_to_bypass_network_policy_requirement_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestrictionInput">role_restriction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiry">days_to_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabled">disabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHours">expire_rotated_token_after_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeper">keeper</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirement">mins_to_bypass_network_policy_requirement</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestriction">role_restriction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rotated_token_name`<sup>Required</sup> <a name="rotated_token_name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.rotatedTokenName"></a>

```python
rotated_token_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.showOutput"></a>

```python
show_output: UserProgrammaticAccessTokenShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList">UserProgrammaticAccessTokenShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeouts"></a>

```python
timeouts: UserProgrammaticAccessTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference">UserProgrammaticAccessTokenTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `days_to_expiry_input`<sup>Optional</sup> <a name="days_to_expiry_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiryInput"></a>

```python
days_to_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabledInput"></a>

```python
disabled_input: str
```

- *Type:* str

---

##### `expire_rotated_token_after_hours_input`<sup>Optional</sup> <a name="expire_rotated_token_after_hours_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHoursInput"></a>

```python
expire_rotated_token_after_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keeper_input`<sup>Optional</sup> <a name="keeper_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeperInput"></a>

```python
keeper_input: str
```

- *Type:* str

---

##### `mins_to_bypass_network_policy_requirement_input`<sup>Optional</sup> <a name="mins_to_bypass_network_policy_requirement_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirementInput"></a>

```python
mins_to_bypass_network_policy_requirement_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_restriction_input`<sup>Optional</sup> <a name="role_restriction_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestrictionInput"></a>

```python
role_restriction_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, UserProgrammaticAccessTokenTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `days_to_expiry`<sup>Required</sup> <a name="days_to_expiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.daysToExpiry"></a>

```python
days_to_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.disabled"></a>

```python
disabled: str
```

- *Type:* str

---

##### `expire_rotated_token_after_hours`<sup>Required</sup> <a name="expire_rotated_token_after_hours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.expireRotatedTokenAfterHours"></a>

```python
expire_rotated_token_after_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keeper`<sup>Required</sup> <a name="keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.keeper"></a>

```python
keeper: str
```

- *Type:* str

---

##### `mins_to_bypass_network_policy_requirement`<sup>Required</sup> <a name="mins_to_bypass_network_policy_requirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.minsToBypassNetworkPolicyRequirement"></a>

```python
mins_to_bypass_network_policy_requirement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_restriction`<sup>Required</sup> <a name="role_restriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.roleRestriction"></a>

```python
role_restriction: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserProgrammaticAccessTokenConfig <a name="UserProgrammaticAccessTokenConfig" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  user: str,
  comment: str = None,
  days_to_expiry: typing.Union[int, float] = None,
  disabled: str = None,
  expire_rotated_token_after_hours: typing.Union[int, float] = None,
  id: str = None,
  keeper: str = None,
  mins_to_bypass_network_policy_requirement: typing.Union[int, float] = None,
  role_restriction: str = None,
  timeouts: UserProgrammaticAccessTokenTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.name">name</a></code> | <code>str</code> | Specifies the name for the programmatic access token; |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.user">user</a></code> | <code>str</code> | The name of the user that the token is associated with. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.comment">comment</a></code> | <code>str</code> | Descriptive comment about the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.daysToExpiry">days_to_expiry</a></code> | <code>typing.Union[int, float]</code> | The number of days that the programmatic access token can be used for authentication. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.disabled">disabled</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.expireRotatedTokenAfterHours">expire_rotated_token_after_hours</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.keeper">keeper</a></code> | <code>str</code> | Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.minsToBypassNetworkPolicyRequirement">mins_to_bypass_network_policy_requirement</a></code> | <code>typing.Union[int, float]</code> | The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.roleRestriction">role_restriction</a></code> | <code>str</code> | The name of the role used for privilege evaluation and object creation. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name for the programmatic access token;

must be unique for the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#name UserProgrammaticAccessToken#name}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.user"></a>

```python
user: str
```

- *Type:* str

The name of the user that the token is associated with.

A user cannot use another user's programmatic access token to authenticate. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#user UserProgrammaticAccessToken#user}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Descriptive comment about the programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#comment UserProgrammaticAccessToken#comment}

---

##### `days_to_expiry`<sup>Optional</sup> <a name="days_to_expiry" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.daysToExpiry"></a>

```python
days_to_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days that the programmatic access token can be used for authentication.

This field cannot be altered after the token is created. Instead, you must rotate the token with the `keeper` field. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#days_to_expiry UserProgrammaticAccessToken#days_to_expiry}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.disabled"></a>

```python
disabled: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#disabled UserProgrammaticAccessToken#disabled}

---

##### `expire_rotated_token_after_hours`<sup>Optional</sup> <a name="expire_rotated_token_after_hours" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.expireRotatedTokenAfterHours"></a>

```python
expire_rotated_token_after_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field.

Sets the expiration time of the existing token secret to expire after the specified number of hours. You can set this to a value of 0 to expire the current token secret immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#expire_rotated_token_after_hours UserProgrammaticAccessToken#expire_rotated_token_after_hours}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keeper`<sup>Optional</sup> <a name="keeper" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.keeper"></a>

```python
keeper: str
```

- *Type:* str

Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated.

When you add this field to the configuration, or remove it from the configuration, the rotation is not triggered. When the token is rotated, the `token` and `rotated_token_name` fields are marked as computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#keeper UserProgrammaticAccessToken#keeper}

---

##### `mins_to_bypass_network_policy_requirement`<sup>Optional</sup> <a name="mins_to_bypass_network_policy_requirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.minsToBypassNetworkPolicyRequirement"></a>

```python
mins_to_bypass_network_policy_requirement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#mins_to_bypass_network_policy_requirement UserProgrammaticAccessToken#mins_to_bypass_network_policy_requirement}

---

##### `role_restriction`<sup>Optional</sup> <a name="role_restriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.roleRestriction"></a>

```python
role_restriction: str
```

- *Type:* str

The name of the role used for privilege evaluation and object creation.

This must be one of the roles that has already been granted to the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#role_restriction UserProgrammaticAccessToken#role_restriction}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenConfig.property.timeouts"></a>

```python
timeouts: UserProgrammaticAccessTokenTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#timeouts UserProgrammaticAccessToken#timeouts}

---

### UserProgrammaticAccessTokenShowOutput <a name="UserProgrammaticAccessTokenShowOutput" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput()
```


### UserProgrammaticAccessTokenTimeouts <a name="UserProgrammaticAccessTokenTimeouts" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserProgrammaticAccessTokenShowOutputList <a name="UserProgrammaticAccessTokenShowOutputList" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserProgrammaticAccessTokenShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### UserProgrammaticAccessTokenShowOutputOutputReference <a name="UserProgrammaticAccessTokenShowOutputOutputReference" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement">mins_to_bypass_network_policy_requirement</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.roleRestriction">role_restriction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.rotatedTo">rotated_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput">UserProgrammaticAccessTokenShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `mins_to_bypass_network_policy_requirement`<sup>Required</sup> <a name="mins_to_bypass_network_policy_requirement" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.minsToBypassNetworkPolicyRequirement"></a>

```python
mins_to_bypass_network_policy_requirement: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_restriction`<sup>Required</sup> <a name="role_restriction" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.roleRestriction"></a>

```python
role_restriction: str
```

- *Type:* str

---

##### `rotated_to`<sup>Required</sup> <a name="rotated_to" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.rotatedTo"></a>

```python
rotated_to: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: UserProgrammaticAccessTokenShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenShowOutput">UserProgrammaticAccessTokenShowOutput</a>

---


### UserProgrammaticAccessTokenTimeoutsOutputReference <a name="UserProgrammaticAccessTokenTimeoutsOutputReference" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user_programmatic_access_token

userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserProgrammaticAccessTokenTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.userProgrammaticAccessToken.UserProgrammaticAccessTokenTimeouts">UserProgrammaticAccessTokenTimeouts</a>]

---



