# `grantDatabaseRole` Submodule <a name="`grantDatabaseRole` Submodule" id="@cdktf/provider-snowflake.grantDatabaseRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantDatabaseRole <a name="GrantDatabaseRole" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role snowflake_grant_database_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_database_role

grantDatabaseRole.GrantDatabaseRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_role_name: str,
  id: str = None,
  parent_database_role_name: str = None,
  parent_role_name: str = None,
  share_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.databaseRoleName">database_role_name</a></code> | <code>str</code> | The fully qualified name of the database role which will be granted to share or parent role. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#id GrantDatabaseRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.parentDatabaseRoleName">parent_database_role_name</a></code> | <code>str</code> | The fully qualified name of the parent database role which will create a parent-child relationship between the roles. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.parentRoleName">parent_role_name</a></code> | <code>str</code> | The fully qualified name of the parent account role which will create a parent-child relationship between the roles. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.shareName">share_name</a></code> | <code>str</code> | The fully qualified name of the share on which privileges will be granted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.databaseRoleName"></a>

- *Type:* str

The fully qualified name of the database role which will be granted to share or parent role.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#database_role_name GrantDatabaseRole#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#id GrantDatabaseRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_database_role_name`<sup>Optional</sup> <a name="parent_database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.parentDatabaseRoleName"></a>

- *Type:* str

The fully qualified name of the parent database role which will create a parent-child relationship between the roles.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#parent_database_role_name GrantDatabaseRole#parent_database_role_name}

---

##### `parent_role_name`<sup>Optional</sup> <a name="parent_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.parentRoleName"></a>

- *Type:* str

The fully qualified name of the parent account role which will create a parent-child relationship between the roles.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#parent_role_name GrantDatabaseRole#parent_role_name}

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.shareName"></a>

- *Type:* str

The fully qualified name of the share on which privileges will be granted.

For more information about this resource, see [docs](./share).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#share_name GrantDatabaseRole#share_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentDatabaseRoleName">reset_parent_database_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentRoleName">reset_parent_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetShareName">reset_share_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_database_role_name` <a name="reset_parent_database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentDatabaseRoleName"></a>

```python
def reset_parent_database_role_name() -> None
```

##### `reset_parent_role_name` <a name="reset_parent_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentRoleName"></a>

```python
def reset_parent_role_name() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetShareName"></a>

```python
def reset_share_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GrantDatabaseRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_database_role

grantDatabaseRole.GrantDatabaseRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_database_role

grantDatabaseRole.GrantDatabaseRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_database_role

grantDatabaseRole.GrantDatabaseRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_database_role

grantDatabaseRole.GrantDatabaseRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GrantDatabaseRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GrantDatabaseRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GrantDatabaseRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantDatabaseRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleNameInput">database_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleNameInput">parent_database_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleNameInput">parent_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleName">database_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleName">parent_database_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleName">parent_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_role_name_input`<sup>Optional</sup> <a name="database_role_name_input" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleNameInput"></a>

```python
database_role_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_database_role_name_input`<sup>Optional</sup> <a name="parent_database_role_name_input" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleNameInput"></a>

```python
parent_database_role_name_input: str
```

- *Type:* str

---

##### `parent_role_name_input`<sup>Optional</sup> <a name="parent_role_name_input" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleNameInput"></a>

```python
parent_role_name_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleName"></a>

```python
database_role_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_database_role_name`<sup>Required</sup> <a name="parent_database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleName"></a>

```python
parent_database_role_name: str
```

- *Type:* str

---

##### `parent_role_name`<sup>Required</sup> <a name="parent_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleName"></a>

```python
parent_role_name: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrantDatabaseRoleConfig <a name="GrantDatabaseRoleConfig" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import grant_database_role

grantDatabaseRole.GrantDatabaseRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_role_name: str,
  id: str = None,
  parent_database_role_name: str = None,
  parent_role_name: str = None,
  share_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.databaseRoleName">database_role_name</a></code> | <code>str</code> | The fully qualified name of the database role which will be granted to share or parent role. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#id GrantDatabaseRole#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentDatabaseRoleName">parent_database_role_name</a></code> | <code>str</code> | The fully qualified name of the parent database role which will create a parent-child relationship between the roles. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentRoleName">parent_role_name</a></code> | <code>str</code> | The fully qualified name of the parent account role which will create a parent-child relationship between the roles. |
| <code><a href="#@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.shareName">share_name</a></code> | <code>str</code> | The fully qualified name of the share on which privileges will be granted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_role_name`<sup>Required</sup> <a name="database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.databaseRoleName"></a>

```python
database_role_name: str
```

- *Type:* str

The fully qualified name of the database role which will be granted to share or parent role.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#database_role_name GrantDatabaseRole#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#id GrantDatabaseRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_database_role_name`<sup>Optional</sup> <a name="parent_database_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentDatabaseRoleName"></a>

```python
parent_database_role_name: str
```

- *Type:* str

The fully qualified name of the parent database role which will create a parent-child relationship between the roles.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#parent_database_role_name GrantDatabaseRole#parent_database_role_name}

---

##### `parent_role_name`<sup>Optional</sup> <a name="parent_role_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentRoleName"></a>

```python
parent_role_name: str
```

- *Type:* str

The fully qualified name of the parent account role which will create a parent-child relationship between the roles.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#parent_role_name GrantDatabaseRole#parent_role_name}

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

The fully qualified name of the share on which privileges will be granted.

For more information about this resource, see [docs](./share).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/grant_database_role#share_name GrantDatabaseRole#share_name}

---



