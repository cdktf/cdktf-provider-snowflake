# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-snowflake.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-snowflake.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user snowflake_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user

user.User(
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
  comment: str = None,
  default_namespace: str = None,
  default_role: str = None,
  default_secondary_roles: typing.List[str] = None,
  default_warehouse: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  email: str = None,
  first_name: str = None,
  id: str = None,
  last_name: str = None,
  login_name: str = None,
  must_change_password: typing.Union[bool, IResolvable] = None,
  password: str = None,
  rsa_public_key: str = None,
  rsa_public_key2: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#comment User#comment}. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultNamespace">default_namespace</a></code> | <code>str</code> | Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultRole">default_role</a></code> | <code>str</code> | Specifies the role that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultSecondaryRoles">default_secondary_roles</a></code> | <code>typing.List[str]</code> | Specifies the set of secondary roles that are active for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultWarehouse">default_warehouse</a></code> | <code>str</code> | Specifies the virtual warehouse that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#disabled User#disabled}. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Name displayed for the user in the Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.email">email</a></code> | <code>str</code> | Email address for the user. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | First name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Last name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.loginName">login_name</a></code> | <code>str</code> | The name users use to log in. If not supplied, snowflake will use name instead. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.mustChangePassword">must_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.password">password</a></code> | <code>str</code> | **WARNING:** this will put the password in the terraform state file. Use carefully. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer. |
| <code><a href="#@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey2">rsa_public_key2</a></code> | <code>str</code> | Specifies the user’s second RSA public key; |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.name"></a>

- *Type:* str

Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#name User#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#comment User#comment}.

---

##### `default_namespace`<sup>Optional</sup> <a name="default_namespace" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultNamespace"></a>

- *Type:* str

Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_namespace User#default_namespace}

---

##### `default_role`<sup>Optional</sup> <a name="default_role" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultRole"></a>

- *Type:* str

Specifies the role that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_role User#default_role}

---

##### `default_secondary_roles`<sup>Optional</sup> <a name="default_secondary_roles" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultSecondaryRoles"></a>

- *Type:* typing.List[str]

Specifies the set of secondary roles that are active for the user’s session upon login.

Currently only ["ALL"] value is supported - more information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_secondary_roles User#default_secondary_roles}

---

##### `default_warehouse`<sup>Optional</sup> <a name="default_warehouse" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.defaultWarehouse"></a>

- *Type:* str

Specifies the virtual warehouse that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_warehouse User#default_warehouse}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#disabled User#disabled}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.displayName"></a>

- *Type:* str

Name displayed for the user in the Snowflake web interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#display_name User#display_name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.email"></a>

- *Type:* str

Email address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#email User#email}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.firstName"></a>

- *Type:* str

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#first_name User#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.lastName"></a>

- *Type:* str

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#last_name User#last_name}

---

##### `login_name`<sup>Optional</sup> <a name="login_name" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.loginName"></a>

- *Type:* str

The name users use to log in. If not supplied, snowflake will use name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#login_name User#login_name}

---

##### `must_change_password`<sup>Optional</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.mustChangePassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#must_change_password User#must_change_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.password"></a>

- *Type:* str

**WARNING:** this will put the password in the terraform state file. Use carefully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#password User#password}

---

##### `rsa_public_key`<sup>Optional</sup> <a name="rsa_public_key" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey"></a>

- *Type:* str

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#rsa_public_key User#rsa_public_key}

---

##### `rsa_public_key2`<sup>Optional</sup> <a name="rsa_public_key2" id="@cdktf/provider-snowflake.user.User.Initializer.parameter.rsaPublicKey2"></a>

- *Type:* str

Specifies the user’s second RSA public key;

used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.user.User.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultNamespace">reset_default_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultRole">reset_default_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultSecondaryRoles">reset_default_secondary_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDefaultWarehouse">reset_default_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetLoginName">reset_login_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetMustChangePassword">reset_must_change_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetRsaPublicKey">reset_rsa_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.resetRsaPublicKey2">reset_rsa_public_key2</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.user.User.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.user.User.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.user.User.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.user.User.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_default_namespace` <a name="reset_default_namespace" id="@cdktf/provider-snowflake.user.User.resetDefaultNamespace"></a>

```python
def reset_default_namespace() -> None
```

##### `reset_default_role` <a name="reset_default_role" id="@cdktf/provider-snowflake.user.User.resetDefaultRole"></a>

```python
def reset_default_role() -> None
```

##### `reset_default_secondary_roles` <a name="reset_default_secondary_roles" id="@cdktf/provider-snowflake.user.User.resetDefaultSecondaryRoles"></a>

```python
def reset_default_secondary_roles() -> None
```

##### `reset_default_warehouse` <a name="reset_default_warehouse" id="@cdktf/provider-snowflake.user.User.resetDefaultWarehouse"></a>

```python
def reset_default_warehouse() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-snowflake.user.User.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-snowflake.user.User.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-snowflake.user.User.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-snowflake.user.User.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-snowflake.user.User.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_login_name` <a name="reset_login_name" id="@cdktf/provider-snowflake.user.User.resetLoginName"></a>

```python
def reset_login_name() -> None
```

##### `reset_must_change_password` <a name="reset_must_change_password" id="@cdktf/provider-snowflake.user.User.resetMustChangePassword"></a>

```python
def reset_must_change_password() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-snowflake.user.User.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_rsa_public_key` <a name="reset_rsa_public_key" id="@cdktf/provider-snowflake.user.User.resetRsaPublicKey"></a>

```python
def reset_rsa_public_key() -> None
```

##### `reset_rsa_public_key2` <a name="reset_rsa_public_key2" id="@cdktf/provider-snowflake.user.User.resetRsaPublicKey2"></a>

```python
def reset_rsa_public_key2() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import user

user.User.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.hasRsaPublicKey">has_rsa_public_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultNamespaceInput">default_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultRoleInput">default_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultSecondaryRolesInput">default_secondary_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultWarehouseInput">default_warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.loginNameInput">login_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.mustChangePasswordInput">must_change_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey2Input">rsa_public_key2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKeyInput">rsa_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultNamespace">default_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultRole">default_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultSecondaryRoles">default_secondary_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.defaultWarehouse">default_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.loginName">login_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.mustChangePassword">must_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.rsaPublicKey2">rsa_public_key2</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `has_rsa_public_key`<sup>Required</sup> <a name="has_rsa_public_key" id="@cdktf/provider-snowflake.user.User.property.hasRsaPublicKey"></a>

```python
has_rsa_public_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.user.User.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `default_namespace_input`<sup>Optional</sup> <a name="default_namespace_input" id="@cdktf/provider-snowflake.user.User.property.defaultNamespaceInput"></a>

```python
default_namespace_input: str
```

- *Type:* str

---

##### `default_role_input`<sup>Optional</sup> <a name="default_role_input" id="@cdktf/provider-snowflake.user.User.property.defaultRoleInput"></a>

```python
default_role_input: str
```

- *Type:* str

---

##### `default_secondary_roles_input`<sup>Optional</sup> <a name="default_secondary_roles_input" id="@cdktf/provider-snowflake.user.User.property.defaultSecondaryRolesInput"></a>

```python
default_secondary_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_warehouse_input`<sup>Optional</sup> <a name="default_warehouse_input" id="@cdktf/provider-snowflake.user.User.property.defaultWarehouseInput"></a>

```python
default_warehouse_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-snowflake.user.User.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-snowflake.user.User.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-snowflake.user.User.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-snowflake.user.User.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-snowflake.user.User.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `login_name_input`<sup>Optional</sup> <a name="login_name_input" id="@cdktf/provider-snowflake.user.User.property.loginNameInput"></a>

```python
login_name_input: str
```

- *Type:* str

---

##### `must_change_password_input`<sup>Optional</sup> <a name="must_change_password_input" id="@cdktf/provider-snowflake.user.User.property.mustChangePasswordInput"></a>

```python
must_change_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.user.User.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-snowflake.user.User.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `rsa_public_key2_input`<sup>Optional</sup> <a name="rsa_public_key2_input" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey2Input"></a>

```python
rsa_public_key2_input: str
```

- *Type:* str

---

##### `rsa_public_key_input`<sup>Optional</sup> <a name="rsa_public_key_input" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKeyInput"></a>

```python
rsa_public_key_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.user.User.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default_namespace`<sup>Required</sup> <a name="default_namespace" id="@cdktf/provider-snowflake.user.User.property.defaultNamespace"></a>

```python
default_namespace: str
```

- *Type:* str

---

##### `default_role`<sup>Required</sup> <a name="default_role" id="@cdktf/provider-snowflake.user.User.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

---

##### `default_secondary_roles`<sup>Required</sup> <a name="default_secondary_roles" id="@cdktf/provider-snowflake.user.User.property.defaultSecondaryRoles"></a>

```python
default_secondary_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_warehouse`<sup>Required</sup> <a name="default_warehouse" id="@cdktf/provider-snowflake.user.User.property.defaultWarehouse"></a>

```python
default_warehouse: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.User.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-snowflake.user.User.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.user.User.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-snowflake.user.User.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-snowflake.user.User.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `login_name`<sup>Required</sup> <a name="login_name" id="@cdktf/provider-snowflake.user.User.property.loginName"></a>

```python
login_name: str
```

- *Type:* str

---

##### `must_change_password`<sup>Required</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.user.User.property.mustChangePassword"></a>

```python
must_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.User.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.user.User.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `rsa_public_key`<sup>Required</sup> <a name="rsa_public_key" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey"></a>

```python
rsa_public_key: str
```

- *Type:* str

---

##### `rsa_public_key2`<sup>Required</sup> <a name="rsa_public_key2" id="@cdktf/provider-snowflake.user.User.property.rsaPublicKey2"></a>

```python
rsa_public_key2: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-snowflake.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  comment: str = None,
  default_namespace: str = None,
  default_role: str = None,
  default_secondary_roles: typing.List[str] = None,
  default_warehouse: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  email: str = None,
  first_name: str = None,
  id: str = None,
  last_name: str = None,
  login_name: str = None,
  must_change_password: typing.Union[bool, IResolvable] = None,
  password: str = None,
  rsa_public_key: str = None,
  rsa_public_key2: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.name">name</a></code> | <code>str</code> | Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#comment User#comment}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultNamespace">default_namespace</a></code> | <code>str</code> | Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultRole">default_role</a></code> | <code>str</code> | Specifies the role that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultSecondaryRoles">default_secondary_roles</a></code> | <code>typing.List[str]</code> | Specifies the set of secondary roles that are active for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.defaultWarehouse">default_warehouse</a></code> | <code>str</code> | Specifies the virtual warehouse that is active by default for the user’s session upon login. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#disabled User#disabled}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.displayName">display_name</a></code> | <code>str</code> | Name displayed for the user in the Snowflake web interface. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.email">email</a></code> | <code>str</code> | Email address for the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.firstName">first_name</a></code> | <code>str</code> | First name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.lastName">last_name</a></code> | <code>str</code> | Last name of the user. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.loginName">login_name</a></code> | <code>str</code> | The name users use to log in. If not supplied, snowflake will use name instead. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.mustChangePassword">must_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.password">password</a></code> | <code>str</code> | **WARNING:** this will put the password in the terraform state file. Use carefully. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer. |
| <code><a href="#@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey2">rsa_public_key2</a></code> | <code>str</code> | Specifies the user’s second RSA public key; |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.user.UserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the user. Note that if you do not supply login_name this will be used as login_name. [doc](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#name User#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.user.UserConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#comment User#comment}.

---

##### `default_namespace`<sup>Optional</sup> <a name="default_namespace" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultNamespace"></a>

```python
default_namespace: str
```

- *Type:* str

Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_namespace User#default_namespace}

---

##### `default_role`<sup>Optional</sup> <a name="default_role" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

Specifies the role that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_role User#default_role}

---

##### `default_secondary_roles`<sup>Optional</sup> <a name="default_secondary_roles" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultSecondaryRoles"></a>

```python
default_secondary_roles: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the set of secondary roles that are active for the user’s session upon login.

Currently only ["ALL"] value is supported - more information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_secondary_roles User#default_secondary_roles}

---

##### `default_warehouse`<sup>Optional</sup> <a name="default_warehouse" id="@cdktf/provider-snowflake.user.UserConfig.property.defaultWarehouse"></a>

```python
default_warehouse: str
```

- *Type:* str

Specifies the virtual warehouse that is active by default for the user’s session upon login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#default_warehouse User#default_warehouse}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-snowflake.user.UserConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#disabled User#disabled}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-snowflake.user.UserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Name displayed for the user in the Snowflake web interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#display_name User#display_name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-snowflake.user.UserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Email address for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#email User#email}

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-snowflake.user.UserConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

First name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#first_name User#first_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-snowflake.user.UserConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Last name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#last_name User#last_name}

---

##### `login_name`<sup>Optional</sup> <a name="login_name" id="@cdktf/provider-snowflake.user.UserConfig.property.loginName"></a>

```python
login_name: str
```

- *Type:* str

The name users use to log in. If not supplied, snowflake will use name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#login_name User#login_name}

---

##### `must_change_password`<sup>Optional</sup> <a name="must_change_password" id="@cdktf/provider-snowflake.user.UserConfig.property.mustChangePassword"></a>

```python
must_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#must_change_password User#must_change_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.user.UserConfig.property.password"></a>

```python
password: str
```

- *Type:* str

**WARNING:** this will put the password in the terraform state file. Use carefully.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#password User#password}

---

##### `rsa_public_key`<sup>Optional</sup> <a name="rsa_public_key" id="@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey"></a>

```python
rsa_public_key: str
```

- *Type:* str

Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#rsa_public_key User#rsa_public_key}

---

##### `rsa_public_key2`<sup>Optional</sup> <a name="rsa_public_key2" id="@cdktf/provider-snowflake.user.UserConfig.property.rsaPublicKey2"></a>

```python
rsa_public_key2: str
```

- *Type:* str

Specifies the user’s second RSA public key;

used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}

---



