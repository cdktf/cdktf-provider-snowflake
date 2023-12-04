# `grantPrivilegesToRole` Submodule <a name="`grantPrivilegesToRole` Submodule" id="@cdktf/provider-snowflake.grantPrivilegesToRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToRole <a name="GrantPrivilegesToRole" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role snowflake_grant_privileges_to_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  all_privileges: typing.Union[bool, IResolvable] = None,
  id: str = None,
  on_account: typing.Union[bool, IResolvable] = None,
  on_account_object: GrantPrivilegesToRoleOnAccountObject = None,
  on_schema: GrantPrivilegesToRoleOnSchema = None,
  on_schema_object: GrantPrivilegesToRoleOnSchemaObject = None,
  privileges: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The fully qualified name of the role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.allPrivileges">all_privileges</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onAccount">on_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onAccountObject">on_account_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onSchema">on_schema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.privileges">privileges</a></code> | <code>typing.List[str]</code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.roleName"></a>

- *Type:* str

The fully qualified name of the role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#role_name GrantPrivilegesToRole#role_name}

---

##### `all_privileges`<sup>Optional</sup> <a name="all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.allPrivileges"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all_privileges GrantPrivilegesToRole#all_privileges}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_account`<sup>Optional</sup> <a name="on_account" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onAccount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_account GrantPrivilegesToRole#on_account}

---

##### `on_account_object`<sup>Optional</sup> <a name="on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onAccountObject"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_account_object GrantPrivilegesToRole#on_account_object}

---

##### `on_schema`<sup>Optional</sup> <a name="on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onSchema"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_schema GrantPrivilegesToRole#on_schema}

---

##### `on_schema_object`<sup>Optional</sup> <a name="on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.onSchemaObject"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_schema_object GrantPrivilegesToRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.privileges"></a>

- *Type:* typing.List[str]

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#privileges GrantPrivilegesToRole#privileges}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#with_grant_option GrantPrivilegesToRole#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject">put_on_account_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema">put_on_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject">put_on_schema_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetAllPrivileges">reset_all_privileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccount">reset_on_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccountObject">reset_on_account_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchema">reset_on_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchemaObject">reset_on_schema_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetPrivileges">reset_privileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_on_account_object` <a name="put_on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject"></a>

```python
def put_on_account_object(
  object_name: str,
  object_type: str
) -> None
```

###### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject.parameter.objectName"></a>

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

###### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnAccountObject.parameter.objectType"></a>

- *Type:* str

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

##### `put_on_schema` <a name="put_on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema"></a>

```python
def put_on_schema(
  all_schemas_in_database: str = None,
  future_schemas_in_database: str = None,
  schema_name: str = None
) -> None
```

###### `all_schemas_in_database`<sup>Optional</sup> <a name="all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema.parameter.allSchemasInDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all_schemas_in_database GrantPrivilegesToRole#all_schemas_in_database}

---

###### `future_schemas_in_database`<sup>Optional</sup> <a name="future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema.parameter.futureSchemasInDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#future_schemas_in_database GrantPrivilegesToRole#future_schemas_in_database}

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchema.parameter.schemaName"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#schema_name GrantPrivilegesToRole#schema_name}

---

##### `put_on_schema_object` <a name="put_on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject"></a>

```python
def put_on_schema_object(
  all: GrantPrivilegesToRoleOnSchemaObjectAll = None,
  future: GrantPrivilegesToRoleOnSchemaObjectFuture = None,
  object_name: str = None,
  object_type: str = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject.parameter.all"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all GrantPrivilegesToRole#all}

---

###### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject.parameter.future"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#future GrantPrivilegesToRole#future}

---

###### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject.parameter.objectName"></a>

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

###### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.putOnSchemaObject.parameter.objectType"></a>

- *Type:* str

The object type of the schema object on which privileges will be granted.

Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

##### `reset_all_privileges` <a name="reset_all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetAllPrivileges"></a>

```python
def reset_all_privileges() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_account` <a name="reset_on_account" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccount"></a>

```python
def reset_on_account() -> None
```

##### `reset_on_account_object` <a name="reset_on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnAccountObject"></a>

```python
def reset_on_account_object() -> None
```

##### `reset_on_schema` <a name="reset_on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchema"></a>

```python
def reset_on_schema() -> None
```

##### `reset_on_schema_object` <a name="reset_on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetOnSchemaObject"></a>

```python
def reset_on_schema_object() -> None
```

##### `reset_privileges` <a name="reset_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetPrivileges"></a>

```python
def reset_privileges() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GrantPrivilegesToRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GrantPrivilegesToRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObject">on_account_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference">GrantPrivilegesToRoleOnAccountObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchema">on_schema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference">GrantPrivilegesToRoleOnSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference">GrantPrivilegesToRoleOnSchemaObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivilegesInput">all_privileges_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountInput">on_account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObjectInput">on_account_object_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaInput">on_schema_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObjectInput">on_schema_object_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivileges">all_privileges</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccount">on_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on_account_object`<sup>Required</sup> <a name="on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObject"></a>

```python
on_account_object: GrantPrivilegesToRoleOnAccountObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference">GrantPrivilegesToRoleOnAccountObjectOutputReference</a>

---

##### `on_schema`<sup>Required</sup> <a name="on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchema"></a>

```python
on_schema: GrantPrivilegesToRoleOnSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference">GrantPrivilegesToRoleOnSchemaOutputReference</a>

---

##### `on_schema_object`<sup>Required</sup> <a name="on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObject"></a>

```python
on_schema_object: GrantPrivilegesToRoleOnSchemaObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference">GrantPrivilegesToRoleOnSchemaObjectOutputReference</a>

---

##### `all_privileges_input`<sup>Optional</sup> <a name="all_privileges_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivilegesInput"></a>

```python
all_privileges_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_account_input`<sup>Optional</sup> <a name="on_account_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountInput"></a>

```python
on_account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_account_object_input`<sup>Optional</sup> <a name="on_account_object_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccountObjectInput"></a>

```python
on_account_object_input: GrantPrivilegesToRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---

##### `on_schema_input`<sup>Optional</sup> <a name="on_schema_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaInput"></a>

```python
on_schema_input: GrantPrivilegesToRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---

##### `on_schema_object_input`<sup>Optional</sup> <a name="on_schema_object_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onSchemaObjectInput"></a>

```python
on_schema_object_input: GrantPrivilegesToRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `all_privileges`<sup>Required</sup> <a name="all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.allPrivileges"></a>

```python
all_privileges: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_account`<sup>Required</sup> <a name="on_account" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.onAccount"></a>

```python
on_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToRoleConfig <a name="GrantPrivilegesToRoleConfig" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  all_privileges: typing.Union[bool, IResolvable] = None,
  id: str = None,
  on_account: typing.Union[bool, IResolvable] = None,
  on_account_object: GrantPrivilegesToRoleOnAccountObject = None,
  on_schema: GrantPrivilegesToRoleOnSchema = None,
  on_schema_object: GrantPrivilegesToRoleOnSchemaObject = None,
  privileges: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.roleName">role_name</a></code> | <code>str</code> | The fully qualified name of the role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.allPrivileges">all_privileges</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Grant all privileges on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccount">on_account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the privileges will be granted on the account. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccountObject">on_account_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | on_account_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchema">on_schema</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | on_schema block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchemaObject">on_schema_object</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | on_schema_object block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | The privileges to grant on the account role. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the grantee can grant the privileges to other users. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The fully qualified name of the role to which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#role_name GrantPrivilegesToRole#role_name}

---

##### `all_privileges`<sup>Optional</sup> <a name="all_privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.allPrivileges"></a>

```python
all_privileges: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Grant all privileges on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all_privileges GrantPrivilegesToRole#all_privileges}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_account`<sup>Optional</sup> <a name="on_account" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccount"></a>

```python
on_account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the privileges will be granted on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_account GrantPrivilegesToRole#on_account}

---

##### `on_account_object`<sup>Optional</sup> <a name="on_account_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onAccountObject"></a>

```python
on_account_object: GrantPrivilegesToRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

on_account_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_account_object GrantPrivilegesToRole#on_account_object}

---

##### `on_schema`<sup>Optional</sup> <a name="on_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchema"></a>

```python
on_schema: GrantPrivilegesToRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

on_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_schema GrantPrivilegesToRole#on_schema}

---

##### `on_schema_object`<sup>Optional</sup> <a name="on_schema_object" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.onSchemaObject"></a>

```python
on_schema_object: GrantPrivilegesToRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

on_schema_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#on_schema_object GrantPrivilegesToRole#on_schema_object}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

The privileges to grant on the account role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#privileges GrantPrivilegesToRole#privileges}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the grantee can grant the privileges to other users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#with_grant_option GrantPrivilegesToRole#with_grant_option}

---

### GrantPrivilegesToRoleOnAccountObject <a name="GrantPrivilegesToRoleOnAccountObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject(
  object_name: str,
  object_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectName">object_name</a></code> | <code>str</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectType">object_type</a></code> | <code>str</code> | The object type of the account object on which privileges will be granted. |

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The object type of the account object on which privileges will be granted.

Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

### GrantPrivilegesToRoleOnSchema <a name="GrantPrivilegesToRoleOnSchema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema(
  all_schemas_in_database: str = None,
  future_schemas_in_database: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.allSchemasInDatabase">all_schemas_in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.futureSchemasInDatabase">future_schemas_in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.schemaName">schema_name</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `all_schemas_in_database`<sup>Optional</sup> <a name="all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.allSchemasInDatabase"></a>

```python
all_schemas_in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all_schemas_in_database GrantPrivilegesToRole#all_schemas_in_database}

---

##### `future_schemas_in_database`<sup>Optional</sup> <a name="future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.futureSchemasInDatabase"></a>

```python
future_schemas_in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#future_schemas_in_database GrantPrivilegesToRole#future_schemas_in_database}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#schema_name GrantPrivilegesToRole#schema_name}

---

### GrantPrivilegesToRoleOnSchemaObject <a name="GrantPrivilegesToRoleOnSchemaObject" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject(
  all: GrantPrivilegesToRoleOnSchemaObjectAll = None,
  future: GrantPrivilegesToRoleOnSchemaObjectFuture = None,
  object_name: str = None,
  object_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectName">object_name</a></code> | <code>str</code> | The fully qualified name of the object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectType">object_type</a></code> | <code>str</code> | The object type of the schema object on which privileges will be granted. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.all"></a>

```python
all: GrantPrivilegesToRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#all GrantPrivilegesToRole#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.future"></a>

```python
future: GrantPrivilegesToRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#future GrantPrivilegesToRole#future}

---

##### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

The fully qualified name of the object on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The object type of the schema object on which privileges will be granted.

Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}

---

### GrantPrivilegesToRoleOnSchemaObjectAll <a name="GrantPrivilegesToRoleOnSchemaObjectAll" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inDatabase">in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inSchema">in_schema</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

### GrantPrivilegesToRoleOnSchemaObjectFuture <a name="GrantPrivilegesToRoleOnSchemaObjectFuture" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | The plural object type of the schema object on which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inDatabase">in_database</a></code> | <code>str</code> | The fully qualified name of the database. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inSchema">in_schema</a></code> | <code>str</code> | The fully qualified name of the schema. |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToRoleOnAccountObjectOutputReference <a name="GrantPrivilegesToRoleOnAccountObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectNameInput">object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_name_input`<sup>Optional</sup> <a name="object_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectNameInput"></a>

```python
object_name_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObjectOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToRoleOnAccountObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnAccountObject">GrantPrivilegesToRoleOnAccountObject</a>

---


### GrantPrivilegesToRoleOnSchemaObjectAllOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectAllOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---


### GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---


### GrantPrivilegesToRoleOnSchemaObjectOutputReference <a name="GrantPrivilegesToRoleOnSchemaObjectOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll">put_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture">put_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetFuture">reset_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectName">reset_object_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectType">reset_object_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_all` <a name="put_all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll"></a>

```python
def put_all(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll.parameter.objectTypePlural"></a>

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll.parameter.inDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putAll.parameter.inSchema"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

##### `put_future` <a name="put_future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture"></a>

```python
def put_future(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture.parameter.objectTypePlural"></a>

- *Type:* str

The plural object type of the schema object on which privileges will be granted.

Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture.parameter.inDatabase"></a>

- *Type:* str

The fully qualified name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.putFuture.parameter.inSchema"></a>

- *Type:* str

The fully qualified name of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.76.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}

---

##### `reset_all` <a name="reset_all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_future` <a name="reset_future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetFuture"></a>

```python
def reset_future() -> None
```

##### `reset_object_name` <a name="reset_object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectName"></a>

```python
def reset_object_name() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.resetObjectType"></a>

```python
def reset_object_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToRoleOnSchemaObjectAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.allInput">all_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.futureInput">future_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectNameInput">object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.all"></a>

```python
all: GrantPrivilegesToRoleOnSchemaObjectAllOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAllOutputReference">GrantPrivilegesToRoleOnSchemaObjectAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.future"></a>

```python
future: GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference">GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference</a>

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.allInput"></a>

```python
all_input: GrantPrivilegesToRoleOnSchemaObjectAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectAll">GrantPrivilegesToRoleOnSchemaObjectAll</a>

---

##### `future_input`<sup>Optional</sup> <a name="future_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.futureInput"></a>

```python
future_input: GrantPrivilegesToRoleOnSchemaObjectFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectFuture">GrantPrivilegesToRoleOnSchemaObjectFuture</a>

---

##### `object_name_input`<sup>Optional</sup> <a name="object_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectNameInput"></a>

```python
object_name_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObjectOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToRoleOnSchemaObject
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaObject">GrantPrivilegesToRoleOnSchemaObject</a>

---


### GrantPrivilegesToRoleOnSchemaOutputReference <a name="GrantPrivilegesToRoleOnSchemaOutputReference" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_privileges_to_role

grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetAllSchemasInDatabase">reset_all_schemas_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetFutureSchemasInDatabase">reset_future_schemas_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_all_schemas_in_database` <a name="reset_all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetAllSchemasInDatabase"></a>

```python
def reset_all_schemas_in_database() -> None
```

##### `reset_future_schemas_in_database` <a name="reset_future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetFutureSchemasInDatabase"></a>

```python
def reset_future_schemas_in_database() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput">all_schemas_in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput">future_schemas_in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabase">all_schemas_in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabase">future_schemas_in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_schemas_in_database_input`<sup>Optional</sup> <a name="all_schemas_in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabaseInput"></a>

```python
all_schemas_in_database_input: str
```

- *Type:* str

---

##### `future_schemas_in_database_input`<sup>Optional</sup> <a name="future_schemas_in_database_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabaseInput"></a>

```python
future_schemas_in_database_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `all_schemas_in_database`<sup>Required</sup> <a name="all_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.allSchemasInDatabase"></a>

```python
all_schemas_in_database: str
```

- *Type:* str

---

##### `future_schemas_in_database`<sup>Required</sup> <a name="future_schemas_in_database" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.futureSchemasInDatabase"></a>

```python
future_schemas_in_database: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchemaOutputReference.property.internalValue"></a>

```python
internal_value: GrantPrivilegesToRoleOnSchema
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantPrivilegesToRole.GrantPrivilegesToRoleOnSchema">GrantPrivilegesToRoleOnSchema</a>

---



