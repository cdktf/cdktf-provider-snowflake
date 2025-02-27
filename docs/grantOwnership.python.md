# `grantOwnership` Submodule <a name="`grantOwnership` Submodule" id="@cdktf/provider-snowflake.grantOwnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantOwnership <a name="GrantOwnership" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership snowflake_grant_ownership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnership(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  on: GrantOwnershipOn,
  account_role_name: str = None,
  database_role_name: str = None,
  id: str = None,
  outbound_privileges: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.accountRoleName">account_role_name</a></code> | <code>str</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.databaseRoleName">database_role_name</a></code> | <code>str</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#id GrantOwnership#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.outboundPrivileges">outbound_privileges</a></code> | <code>str</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.on"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#on GrantOwnership#on}

---

##### `account_role_name`<sup>Optional</sup> <a name="account_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.accountRoleName"></a>

- *Type:* str

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}

---

##### `database_role_name`<sup>Optional</sup> <a name="database_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.databaseRoleName"></a>

- *Type:* str

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#id GrantOwnership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outbound_privileges`<sup>Optional</sup> <a name="outbound_privileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.outboundPrivileges"></a>

- *Type:* str

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn">put_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName">reset_account_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName">reset_database_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges">reset_outbound_privileges</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_on` <a name="put_on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn"></a>

```python
def put_on(
  all: GrantOwnershipOnAll = None,
  future: GrantOwnershipOnFuture = None,
  object_name: str = None,
  object_type: str = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.all"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#all GrantOwnership#all}

---

###### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.future"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#future GrantOwnership#future}

---

###### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.objectName"></a>

- *Type:* str

Specifies the identifier for the object on which you are transferring ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_name GrantOwnership#object_name}

---

###### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.objectType"></a>

- *Type:* str

Specifies the type of object on which you are transferring ownership.

Available values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | COMPUTE POOL | DATA METRIC FUNCTION | DATABASE | DATABASE ROLE | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | EXTERNAL VOLUME | FAILOVER GROUP | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | ICEBERG TABLE | IMAGE REPOSITORY | INTEGRATION | MATERIALIZED VIEW | NETWORK POLICY | NETWORK RULE | PACKAGES POLICY | PIPE | PROCEDURE | MASKING POLICY | PASSWORD POLICY | PROJECTION POLICY | REPLICATION GROUP | RESOURCE MONITOR | ROLE | ROW ACCESS POLICY | SCHEMA | SESSION POLICY | SECRET | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | USER | VIEW | WAREHOUSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_type GrantOwnership#object_type}

---

##### `reset_account_role_name` <a name="reset_account_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName"></a>

```python
def reset_account_role_name() -> None
```

##### `reset_database_role_name` <a name="reset_database_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName"></a>

```python
def reset_database_role_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_outbound_privileges` <a name="reset_outbound_privileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges"></a>

```python
def reset_outbound_privileges() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnership.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnership.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnership.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnership.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GrantOwnership to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GrantOwnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantOwnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput">account_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput">database_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput">on_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput">outbound_privileges_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName">account_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName">database_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges">outbound_privileges</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on"></a>

```python
on: GrantOwnershipOnOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a>

---

##### `account_role_name_input`<sup>Optional</sup> <a name="account_role_name_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput"></a>

```python
account_role_name_input: str
```

- *Type:* str

---

##### `database_role_name_input`<sup>Optional</sup> <a name="database_role_name_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput"></a>

```python
database_role_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput"></a>

```python
on_input: GrantOwnershipOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `outbound_privileges_input`<sup>Optional</sup> <a name="outbound_privileges_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput"></a>

```python
outbound_privileges_input: str
```

- *Type:* str

---

##### `account_role_name`<sup>Required</sup> <a name="account_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName"></a>

```python
account_role_name: str
```

- *Type:* str

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName"></a>

```python
database_role_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `outbound_privileges`<sup>Required</sup> <a name="outbound_privileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges"></a>

```python
outbound_privileges: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrantOwnershipConfig <a name="GrantOwnershipConfig" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  on: GrantOwnershipOn,
  account_role_name: str = None,
  database_role_name: str = None,
  id: str = None,
  outbound_privileges: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName">account_role_name</a></code> | <code>str</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName">database_role_name</a></code> | <code>str</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#id GrantOwnership#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges">outbound_privileges</a></code> | <code>str</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on"></a>

```python
on: GrantOwnershipOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#on GrantOwnership#on}

---

##### `account_role_name`<sup>Optional</sup> <a name="account_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName"></a>

```python
account_role_name: str
```

- *Type:* str

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}

---

##### `database_role_name`<sup>Optional</sup> <a name="database_role_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName"></a>

```python
database_role_name: str
```

- *Type:* str

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#id GrantOwnership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outbound_privileges`<sup>Optional</sup> <a name="outbound_privileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges"></a>

```python
outbound_privileges: str
```

- *Type:* str

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}

---

### GrantOwnershipOn <a name="GrantOwnershipOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipOn(
  all: GrantOwnershipOnAll = None,
  future: GrantOwnershipOnFuture = None,
  object_name: str = None,
  object_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName">object_name</a></code> | <code>str</code> | Specifies the identifier for the object on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType">object_type</a></code> | <code>str</code> | Specifies the type of object on which you are transferring ownership. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all"></a>

```python
all: GrantOwnershipOnAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#all GrantOwnership#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future"></a>

```python
future: GrantOwnershipOnFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#future GrantOwnership#future}

---

##### `object_name`<sup>Optional</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

Specifies the identifier for the object on which you are transferring ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_name GrantOwnership#object_name}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Specifies the type of object on which you are transferring ownership.

Available values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | COMPUTE POOL | DATA METRIC FUNCTION | DATABASE | DATABASE ROLE | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | EXTERNAL VOLUME | FAILOVER GROUP | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | ICEBERG TABLE | IMAGE REPOSITORY | INTEGRATION | MATERIALIZED VIEW | NETWORK POLICY | NETWORK RULE | PACKAGES POLICY | PIPE | PROCEDURE | MASKING POLICY | PASSWORD POLICY | PROJECTION POLICY | REPLICATION GROUP | RESOURCE MONITOR | ROLE | ROW ACCESS POLICY | SCHEMA | SESSION POLICY | SECRET | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | USER | VIEW | WAREHOUSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_type GrantOwnership#object_type}

---

### GrantOwnershipOnAll <a name="GrantOwnershipOnAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipOnAll(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase">in_database</a></code> | <code>str</code> | The fully qualified name of the database. For more information about this resource, see [docs](./database). |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema">in_schema</a></code> | <code>str</code> | The fully qualified name of the schema. For more information about this resource, see [docs](./schema). |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

### GrantOwnershipOnFuture <a name="GrantOwnershipOnFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipOnFuture(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase">in_database</a></code> | <code>str</code> | The fully qualified name of the database. For more information about this resource, see [docs](./database). |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema">in_schema</a></code> | <code>str</code> | The fully qualified name of the schema. For more information about this resource, see [docs](./schema). |

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

## Classes <a name="Classes" id="Classes"></a>

### GrantOwnershipOnAllOutputReference <a name="GrantOwnershipOnAllOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipOnAllOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue"></a>

```python
internal_value: GrantOwnershipOnAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---


### GrantOwnershipOnFutureOutputReference <a name="GrantOwnershipOnFutureOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipOnFutureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase">reset_in_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema">reset_in_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in_database` <a name="reset_in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase"></a>

```python
def reset_in_database() -> None
```

##### `reset_in_schema` <a name="reset_in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema"></a>

```python
def reset_in_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput">in_database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput">in_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput">object_type_plural_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase">in_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema">in_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural">object_type_plural</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_database_input`<sup>Optional</sup> <a name="in_database_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput"></a>

```python
in_database_input: str
```

- *Type:* str

---

##### `in_schema_input`<sup>Optional</sup> <a name="in_schema_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput"></a>

```python
in_schema_input: str
```

- *Type:* str

---

##### `object_type_plural_input`<sup>Optional</sup> <a name="object_type_plural_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput"></a>

```python
object_type_plural_input: str
```

- *Type:* str

---

##### `in_database`<sup>Required</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase"></a>

```python
in_database: str
```

- *Type:* str

---

##### `in_schema`<sup>Required</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema"></a>

```python
in_schema: str
```

- *Type:* str

---

##### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural"></a>

```python
object_type_plural: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue"></a>

```python
internal_value: GrantOwnershipOnFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---


### GrantOwnershipOnOutputReference <a name="GrantOwnershipOnOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_ownership

grantOwnership.GrantOwnershipOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll">put_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture">put_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture">reset_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName">reset_object_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType">reset_object_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_all` <a name="put_all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll"></a>

```python
def put_all(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll.parameter.objectTypePlural"></a>

- *Type:* str

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll.parameter.inDatabase"></a>

- *Type:* str

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll.parameter.inSchema"></a>

- *Type:* str

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

##### `put_future` <a name="put_future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture"></a>

```python
def put_future(
  object_type_plural: str,
  in_database: str = None,
  in_schema: str = None
) -> None
```

###### `object_type_plural`<sup>Required</sup> <a name="object_type_plural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture.parameter.objectTypePlural"></a>

- *Type:* str

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

###### `in_database`<sup>Optional</sup> <a name="in_database" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture.parameter.inDatabase"></a>

- *Type:* str

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

###### `in_schema`<sup>Optional</sup> <a name="in_schema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture.parameter.inSchema"></a>

- *Type:* str

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

##### `reset_all` <a name="reset_all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_future` <a name="reset_future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture"></a>

```python
def reset_future() -> None
```

##### `reset_object_name` <a name="reset_object_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName"></a>

```python
def reset_object_name() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType"></a>

```python
def reset_object_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput">all_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput">future_input</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput">object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName">object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all"></a>

```python
all: GrantOwnershipOnAllOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future"></a>

```python
future: GrantOwnershipOnFutureOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a>

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput"></a>

```python
all_input: GrantOwnershipOnAll
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `future_input`<sup>Optional</sup> <a name="future_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput"></a>

```python
future_input: GrantOwnershipOnFuture
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `object_name_input`<sup>Optional</sup> <a name="object_name_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput"></a>

```python
object_name_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_name`<sup>Required</sup> <a name="object_name" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName"></a>

```python
object_name: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue"></a>

```python
internal_value: GrantOwnershipOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---



