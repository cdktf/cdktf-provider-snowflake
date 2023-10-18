# `snowflake_masking_policy_grant`

Refer to the Terraform Registory for docs: [`snowflake_masking_policy_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant).

# `maskingPolicyGrant` Submodule <a name="`maskingPolicyGrant` Submodule" id="@cdktf/provider-snowflake.maskingPolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaskingPolicyGrant <a name="MaskingPolicyGrant" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant snowflake_masking_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import masking_policy_grant

maskingPolicyGrant.MaskingPolicyGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  masking_policy_name: str,
  schema_name: str,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  privilege: str = None,
  revert_ownership_to_role_name: str = None,
  roles: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.maskingPolicyName">masking_policy_name</a></code> | <code>str</code> | The name of the masking policy on which to grant privileges immediately. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.revertOwnershipToRoleName">revert_ownership_to_role_name</a></code> | <code>str</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#database_name MaskingPolicyGrant#database_name}

---

##### `masking_policy_name`<sup>Required</sup> <a name="masking_policy_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.maskingPolicyName"></a>

- *Type:* str

The name of the masking policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#masking_policy_name MaskingPolicyGrant#masking_policy_name}

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.schemaName"></a>

- *Type:* str

The name of the schema containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#schema_name MaskingPolicyGrant#schema_name}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#enable_multiple_grants MaskingPolicyGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.privilege"></a>

- *Type:* str

The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#privilege MaskingPolicyGrant#privilege}

---

##### `revert_ownership_to_role_name`<sup>Optional</sup> <a name="revert_ownership_to_role_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.revertOwnershipToRoleName"></a>

- *Type:* str

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#revert_ownership_to_role_name MaskingPolicyGrant#revert_ownership_to_role_name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#roles MaskingPolicyGrant#roles}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#with_grant_option MaskingPolicyGrant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetEnableMultipleGrants">reset_enable_multiple_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetPrivilege">reset_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRevertOwnershipToRoleName">reset_revert_ownership_to_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_enable_multiple_grants` <a name="reset_enable_multiple_grants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetEnableMultipleGrants"></a>

```python
def reset_enable_multiple_grants() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_privilege` <a name="reset_privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetPrivilege"></a>

```python
def reset_privilege() -> None
```

##### `reset_revert_ownership_to_role_name` <a name="reset_revert_ownership_to_role_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRevertOwnershipToRoleName"></a>

```python
def reset_revert_ownership_to_role_name() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MaskingPolicyGrant resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import masking_policy_grant

maskingPolicyGrant.MaskingPolicyGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import masking_policy_grant

maskingPolicyGrant.MaskingPolicyGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import masking_policy_grant

maskingPolicyGrant.MaskingPolicyGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import masking_policy_grant

maskingPolicyGrant.MaskingPolicyGrant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MaskingPolicyGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MaskingPolicyGrant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MaskingPolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaskingPolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrantsInput">enable_multiple_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyNameInput">masking_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilegeInput">privilege_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleNameInput">revert_ownership_to_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyName">masking_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleName">revert_ownership_to_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `enable_multiple_grants_input`<sup>Optional</sup> <a name="enable_multiple_grants_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrantsInput"></a>

```python
enable_multiple_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_name_input`<sup>Optional</sup> <a name="masking_policy_name_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyNameInput"></a>

```python
masking_policy_name_input: str
```

- *Type:* str

---

##### `privilege_input`<sup>Optional</sup> <a name="privilege_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilegeInput"></a>

```python
privilege_input: str
```

- *Type:* str

---

##### `revert_ownership_to_role_name_input`<sup>Optional</sup> <a name="revert_ownership_to_role_name_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleNameInput"></a>

```python
revert_ownership_to_role_name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `enable_multiple_grants`<sup>Required</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_name`<sup>Required</sup> <a name="masking_policy_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.maskingPolicyName"></a>

```python
masking_policy_name: str
```

- *Type:* str

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `revert_ownership_to_role_name`<sup>Required</sup> <a name="revert_ownership_to_role_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.revertOwnershipToRoleName"></a>

```python
revert_ownership_to_role_name: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MaskingPolicyGrantConfig <a name="MaskingPolicyGrantConfig" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import masking_policy_grant

maskingPolicyGrant.MaskingPolicyGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  masking_policy_name: str,
  schema_name: str,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  privilege: str = None,
  revert_ownership_to_role_name: str = None,
  roles: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.maskingPolicyName">masking_policy_name</a></code> | <code>str</code> | The name of the masking policy on which to grant privileges immediately. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema containing the masking policy on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.revertOwnershipToRoleName">revert_ownership_to_role_name</a></code> | <code>str</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#database_name MaskingPolicyGrant#database_name}

---

##### `masking_policy_name`<sup>Required</sup> <a name="masking_policy_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.maskingPolicyName"></a>

```python
masking_policy_name: str
```

- *Type:* str

The name of the masking policy on which to grant privileges immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#masking_policy_name MaskingPolicyGrant#masking_policy_name}

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the schema containing the masking policy on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#schema_name MaskingPolicyGrant#schema_name}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#enable_multiple_grants MaskingPolicyGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#id MaskingPolicyGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

The privilege to grant on the masking policy. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#privilege MaskingPolicyGrant#privilege}

---

##### `revert_ownership_to_role_name`<sup>Optional</sup> <a name="revert_ownership_to_role_name" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.revertOwnershipToRoleName"></a>

```python
revert_ownership_to_role_name: str
```

- *Type:* str

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#revert_ownership_to_role_name MaskingPolicyGrant#revert_ownership_to_role_name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#roles MaskingPolicyGrant#roles}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.maskingPolicyGrant.MaskingPolicyGrantConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/masking_policy_grant#with_grant_option MaskingPolicyGrant#with_grant_option}

---



